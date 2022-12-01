import { afterEach, describe, expect, test } from 'vitest';
import { render, fireEvent, screen, cleanup } from 'solid-testing-library';
import Spinner from './Spinner';
import { SpinnerType } from '../types';

describe('<Spinner />', () => {
  afterEach(cleanup);

  describe('<Circles />', () => {
    test('default params', async () => {
      // arrange
      render(() => <Spinner />);

      // act
      const svg = await screen.findByRole('img');
      let width = svg.getAttribute('width');
      let height = svg.getAttribute('height');
      let class_ = svg.getAttribute('class');
      let viewBox = svg.getAttribute('viewBox');
      let testName = svg.getAttribute('data-test-name');

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
      expect(viewBox).toBe('0 0 135 135');
      expect(class_).toBe('spinner');
      expect(style).toBe('margin: 10px;');
    });
  });
});
