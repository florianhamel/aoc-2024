import { MullItOver } from './mull-it-over';

describe('mull it over', () => {
  it('should add up multiplication results', () => {
    // given
    const input = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

    // when
    const result = MullItOver.solve1(input);

    // then
    expect(result).toEqual(161);
  });

  it('should add up multiplication results with do and don\'t', () => {
    // given
    const input = 'xmul(2,4)&mul[3,7]!^don\'t()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))';

    // when
    const result = MullItOver.solve2(input);

    // then
    expect(result).toEqual(48);
  });
});
