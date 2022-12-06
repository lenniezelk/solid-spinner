"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const solid_testing_library_1 = require("solid-testing-library");
const Spinner_1 = __importDefault(require("../Spinner"));
const types_1 = require("../../types");
(0, vitest_1.describe)('<TailSpin />', () => {
    (0, vitest_1.afterEach)(solid_testing_library_1.cleanup);
    (0, vitest_1.test)('default params', async () => {
        // arrange
        (0, solid_testing_library_1.render)(() => <Spinner_1.default type={types_1.SpinnerType.tailSpin}/>);
        // act
        const svg = await solid_testing_library_1.screen.findByRole('img');
        const width = svg.getAttribute('width');
        const height = svg.getAttribute('height');
        const class_ = svg.getAttribute('class');
        const viewBox = svg.getAttribute('viewBox');
        const testName = svg.getAttribute('data-test-name');
        // assert
        (0, vitest_1.expect)(width).toBe('38');
        (0, vitest_1.expect)(height).toBe('38');
        (0, vitest_1.expect)(class_).toBe('');
        (0, vitest_1.expect)(viewBox).toBe('0 0 38 38');
        (0, vitest_1.expect)(testName).toBe('tail-spin');
    });
    (0, vitest_1.test)('change params', async () => {
        // arrange
        (0, solid_testing_library_1.render)(() => (<Spinner_1.default width={50} height="60" class="spinner" style={{ margin: '10px' }} type={types_1.SpinnerType.tailSpin} color="red"/>));
        // act
        const svg = await solid_testing_library_1.screen.findByRole('img');
        const width = svg.getAttribute('width');
        const height = svg.getAttribute('height');
        const viewBox = svg.getAttribute('viewBox');
        const class_ = svg.getAttribute('class');
        const style = svg.getAttribute('style');
        const color = svg.getAttribute('color');
        // assert
        (0, vitest_1.expect)(width).toBe('50');
        (0, vitest_1.expect)(height).toBe('60');
        (0, vitest_1.expect)(viewBox).toBe('0 0 38 38');
        (0, vitest_1.expect)(class_).toBe('spinner');
        (0, vitest_1.expect)(style).toBe('margin: 10px;');
        (0, vitest_1.expect)(color).toBe('red');
    });
});
