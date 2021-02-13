import css from "./index.module.scss";

export default function Landing() {
    return (
      <div className={css.container}>
        <main className={css.main}>
          <h1 className={css.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
  
          <p className={css.description}>
            Get started by editing{' '}
            <code className={css.code}>pages/index.js</code>
          </p>
  
          <div className={css.grid}>
            <a href="https://nextjs.org/docs" className={css.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
  
            <a href="https://nextjs.org/learn" className={css.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
  
            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={css.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
  
            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={css.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </div>
    )
  }  