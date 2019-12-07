/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef((props, ref) => {
  const {
    as, href, prefetch, ...other
  } = props;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} /* eslint-disable-line */ />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool,
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;
  const router = useRouter();

  const className = clsx(classNameProps, {
    // eslint-disable-line react/destructuring-assignment
    [activeClassName]: router.pathname === props.href  /* eslint-disable-line */ && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} {...other}  /* eslint-disable-line *//>;
  }

  return <MuiLink component={NextComposed} className={className} ref={innerRef} {...other}  /* eslint-disable-line */ />;
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
};

export default React.forwardRef((props, ref) => <Link {...props} innerRef={ref}  /* eslint-disable-line */ />);
