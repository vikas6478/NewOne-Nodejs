import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Insert = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({
      ...values, [name]: value}));

  console.log(input)
}

const handleSubmit = async () => {
  let api = "http://localhost:8000/employees/save"
  const response = await axios.post(api, input);
  console.log(response);
  alert(response.data)

}

return (
  <div>

    <h1>Apllication From</h1>
    Enter employee number:<input type='text' name="empno" onChange={handleInput} /><br></br>
    Enter name:<input type='text' name="name" onChange={handleInput} /><br></br>
    Enter designation:<input type='text' name="designation" onChange={handleInput} /><br></br>
    Enter salary:<input type='text' name="salary" onChange={handleInput} /><br></br>

    <button onClick={handleSubmit}>Data save!!</button>


  </div>
)
}

export default Insert