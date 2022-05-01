import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Home.module.css';
import HomepageFeatures from './HomepageFeatures';
import RecentPostsList from './RecentPostsList';
import PageDivider from './PageDivider';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to {siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(props) {
  let recentPosts = props.recentPosts;
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Taking Back Tech"
    >
      <HomepageHeader />
      <PageDivider text="What We Do" />
      <HomepageFeatures />
      <PageDivider text="Recent Posts" />
      <RecentPostsList posts={recentPosts} />
    </Layout>
  );
}
