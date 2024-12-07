import { redNosedReports } from './red-nosed-reports';

describe('red-nosed reports', () => {

  it('should count safe reports', () => {
    // given
    const input =
      '7 6 4 2 1\n' +
      '1 2 7 8 9\n' +
      '9 7 6 2 1\n' +
      '1 3 2 4 5\n' +
      '8 6 4 4 1\n' +
      '1 3 6 7 9';

    // when
    const result = redNosedReports.solve1(input);

    // then
    expect(result).toEqual(2);
  });

  it('should count safe reports modulo one bad level', () => {
    // given
    const input =
      '7 6 4 2 1\n' +
      '1 2 7 8 9\n' +
      '9 7 6 2 1\n' +
      '1 3 2 4 5\n' +
      '8 6 4 4 1\n' +
      '1 3 6 7 9\n' +
      '40 38 42 45 48\n' +
      '10 7 24 5 3 1\n' +
      '35 37 33 30 27\n' +
      '30 30 31 34\n' +
      '48 46 47 49 51 54 56\n' +
      '1 1 2 3 4 5\n' +
      '1 2 3 4 5 5\n' +
      '5 1 2 3 4 5\n' +
      '1 4 3 2 1\n' +
      '1 6 7 8 9\n' +
      '1 2 3 4 3\n' +
      '9 8 7 6 7\n' +
      '7 10 8 10 11\n' +
      '29 28 27 25 26 25 22 20';

    // when
    const result = redNosedReports.solve2(input);

    // then
    expect(result).toEqual(18);
  });
});
