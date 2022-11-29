import { JSX } from 'solid-js/jsx-runtime';
import AudioSpinner from './AudioSpinner';
import BallTriangle from './BallTriangle';
import { SpinnerProps, SpinnerType } from '../types';
import { Match, Switch } from 'solid-js';
import Circles from './Circles';

const Spinner = ({
  type = SpinnerType.circles,
  width,
  height,
  className,
  style,
}: SpinnerProps): JSX.Element => {
  return (
    <Switch
      fallback={
        <Circles
          width={width}
          height={height}
          className={className}
          style={style}
        />
      }
    >
      <Match when={type === SpinnerType.audio}>
        <AudioSpinner
          width={width}
          height={height}
          className={className}
          style={style}
        />
      </Match>
      <Match when={type === SpinnerType.ballTriangle}>
        <BallTriangle
          width={width}
          height={height}
          className={className}
          style={style}
        />
      </Match>
    </Switch>
  );
};

export default Spinner;
