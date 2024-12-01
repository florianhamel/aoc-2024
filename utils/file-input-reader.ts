import * as fs from 'fs';

export const PUZZLE_INPUT = './puzzle-input.txt';

export async function readPuzzleInput(filePath: string): Promise<string> {
  try {
    return await fs.promises.readFile(filePath, 'utf8');
  } catch (error: any) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}
