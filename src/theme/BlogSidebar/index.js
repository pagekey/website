/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';
import TagsListByLetter from '@theme/TagsListByLetter';
export default function BlogSidebar({sidebar}) {
  if (sidebar.items.length === 0) {
    return null;
  }

  const topics = [
    {
      label: '≤ 90 Seconds',
      to: '/blog/tags/lte-90-sec',
    },
    {
      label: 'Boom Languages',
      to: '/blog/tags/boom-languages',
    },
    {
      label: 'Data Structures & Algorithms',
      to: '/blog/tags/data-structs-and-algs',
    },
    {
      label: 'Quick Python',
      to: '/blog/tags/quick-python',
    },
  ];

  return (
    <nav
      className={clsx(styles.sidebar, 'thin-scrollbar')}
      aria-label={translate({
        id: 'theme.blog.sidebar.navAriaLabel',
        message: 'Blog recent posts navigation',
        description: 'The ARIA label for recent posts in the blog sidebar',
      })}>

      <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
        <Link
          style={{color: 'inherit'}}
          to='/blog/tags/'
          >
          Topics
        </Link>
      </div>
      <ul className={styles.sidebarItemList}>
        {topics.map((item) => (
        <div>
          <Link
            isNavLink
            to={item.to}
            className={styles.sidebarItemLink}
            activeClassName={styles.sidebarItemLinkActive}
            >
            {item.label}
          </Link>
        </div>
        ))}
      </ul>

      <div style={{display:'block',height:'1em'}}></div>
      
      <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
        <Link
          style={{color: 'inherit'}}
          to='/blog/'
          >
          {sidebar.title}
        </Link>
      </div>
      <ul className={styles.sidebarItemList}>
        {sidebar.items.map((item) => (
          <li key={item.permalink} className={styles.sidebarItem}>
            <Link
              isNavLink
              to={item.permalink}
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
        <Link
          style={{color: 'inherit'}}
          to='/blog/archive/'
          >
          All Posts
        </Link>
      </div>
    </nav>
  );
}
