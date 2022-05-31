import React from 'react';
import { Meta } from '@storybook/react';
import { Pluralize } from '../src';

const meta: Meta = {
  title: 'Pluralize',
  component: Pluralize,
};

export default meta;

export const Simple = () => {
  return (
    <div>
      <div>
        <Pluralize count={1} singular="Example" />
      </div>
      <div>
        <Pluralize count={5000} singular="Example" />
      </div>
    </div>
  );
};

export const WithCustomPlural = () => {
  return (
    <div>
      <div>
        <Pluralize count={1} singular="Person" plural="People" />
      </div>
      <div>
        <Pluralize count={5000} singular="Person" plural="People" />
      </div>
    </div>
  );
};

export const ZeroCount = () => {
  return (
    <div>
      <div>
        <Pluralize count={0} singular="Example" />
      </div>
      <div>
        <Pluralize count={0} singular="Example" zero="No Examples" />
      </div>
    </div>
  );
};

export const HideCount = () => {
  return (
    <div>
      <div>
        <Pluralize count={0} singular="Example" />
      </div>
      <div>
        <Pluralize count={0} singular="Example" showCount={false} />
      </div>
    </div>
  );
};
