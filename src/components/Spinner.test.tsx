import { afterEach, describe, expect, test } from 'vitest';
import { render, fireEvent, screen, cleanup } from 'solid-testing-library';
import Spinner from './Spinner';
import { SpinnerType } from '../types';

describe('<Spinner />', () => {
  afterEach(cleanup);

  describe('<Circles />', () => {
    test('default params', async () => {
      // default
      // assemble
      render(() => <Spinner />);
      const svg = await screen.findByRole('img');

      // act

      // assert
      let width = svg.getAttribute('width');
      let height = svg.getAttribute('height');
      let class_ = svg.getAttribute('class');
      let viewBox = svg.getAttribute('viewBox');
      expect(width).toBe('135');
      expect(height).toBe('135');
      expect(class_).toBe('');
      expect(viewBox).toBe('0 0 135 135');
    });

    test('change params', async () => {
      // default
      // assemble
      render(() => <Spinner width={50} height="60" className="spinner" />);
      const svg = await screen.findByRole('img');

      // act

      // assert
      let width = svg.getAttribute('width');
      let height = svg.getAttribute('height');
      let viewBox = svg.getAttribute('viewBox');
      let class_ = svg.getAttribute('class');
      expect(width).toBe('50');
      expect(height).toBe('60');
      expect(viewBox).toBe('0 0 50 60');
      expect(class_).toBe('spinner');
    });
  });
});
