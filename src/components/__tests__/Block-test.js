/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import Block from '../Block';

// TODO
function expectToMatchSnapshot(component) {
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
}

describe('<Block />', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = error => {
      throw new Error(error);
    };
  });

  it('should have sane defaults', () => {
    expectToMatchSnapshot(<Block />);
  });

  it('should accept className', () => {
    expectToMatchSnapshot(<Block className="block" />);
  });
});
