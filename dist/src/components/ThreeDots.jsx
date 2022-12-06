"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solid_js_1 = require("solid-js");
const ThreeDots = (props) => {
    const mergedProps = (0, solid_js_1.mergeProps)(props);
    return (<svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-test-name="three-dots" role="img" {...mergedProps} width={mergedProps.width || 120} height={mergedProps.height || 30} class={mergedProps.class || ''}>
      <circle cx="15" cy="15" r="15">
        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="60" cy="15" r="9" fill-opacity="0.3">
        <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/>
      </circle>
    </svg>);
};
exports.default = ThreeDots;
