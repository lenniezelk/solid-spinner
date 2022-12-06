"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solid_js_1 = require("solid-js");
const Grid = (props) => {
    const mergedProps = (0, solid_js_1.mergeProps)(props);
    return (<svg viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-test-name="grid" role="img" {...mergedProps} width={mergedProps.width || 105} height={mergedProps.height || 105} class={mergedProps.class || ''}>
      <circle cx="12.5" cy="12.5" r="12.5">
        <animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
        <animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
        <animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
        <animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
        <animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
        <animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
        <animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
        <animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
        <animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
    </svg>);
};
exports.default = Grid;
