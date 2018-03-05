/* eslint-env jest */
import Block from '../index';
import BlockComponent from '../components/Block';

describe('index.js', () => {
  it('should correctly export all component as named export', () => {
    expect(Block).toEqual(BlockComponent);
  });
});
