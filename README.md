# Solid Spinner

Dependency free [SolidJS](https://solidjs.com) adaptation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library.

## ✨ Features

- [12 Spinners](#spinners) totally ready to use.
- [Customizable](#customizable) - receive props to extend their usefulness.
- First class TypeScript support
- Tree shakeable: What you take is what you get.
- [Reactivity](https://www.youtube.com/watch?v=J70HXl1KhWE), take advantage of SolidJS to react to changes in props.
- [Just import and declare](#usage) in your JSX to work out-the-box

## 📦 Installation

### Yarn

```bash
yarn add solid-spinner
```

### NPM

```bash
npm install solid-spinner --save
```

### PNPM

```bash
pnpm install solid-spinner
```

## Usage

### Import `Spinner` component and specify the type of spinner.

```jsx
import { Spinner, SpinnerType } from 'solid-spinner';

<Spinner type={SpinnerType.puff} color="red" />;
```

### Import individual component.

```jsx
import { Puff } from 'solid-spinner';

<Puff color="red" />;
```

## Spinners

| Component Name  | Type            |
| --------------- | --------------- |
| AudioSpinner    | audio           |
| BallTriangle    | ballTriangle    |
| Bars            | bars            |
| Circles         | circles         |
| Grid            | grid            |
| Hearts          | hearts          |
| Oval            | oval            |
| Puff            | puff            |
| Rings           | rings           |
| SpinningCircles | spinningCircles |
| TailSpin        | tailSpin        |
| ThreeDots       | threeDots       |

## Customizable

Each of these components should be able to accept any [SVG tag presentation attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) as props.

```tsx
// render the Puff loader with a stroke opacity of .125
<Spinner type={SpinnerType.puff} stroke-opacity=".125" />

// render the Puff loader with a stroke of mint green
<Puff stroke="#98ff98" />

// render the Puff loader with a stroke of mint green and a stroke opactiy of .125
<Puff stroke="#98ff98" stroke-opacity=".125"/>
```

## Development

```bash
# clone repo
git clone git@github.com:lenniezelk/solid-spinner.git
# cd into project directory
cd solid-spinner
# install packages
pnpm install
```

### Test

```bash
pnpm test
```

### Build for production

```bash
pnpm build
```
