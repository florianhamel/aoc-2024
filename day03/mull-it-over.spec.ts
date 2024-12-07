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
});
