"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Puff = void 0;
const solid_js_1 = require("solid-js");
const Puff = (props) => {
    const mergedProps = (0, solid_js_1.mergeProps)(props);
    return (<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-test-name="puff" role="img" stroke="currentColor" {...mergedProps} width={mergedProps.width || 44} height={mergedProps.height || 44} class={mergedProps.class || ''}>
      <g fill="none" fill-rule="evenodd" stroke-width="2">
        <circle cx="22" cy="22" r="1">
          <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
        </circle>
        <circle cx="22" cy="22" r="1">
          <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>);
};
exports.Puff = Puff;
