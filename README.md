# Pluralize: React Component

Pluralization component for React.

## Install

```
npm install --save pluralize-react
```
or
```
yarn add pluralize-react
```

## Usage

Normal usage

```
<Pluralize count={5000} singular="Example" /> output: 5,000 Examples
```

Custom plural

```
<Pluralize count={5000} singular="Person" plural="People" /> output: 5,000 People
```

Zero Count

```
<Pluralize count={0} singular="Example" zero="No Examples" /> output: No Examples
```

Hide Count

```
<Pluralize count={0} singular="Example" showCount={false} /> output: Examples
```

### Props
- count: number;
- singular: string;
- plural?: string;
- zero?: string;
- className?: string;
- showCount?: boolean;

## Development

- Clone the repo
- yarn install
- yarn storybook for preview
