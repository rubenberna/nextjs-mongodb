import axios from 'axios'

import Layout from '../components/Layout'
import Headline from '../components/headline'
import SeoTable from '../components/table'

const Complex = ({content, slug, origin}) => (
  <Layout>
    <h1>{slug}</h1>
    <Headline content={content}/>
    <SeoTable slug={slug} origin={origin}/>
  </Layout>
)


/*
Each Next.js page component allows us to fetch data server-side thanks to a function called getInitialProps. When this function is called, the initial page load is rendered server-side, which is great for SEO.
*/

Complex.getInitialProps = async (context) => {
  const { asPath } = context
  if ( asPath !== '/favicon.ico' ) {
    const { host } = context.req.headers
    const urlContent = await axios.post(`https://${host}/api/content`, {asPath})
    const { data } = urlContent
    return {
      content: data[0],
      slug: asPath,
      origin: host
    }
  }
}

export default Complex
