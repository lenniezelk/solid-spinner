import { afterEach, describe, expect, test } from 'vitest';
import { render, screen, cleanup } from 'solid-testing-library';
import Spinner from '../Spinner';

describe('<Circles />', () => {
  afterEach(cleanup);
  test('default params', async () => {
    // arrange
    render(() => <Spinner />);

    // act
    const svg = await screen.findByRole('img');
    const width = svg.getAttribute('width');
    const height = svg.getAttribute('height');
    const class_ = svg.getAttribute('class');
    const viewBox = svg.getAttribute('viewBox');
    const testName = svg.getAttribute('data-test-name');

    // assert
    expect(width).toBe('135');
    expect(height).toBe('135');
    expect(class_).toBe('');
    expect(viewBox).toBe('0 0 135 135');
    expect(testName).toBe('circles');
  });

  test('change params', async () => {
    // arrange
    render(() => (
      <Spinner
        width={50}
        height="60"
        class="spinner"
        style={{ margin: '10px' }}
        color="red"
      />
    ));

    // act
    const svg = await screen.findByRole('img');
    const width = svg.getAttribute('width');
    const height = svg.getAttribute('height');
    const viewBox = svg.getAttribute('viewBox');
    const class_ = svg.getAttribute('class');
    const style = svg.getAttribute('style');
    const color = svg.getAttribute('color');

    // assert
    expect(width).toBe('50');
    expect(height).toBe('60');
    expect(viewBox).toBe('0 0 135 135');
    expect(class_).toBe('spinner');
    expect(style).toBe('margin: 10px;');
    expect(color).toBe('red');
  });
});
