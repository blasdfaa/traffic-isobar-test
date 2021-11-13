import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import clsx from 'clsx';

function NavigationLink({ children, to, className, activeClassName, ...restProps }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={clsx(className, match && activeClassName)} to={to} {...restProps}>
      {children}
    </Link>
  );
}

export default NavigationLink;
