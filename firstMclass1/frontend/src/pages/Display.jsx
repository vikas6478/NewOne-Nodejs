import axios from "axios";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [mydata, setMydata] = useState([]);
  let [editId, setEditId] = useState(null);

    const [empno,setEmpno] = useState("")
  

  const loadData = async () => {
    let api = "http://localhost:8000/employees/display";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  let Sno = 0;

  const ans = mydata.map((key) => {
    Sno++;
    return (
        <tr key={key._id} >
          <td>{Sno}</td>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.designation}</td>
          <td>{key.salary}</td>
          <td>
            <button style={{backgroundColor:"red",color:"white"}} onClick={() => handleDelete(key._id)}>Delete</button>
          </td>
          <td>
            <button style={{backgroundColor:"lightblue",color:"black"}} onClick={() => handleUpdate(key._id)}>Update</button>
          </td>
        </tr>
      
    );
  });

  const handleDelete = async (_id) => {
    let api = `http://localhost:8000/employees/delete/${_id}`;
    const response = await axios.delete(api);
    alert(response.data);

    loadData();
  };

  const handleUpdate = async (_id) => {
  setEditId(_id);

  let api = `http://localhost:8000/employees/getone/${_id}`;
  const response = await axios.get(api);

  setInput(response.data);
};

  const [input, setInput] = useState({
  empno: "",
  name: "",
  designation: "",
  salary: ""
});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(mydata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `http://localhost:8000/employees/empUpdate/${editId}`;
    const response = await axios.put(api,input);

    alert(response.data);
    setEditId(null)

    loadData();
  };


 const handleSearch = async () =>{
    let api = `http://localhost:8000/employees/search/?empno=${empno}`;

    const response = await axios.get(api)

    console.log(response.data)
    setMydata(response.data)    
  }

  return (
    <>

    <h1>
      enter empno : <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}}/>

      <button onClick={handleSearch}>search</button>
    </h1>
    <hr />

    

      <h1>your student data</h1>
      <hr />
      <table border={1} >
        <tr>
          <th>Sno.</th>
          <th>empno</th>
          <th>name</th>
          <th>designation</th>
          <th>salary</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {ans}
      </table>

      {editId && (
        <form onSubmit={handleSubmit} className="edit-form">
          Enter employee number:
          <input
            type="text"
            name="empno"
            value={input.empno}
            onChange={handleInput}
          />
          <br />
          Enter name:
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
          />
          <br />
          Enter designation:
          <input
            type="text"
            name="designation"
            value={input.designation}
            onChange={handleInput}
          />
          <br />
          Enter salary:
          <input
            type="text"
            name="salary"
            value={input.salary}
            onChange={handleInput}
          />
          <br />
          <button type="submit" className="edit-btn">
            submit
          </button>
        </form>
      )}
    </>
  );
};

export default Display;
