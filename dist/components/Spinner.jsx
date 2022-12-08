"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const solid_js_1 = require("solid-js");
const types_1 = require("../types");
const AudioSpinner_1 = require("./AudioSpinner");
const BallTriangle_1 = require("./BallTriangle");
const Bars_1 = require("./Bars");
const Circles_1 = require("./Circles");
const Grid_1 = require("./Grid");
const Hearts_1 = require("./Hearts");
const Oval_1 = require("./Oval");
const Puff_1 = require("./Puff");
const Rings_1 = require("./Rings");
const SpinningCircles_1 = require("./SpinningCircles");
const TailSpin_1 = require("./TailSpin");
const ThreeDots_1 = require("./ThreeDots");
const Spinner = (props) => {
    const mergedProps = (0, solid_js_1.mergeProps)(props);
    return (<solid_js_1.Switch fallback={<Circles_1.Circles {...mergedProps}/>}>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.audio}>
        <AudioSpinner_1.AudioSpinner {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.ballTriangle}>
        <BallTriangle_1.BallTriangle {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.grid}>
        <Grid_1.Grid {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.hearts}>
        <Hearts_1.Hearts {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.oval}>
        <Oval_1.Oval {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.bars}>
        <Bars_1.Bars {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.puff}>
        <Puff_1.Puff {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.rings}>
        <Rings_1.Rings {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.spinningCircles}>
        <SpinningCircles_1.SpinningCircles {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.tailSpin}>
        <TailSpin_1.TailSpin {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.threeDots}>
        <ThreeDots_1.ThreeDots {...mergedProps}/>
      </solid_js_1.Match>
    </solid_js_1.Switch>);
};
exports.Spinner = Spinner;
