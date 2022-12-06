# [WIP] Solid Spinner

Dependency free [SolidJS](https://solidjs.com) adaptation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library.

## ✨ Features

- [12 Spinners](#-included-icons-pack) totally ready to use.
- Tree shakeable: What you take is what you get.
- [Customizable](#%EF%B8%8F-configuration) - receive props to extend their usefulness.
- [Reactivity](https://www.youtube.com/watch?v=J70HXl1KhWE), take advantage of SolidJS to react to changes in props.
- [Just import and declare](#usage) in your JSX to work out-the-box
- First class TypeScript support

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
