"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const solid_js_1 = require("solid-js");
const types_1 = require("../types");
const AudioSpinner_1 = __importDefault(require("./AudioSpinner"));
const BallTriangle_1 = __importDefault(require("./BallTriangle"));
const Bars_1 = __importDefault(require("./Bars"));
const Circles_1 = __importDefault(require("./Circles"));
const Grid_1 = __importDefault(require("./Grid"));
const Hearts_1 = __importDefault(require("./Hearts"));
const Oval_1 = __importDefault(require("./Oval"));
const Puff_1 = __importDefault(require("./Puff"));
const Rings_1 = __importDefault(require("./Rings"));
const SpinningCircles_1 = __importDefault(require("./SpinningCircles"));
const TailSpin_1 = __importDefault(require("./TailSpin"));
const ThreeDots_1 = __importDefault(require("./ThreeDots"));
const Spinner = (props) => {
    const mergedProps = (0, solid_js_1.mergeProps)(props);
    return (<solid_js_1.Switch fallback={<Circles_1.default {...mergedProps}/>}>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.audio}>
        <AudioSpinner_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.ballTriangle}>
        <BallTriangle_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.grid}>
        <Grid_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.hearts}>
        <Hearts_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.oval}>
        <Oval_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.bars}>
        <Bars_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.puff}>
        <Puff_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.rings}>
        <Rings_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.spinningCircles}>
        <SpinningCircles_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.tailSpin}>
        <TailSpin_1.default {...mergedProps}/>
      </solid_js_1.Match>
      <solid_js_1.Match when={mergedProps.type === types_1.SpinnerType.threeDots}>
        <ThreeDots_1.default {...mergedProps}/>
      </solid_js_1.Match>
    </solid_js_1.Switch>);
};
exports.default = Spinner;
