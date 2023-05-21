import Head from 'next/head';
import utilStyles from '../styles/utils.module.css'
import { Layout, siteTitle } from '../components/layout';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Santa. I deliver presents to good kids on Christmas.</p>
        <p>
          I hate to say it, but the bad kids do get coal
        </p>
      </section>
    </Layout>
  )
}
