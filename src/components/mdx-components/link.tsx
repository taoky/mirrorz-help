import style9 from 'style9';
import ExternalLink from '../external-link';
import NextLink from 'next/link';
import { memo } from 'react';

const styles = style9.create({
  base: {
    color: 'var(--text-link)',
    display: 'inline',
    borderBottomWidth: '1px',
    borderBottomColor: 'transparent',
    borderBottomStyle: 'solid',
    transitionDuration: '100ms',
    transitionProperty: 'color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
    lineHeight: 1.5,
    ':hover': {
      borderBottomColor: 'var(--text-link)'
    }
  }
});

function Link({ href, ...props }: Omit<JSX.IntrinsicElements['a'], 'className' | 'ref'>) {
  if (!href) {
    return <a href={href} className={styles('base')} {...props} />;
  }
  if (href.startsWith('https://') || href.startsWith('http://')) {
    return <ExternalLink href={href} className={styles('base')} {...props} />;
  }
  return <NextLink href={href} className={styles('base')} {...props} />;
}

export default memo(Link);
