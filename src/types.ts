import { JSX } from 'solid-js';

export type SpinnerProps = {
  width?: string | number;
  height?: string | number;
  type?: SpinnerType;
  class?: string;
  style?: JSX.CSSProperties;
};

export enum SpinnerType {
  audio = 'audio',
  ballTriangle = 'ballTriangle',
  circles = 'circles',
  bars = 'bars',
}
