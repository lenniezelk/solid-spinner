"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oval = void 0;
const solid_js_1 = require("solid-js");
const Oval = (props) => {
    const mergedProps = (0, solid_js_1.mergeProps)(props);
    return (<svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-test-name="oval" role="img" stroke="currentColor" {...mergedProps} width={mergedProps.width || 38} height={mergedProps.height || 38} class={mergedProps.class || ''}>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
          </path>
        </g>
      </g>
    </svg>);
};
exports.Oval = Oval;
