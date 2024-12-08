import { readPuzzleInput } from '../utils/file-input-reader';

export namespace MullItOver {
  export function solve1(input: string): number {
    const multiplications = input.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/g);
    let sum = 0;
    multiplications?.forEach(m => {
      const [a, b] = m.match(/[0-9]{1,3}/g)!.map(n => +n);
      sum += a * b;
    });

    return sum;
  }

  export function solve2(input: string): number {
    const matches = input.match(/mul\([0-9]{1,3},[0-9]{1,3}\)|don't\(\)|do\(\)/g);
    let sum = 0;
    let enabled = true;
    matches?.forEach(m => {
      const reDoNot = /don't\(\)/;
      const reDo = /do\(\)/;

      if (reDoNot.test(m)) {
        enabled = false;
      } else {
        if (reDo.test(m)) {
          enabled = true;
        } else {
          const [a, b] = m.match(/[0-9]{1,3}/g)!.map(n => +n);
          sum += enabled ? a * b : 0;
        }
      }
    });
    return sum;
  }
}

(async () => {
  const input = await readPuzzleInput('./puzzle-input.txt');
  console.log(MullItOver.solve1(input));
  console.log(MullItOver.solve2(input));
})()
