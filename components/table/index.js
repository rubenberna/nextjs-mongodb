import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Table } from 'react-bootstrap'

const SeoTable = ({slug, history}) => {
  const [tableList, setTableList] = useState([])

  const router = useRouter()

  useEffect(() => {
    const params = slug.split('/')
    const category = params[1]
    async function fetchTableContent(slug) {
      const tableContent = await axios.get('http://localhost:3000/api/content')
      const { data } = tableContent
      const filteredList = data.filter(t => t.Breadcrumb1 === category)
      const shortList = filteredList.splice(0, 200).sort()
      setTableList(shortList)
    }
    fetchTableContent(slug)
  }, [])

  const handleClick = url => {
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
            <th>1st Category</th>
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
        <tbody key={i} onClick={ e => handleClick(t.URL) }>
          <tr>
            <th>{i}</th>
            <th>{t.URL}</th>
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
      {renderTable()}
    </>
  )
}

export default SeoTable
