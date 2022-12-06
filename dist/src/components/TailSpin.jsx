"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TailSpin = void 0;
const solid_js_1 = require("solid-js");
const TailSpin = (props) => {
    const mergedProps = (0, solid_js_1.mergeProps)(props);
    return (<svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" data-test-name="tail-spin" role="img" {...mergedProps} width={mergedProps.width || 38} height={mergedProps.height || 38} class={mergedProps.class || ''}>
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop stop-color="currentColor" stop-opacity="0" offset="0%"/>
          <stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"/>
          <stop stop-color="currentColor" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
          <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/>
          </path>
          <circle fill="currentColor" cx="36" cy="18" r="1">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/>
          </circle>
        </g>
      </g>
    </svg>);
};
exports.TailSpin = TailSpin;