import React from 'react';
import styles from './hero.module.scss';
import Link from 'next/link'

export default function Hero({ hero }) {

  return (
    <div className={styles.hero}>
      <div className={styles.heroTextbox}>
        <h1>
          {hero.headline}
        </h1>
        <p>{hero.summary}</p>
        <Link href={hero.buttonLink}>
          <a>{hero.buttonText}</a>
        </Link>
      </div>
      <img className={styles.heroImg} src={hero.image} />
    </div>
  );

};