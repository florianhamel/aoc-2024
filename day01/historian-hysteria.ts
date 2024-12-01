import { readPuzzleInput } from '../utils/file-input-reader';

export async function solve() {
  const input = await readPuzzleInput('./puzzle-input.txt');
  const rows = input.trim().split('\n');
  const l1: number[] = [];
  const l2: number[] = [];
  
  rows.forEach((row) => {
    const splitRow = row.split('   ');
    l1.push(+splitRow[0]);
    l2.push(+splitRow[1]);
  });

  l1.sort();
  l2.sort();

  const diffs: number[] = [];
  for (let i = 0; i < l1.length && i < l2.length; ++i) {
    diffs.push(Math.abs(l1[i] - l2[i]));
  }

  return diffs.reduce((acc, curr) => acc + curr, 0);
}