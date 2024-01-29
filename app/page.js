import Link from 'next/link';

import ImageSlideshow from '@/components/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Your Vegan Place</h1>
            <p>Share vegan food and recipes from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
          Your Vegan Place is a platform for vegan foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
          Your Vegan Place is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Vegan Food?</h2>
          <p>
            why not? its healthy, humanity, support climate change solution, green and it is cheeper!
          </p>
         
        </section>
      </main>
    </>
  );
}
