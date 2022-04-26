import './styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


function Table() {
  const [surveys,setSurveys]=useState([]);
  
  const getSurveys = async () => {
    const url = "http://127.0.0.1:8000/api/surveys";
    try {
      const response = await axios.get(url);
      const dataFetched =response.data;
      setSurveys(dataFetched);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSurveys();
  },[]);

 

  return (
    <table className='table_container'>
      <thead className='table_head'>
        <tr>
          <th>Name</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        {surveys.map((survey,index)=>
        <tr key={index}>
          <td>{survey.name}</td>
          <td>{survey.code}</td>
        </tr>
       )} 
      </tbody>
  </table>
  )
}

export default Table