import React from 'react'
import './styles.css'


function Table() {
  return (
    <table className='table_container'>
      <thead className='table_head'>
        <tr>
          <th>Name</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paris</td>
          <td>XX1</td>
        </tr>
        <tr>
          <td>Paris</td>
          <td>XX1</td>
        </tr>
      </tbody>
  </table>
  )
}

export default Table