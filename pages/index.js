import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = (props) => {
  const [msg, setMsg] = useState('')

  const router = useRouter()

  useEffect(() => {
    async function triApi(){
      const res = await fetch(`${router.pathname}api/trial`)
      const {message} = await res.json()
      console.log(message);
      setMsg(message)
    }
    triApi()
  }, [])

  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrices</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={props.bpi} />
      </div>
      <h3>Msg: {msg}</h3>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.json()
  return {
    bpi: data.bpi
  }
}

export default Index
