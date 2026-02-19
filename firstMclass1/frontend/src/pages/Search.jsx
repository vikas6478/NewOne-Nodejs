import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
  const [empno,setEmpno] = useState("")
  const [mydata,setMydata] = useState([])

  const handleSubmit = async () =>{
    let api = `http://localhost:8000/employees/search/?empno=${empno}`;

    const response = await axios.get(api)

    console.log(response.data)
    setMydata(response.data)    
  }

  const ans = mydata.map((key) => {
  return (
    <table border="1" key={key.empno}>
      <thead>
        <tr>
          <th>Emp No</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.designation}</td>
          <td>{key.salary}</td>
        </tr>
      </tbody>
    </table>
  );
});



  return (
    <>
    <h1>
      enter empno : <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />

      <button onClick={handleSubmit}>search</button>
    </h1>
    <hr />
    {ans}
    </>
  )
}

export default Search
