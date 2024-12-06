import { readPuzzleInput } from '../utils/file-input-reader';

export namespace redNosedReports {
  export function solve1(input: string): number {
    let safeReports = 0;
    const lines = input.trim().split('\n');
    lines.forEach(l => {
      const report = l.split(' ').map(n => +n);
      console.log(report);
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
      if (isAsc && (diff > 3 || 1 > diff)) {
        return false;
      } else if (!isAsc && diff > -1 || -3 > diff) {
        return false
      }
    }
    return true;
  }
}

(async () => {
  const input = await readPuzzleInput('./puzzle-input.txt');
  console.log(redNosedReports.solve1(input));
})()
