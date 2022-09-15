//#region 워커없이 소수찾기
// const sMin = 2;
// const sMax = 10000000;
// const sPrimes = [];

// function generatePrimes(start, range) {
//   let isPrime = true;
//   const end = start + range;
//   for (let i = start; i < end; i++) {
//     for (let j = sMin; j < Math.sqrt(end); j++) {
//       if (i !== j && i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       sPrimes.push(i);
//     }
//     isPrime = true;
//   }
// }

// console.time("prime");
// generatePrimes(sMin, sMax);
// console.timeEnd("prime");
// console.log(sPrimes.length);
//#endregion

//#region 워커로 소수찾기
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

const wMin = 2;
let wPrimes = []; // 변수가담고있는 값이 바뀔때 let, const는 상수값을 담을때 쓴다. 배열안의 값이 바뀔땐 어떤걸써도 상관은 없다.

function findPrimes(start, range) {
  let isPrime = true;
  let end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = wMin; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      wPrimes.push(i);
    }
    isPrime = true;
  }
}

if (isMainThread) {
  const wMax = 10000000;
  const threadCount = 8;
  const threads = new Set();
  const range = Math.ceil((wMax - wMin) / threadCount);
  let start = wMin;
  console.time("prime");

  for (let i = 0; i < threadCount - 1; i++) {
    const wStart = start;
    threads.add(
      new Worker(__filename, { workerData: { start: wStart, range } })
    );
    start += range;
  }

  threads.add(
    new Worker(__filename, {
      workerData: { start, range: range + ((wMax - wMin + 1) % threadCount) },
    })
  );

  // 스레드마다 에러가 있을시 throw err
  for (let worker of threads) {
    worker.on("error", (err) => {
      throw err;
    });

    worker.on("exit", () => {
      threads.delete(worker);

      if (threads.size === 0) {
        console.timeEnd("prime");
        console.log(wPrimes.length);
      }
    });

    worker.on("message", (msg) => {
      wPrimes = wPrimes.concat(msg); // concat에서 const wPrimes선언이 문제가 되었음 wPrimes값을 다시 wPrimes.concat으로 다시 바꿔줬으므로 const사용불가
      // concat이란, 두개의 문자열을 하나의 문자열로 만들어주는 메소드
    });
  }
} else {
  findPrimes(workerData.start, workerData.range);
  parentPort.postMessage(wPrimes);
}
//#endregion
