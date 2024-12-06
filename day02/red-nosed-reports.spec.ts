import { redNosedReports } from './red-nosed-reports';
import solve1 = redNosedReports.solve1;

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
    const result = solve1(input);

    // then
    expect(result).toEqual(2);
  });

});
