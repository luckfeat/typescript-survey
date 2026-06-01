import type { ComponentProps } from 'react';

const Button = ({ children, ...props }: ComponentProps<'button'>) => {
  return <button {...props}>{children}</button>;
};

export default Button;
