import { readPuzzleInput } from '../utils/file-input-reader';

export namespace MullItOver {
  export function solve1(input: string): number {
    const multiplications = input.match(/mul\([0-9]{0,3},[0-9]{1,3}\)/gm);
    let sum = 0;
    console.log(multiplications);
    multiplications?.forEach(m => {
      const [a, b] = m.match(/[0-9]{1,3}/g)!.map(n => +n);
      sum += a * b;
    });

    return sum;
  }
}

(async () => {
  const input = await readPuzzleInput('./puzzle-input.txt');
  console.log(MullItOver.solve1(input));
})()
