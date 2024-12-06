import { solve1, solve2 } from './historian-hysteria';

describe('historian hysteria', () => {
  it('should find sum of diffs', () => {
    // Given
    const input =
      '3   4\n' +
      '4   3\n' +
      '2   5\n' +
      '1   3\n' +
      '3   9\n' +
      '3   3';

    // When
    const result = solve1(input);

    // Then
    expect(result).toEqual(11);
  });

  it('should calculate similarity score', () => {
    // Given
    const input =
      '3   4\n' +
      '4   3\n' +
      '2   5\n' +
      '1   3\n' +
      '3   9\n' +
      '3   3';

    // When
    const result = solve2(input);

    // Then
    expect(result).toEqual(31);
  });
});
