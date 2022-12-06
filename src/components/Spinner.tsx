import { Component, Match, mergeProps, Switch } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { SpinnerProps, SpinnerType } from '../types';
import { AudioSpinner } from './AudioSpinner';
import { BallTriangle } from './BallTriangle';
import { Bars } from './Bars';
import { Circles } from './Circles';
import { Grid } from './Grid';
import { Hearts } from './Hearts';
import { Oval } from './Oval';
import { Puff } from './Puff';
import { Rings } from './Rings';
import { SpinningCircles } from './SpinningCircles';
import { TailSpin } from './TailSpin';
import { ThreeDots } from './ThreeDots';

export const Spinner: Component<SpinnerProps> = (
  props: SpinnerProps,
): JSX.Element => {
  const mergedProps = mergeProps(props);

  return (
    <Switch fallback={<Circles {...mergedProps} />}>
      <Match when={mergedProps.type === SpinnerType.audio}>
        <AudioSpinner {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.ballTriangle}>
        <BallTriangle {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.grid}>
        <Grid {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.hearts}>
        <Hearts {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.oval}>
        <Oval {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.bars}>
        <Bars {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.puff}>
        <Puff {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.rings}>
        <Rings {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.spinningCircles}>
        <SpinningCircles {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.tailSpin}>
        <TailSpin {...mergedProps} />
      </Match>
      <Match when={mergedProps.type === SpinnerType.threeDots}>
        <ThreeDots {...mergedProps} />
      </Match>
    </Switch>
  );
};
