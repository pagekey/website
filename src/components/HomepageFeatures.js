import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tech Tutorials',
    Svg: require('../../static/img/undraw_youtube_tutorial.svg').default,
    description: (
      <>
        We have a ton of online tutorial videos and articles to help you take control of your tech!
      </>
    ),
  },
  {
    title: 'Custom Apps',
    Svg: require('../../static/img/undraw_mobile.svg').default,
    description: (
      <>
        We've authored several custom mobile apps available on Android, iOS, and web.
      </>
    ),
  },
  {
    title: 'Professional Websites',
    Svg: require('../../static/img/undraw_website_builder.svg').default,
    description: (
      <>
        We've created websites for several small businesses in our area.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
