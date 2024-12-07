import { readPuzzleInput } from '../utils/file-input-reader';

export namespace redNosedReports {
  export function solve1(input: string): number {
    let safeReports = 0;
    const lines = input.trim().split('\n');
    lines.forEach(l => {
      const report = l.split(' ').map(n => +n);
      if (isSafeReport(report)) {
        ++safeReports;
      }
    });

    return safeReports;
  }

  function isSafeReport(report: number[]): boolean {
    if (report.length < 2) {
      return true;
    }
    const isAsc = report[1] - report[0] > 0;
    for (let i = 1; i < report.length; ++i) {
      const diff = report[i] - report[i - 1];
      if (isBadData(isAsc, diff)) {
        return false;
      }
    }

    return true;
  }

  function isBadData(isAsc: boolean, diff: number): boolean {
    if (isAsc && (diff > 3 || 1 > diff)) {
      return true;
    }

    return !isAsc && (diff > -1 || -3 > diff);
  }

  export function solve2(input: string): number {
    let safeReports = 0;
    const lines = input.trim().split('\n');
    lines.forEach(l => {
      const report = l.split(' ').map(n => +n);
      if (isReportAsc(report) || isReportDesc(report)) {
        ++safeReports;
      }
    });

    return safeReports;
  }

  function isReportAsc(report: number[]): boolean {
    let isJokerUsed = false;
    for (let i = 1; i < report.length; ++i) {
      if (!isAsc(report[i] - report[i - 1])) {
        if (isJokerUsed) {
          return false;
        }
        if (isAsc(report[i + 1] - report [i - 1])) {
          report = report.toSpliced(i, 1);
        } else {
          if (i !== 1 && i !== report.length - 1 && !isAsc(report[i] - report[i - 2])) {
            return false;
          }
        }
        isJokerUsed = true;
      }
    }

    return true;
  }

  function isReportDesc(report: number[]): boolean {
    let isJokerUsed = false;
    for (let i = 1; i < report.length; ++i) {
      if (!isDesc(report[i] - report[i - 1])) {
        if (isJokerUsed) {
          return false;
        }
        if (isDesc(report[i + 1] - report [i - 1])) {
          report = report.toSpliced(i, 1);
        } else {
          if (i !== 1 && i !== report.length - 1 && !isDesc(report[i] - report[i - 2])) {
            return false;
          }
        }
        isJokerUsed = true;
      }
    }

    return true;
  }

  function isAsc(diff: number): boolean {
    return 4 > diff && diff > 0;
  }

  function isDesc(diff: number): boolean {
    return 0 > diff && diff > -4;
  }
}

(async () => {
  const input = await readPuzzleInput('./puzzle-input.txt');
  console.log(redNosedReports.solve1(input));
  console.log(redNosedReports.solve2(input));
})();
