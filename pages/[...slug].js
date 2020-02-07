import axios from 'axios'

import Layout from '../components/Layout'
import Headline from '../components/headline'
import SeoTable from '../components/table'

const DymanicContent = ({content, slug, origin, baseUrl}) => (
  <Layout>
    <h1>{slug}</h1>
    <Headline content={content}/>
    <SeoTable slug={slug} baseUrl={baseUrl}/>
  </Layout>
)


/*
Each Next.js page component allows us to fetch data server-side thanks to a function called getInitialProps. When this function is called, the initial page load is rendered server-side, which is great for SEO.
*/

DymanicContent.getInitialProps = async (context) => {
  const { asPath } = context
  if ( asPath !== '/favicon.ico' ) {
    const { host } = context.req.headers
    const protocol = process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
    const baseUrl = `${protocol}${host}`
    const urlContent = await axios.post(`${baseUrl}/api/page_content`, {asPath})
    const { data } = urlContent
    return {
      content: data[0],
      slug: asPath,
      baseUrl
    }
  }
}

export default DymanicContent
