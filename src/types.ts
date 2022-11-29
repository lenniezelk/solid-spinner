import { JSX } from 'solid-js';

export interface SpinnerProps {
  width?: string | number;
  height?: string | number;
  type?: SpinnerType;
  className?: string;
  style?: JSX.CSSProperties;
}

export enum SpinnerType {
  audio = 'audio',
  ballTriangle = 'ballTriangle',
  circles = 'circles',
}
