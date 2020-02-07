import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Table } from 'react-bootstrap'

const SeoTable = ({slug, baseUrl}) => {
  const [tableList, setTableList] = useState([])
  const [msg, setMsg] = useState('')

  const router = useRouter()

  useEffect(() => {
    const params = slug.split('/')
    const category = params[1]
    async function fetchTableContent() {
      const tableContent = await axios.post(`${baseUrl}/api/table_content`, {category})
      const { data } = tableContent
      setTableList(data)
    }
    fetchTableContent()
    async function tryApi(){
      const res = await axios.get(`${baseUrl}/api/trial`)
      const {message} = res.data
      setMsg(message)
    }
    tryApi()
  }, [])

  const goToUrl = url => {
    const array = url.split('/')
    array.shift()
    router.push('/' + array.join('/'))
  }

  const renderTable = () => {
    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>URL</th>
            <th>Last Category</th>
            <th>City</th>
          </tr>
        </thead>
        { renderTableBody() }
      </Table>
    )
  }

  const renderLastCategory = (item) => {
    let lastCategory = item.Breadcrumb3category ? item.Breadcrumb3category : (item.Breadcrumb2category ? item.Breadcrumb2category : item.Breadcrumb1category)

    let proper = lastCategory.replace(/-/g, " ")
      .charAt(0)
      .toUpperCase() +
      lastCategory.replace(/-/g, " ").slice(1)
    return proper
  }

  const renderTableBody = () => {
    return tableList.map((t, i) => {
      return (
        <tbody key={i}>
          <tr>
            <th>{i}</th>
            <th onClick={ e => goToUrl(t.URL) }>{t.URL}</th>
            <th>{renderLastCategory(t)}</th>
            <th>{t.CityPostalcode}</th>
          </tr>
          <style jsx>{`
            tr {
              cursor: pointer;
           }
         `}</style>
        </tbody>
      )}
    )
  }

  return (
    <>
      <h5>Relative list of urls</h5>
      {msg}
      {renderTable()}
    </>
  )
}

export default SeoTable
