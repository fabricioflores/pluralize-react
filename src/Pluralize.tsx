
import React, { FC, useMemo } from 'react';
import pluralizeLib from 'pluralize';

export interface PluralizeProps {
  count: number;
  singular: string;
  plural?: string;
  zero?: string;
  className?: string;
  showCount?: boolean;
}

export const Pluralize: FC<PluralizeProps> = ({
  count = 0,
  singular,
  className,
  showCount = true,
  plural,
  zero
}) => {
  const pluralizedString = useMemo(() => {
    if (count === 0 && zero) {
      return zero;
    }
    let returnedString = singular;
    if (count !== 1) {
      returnedString = plural || pluralizeLib(singular, count);
    }
    return showCount
      ? `${count.toLocaleString()} ${returnedString}`
      : returnedString;
  }, [count, singular, plural, zero, showCount]);

  return <span className={className}>{pluralizedString}</span>;
};
