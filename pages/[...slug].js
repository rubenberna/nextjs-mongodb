import axios from 'axios'

import Layout from '../components/Layout'
import Headline from '../components/headline'
import SeoTable from '../components/table'

const Complex = ({content, slug, baseURL}) => (
  <Layout>
    <h1>{slug}</h1>
    <Headline content={content}/>
    <SeoTable slug={slug} baseURL={baseURL}/>
  </Layout>
)


/*
Each Next.js page component allows us to fetch data server-side thanks to a function called getInitialProps. When this function is called, the initial page load is rendered server-side, which is great for SEO.
*/

Complex.getInitialProps = async ({asPath}) => {
  const baseURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : 'https://seo-shell.now.sh'
  if ( asPath !== '/favicon.ico' ) {
    const urlContent = await axios.post(`${baseURL}/api/content`, {asPath})
    const { data } = urlContent
    return {
      content: data[0],
      slug: asPath,
      baseURL
    }
  }
}

export default Complex
