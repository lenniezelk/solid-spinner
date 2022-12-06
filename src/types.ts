import { JSX } from 'solid-js';

export interface SpinnerProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  type?: SpinnerType;
  class?: string;
  style?: JSX.CSSProperties;
}

export enum SpinnerType {
  audio = 'audio',
  ballTriangle = 'ballTriangle',
  circles = 'circles',
  bars = 'bars',
  grid = 'grid',
  hearts = 'hearts',
  oval = 'oval',
  puff = 'puff',
  rings = 'rings',
  tailSpin = 'tailSpin',
  spinningCircles = 'spinningCircles',
  threeDots = 'threeDots',
}
