import { afterEach, describe, expect, test } from 'vitest';
import { render, screen, cleanup } from 'solid-testing-library';
import Spinner from '../Spinner';
import { SpinnerType } from '../../types';

describe('<Oval />', () => {
  afterEach(cleanup);
  test('default params', async () => {
    // arrange
    render(() => <Spinner type={SpinnerType.oval} />);

    // act
    const svg = await screen.findByRole('img');
    let width = svg.getAttribute('width');
    let height = svg.getAttribute('height');
    let class_ = svg.getAttribute('class');
    let viewBox = svg.getAttribute('viewBox');
    let testName = svg.getAttribute('data-test-name');

    // assert
    expect(width).toBe('38');
    expect(height).toBe('38');
    expect(class_).toBe('');
    expect(viewBox).toBe('0 0 38 38');
    expect(testName).toBe('oval');
  });

  test('change params', async () => {
    // arrange
    render(() => (
      <Spinner
        width={50}
        height="60"
        class="spinner"
        style={{ margin: '10px' }}
        type={SpinnerType.oval}
      />
    ));

    // act
    const svg = await screen.findByRole('img');
    let width = svg.getAttribute('width');
    let height = svg.getAttribute('height');
    let viewBox = svg.getAttribute('viewBox');
    let class_ = svg.getAttribute('class');
    let style = svg.getAttribute('style');

    // assert
    expect(width).toBe('50');
    expect(height).toBe('60');
    expect(viewBox).toBe('0 0 38 38');
    expect(class_).toBe('spinner');
    expect(style).toBe('margin: 10px;');
  });
});