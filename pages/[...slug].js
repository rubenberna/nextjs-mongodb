import { withRouter } from 'next/router'
import axios from 'axios'

import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Complex = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <h2>{data.Headline}</h2>
      </div>
    </Layout>
  )
}

/*
Each Next.js page component allows us to fetch data server-side thanks to a function called getInitialProps. When this function is called, the initial page load is rendered server-side, which is great for SEO.
*/

Complex.getInitialProps = async ({asPath}) => {
  if ( asPath !== '/favicon.ico' ) {
    const content = await axios.post('http://localhost:3000/api/content', {asPath})
    const { data } = content
    return {
      data: data[0]
    }
  }
}

export default withRouter(Complex)
