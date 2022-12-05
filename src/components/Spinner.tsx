import { Component, Match, mergeProps, Switch } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { SpinnerProps, SpinnerType } from '../types';
import AudioSpinner from './AudioSpinner';
import BallTriangle from './BallTriangle';
import Circles from './Circles';
import Grid from './Grid';
import Hearts from './Hearts';

const Spinner: Component<SpinnerProps> = (props: SpinnerProps): JSX.Element => {
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
    </Switch>
  );
};

export default Spinner;
