import { solve } from './historian-hysteria';


describe('historian hysteria', () => {
  it('should find sum of diffs', async () => {
    // Given
    const input =
      '3   4\n' +
      '4   3\n' +
      '2   5\n' +
      '1   3\n' +
      '3   9\n' +
      '3   3';

    // When
    const result = await solve();

    // Then
    expect(result).toEqual(11)
  });
});
