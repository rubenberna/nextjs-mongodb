import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = (props) => {
  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrices</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={props.bpi} />
      </div>
    </Layout>
  )
}


Index.getInitialProps = async ({asPath}) => {

  if (asPath !== '/favicon.ico'){

  }
  console.log(url);
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.json()
  return {
    bpi: data.bpi
  }
}

export default withRouter(Index)
