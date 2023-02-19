import axios from 'axios';
import React, { useEffect ,useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const Emplisting = () => {

const [apiData ,setApiData] = useState([])
function getData(){
    axios.get("http://localhost:4200/employee")
    .then((res) => {
        setApiData(res.data);
    }).catch((err) => {
        console.log(err);
    })
}

function handleDelete(id){
    axios.delete(`http://localhost:4200/employee/${id}`)
    .then(()=>{
        getData();
    }).catch((err) => {
        console.log(err);
    })
}

    function setDataToStorage( id,name,lastName,email,phone){
        localStorage.setItem('id' ,id);
        localStorage.setItem('name' ,name);
        localStorage.setItem('lastName' ,lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);

    }

useEffect(()=>{
getData();
},[])

return (
<div className='row'>
    <div className='col-md-12'>
        <div className='mb-2 mt-2'>
          <Link to="/create">
                <button className='btn btn-primary'>
                    Create New Data
                </button>
          </Link>
        </div>
            <Table bordered hover size="sm" className='Emp-Table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.e_name}</td>
                                        <td>{item.e_lastname}</td>
                                        <td>{item.e_email}</td>
                                        <td>{item.e_phone}</td>
                                        <td>
                                           <Link to="/edit">
                                                <button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_lastname, item.e_email, item.e_phone
                                                    )}>Edit</button>
                                            </Link>
                                        </td>
                                        <td><button className='btn btn-danger' onClick={() => { if (window.confirm('Are You sure to DElete??')) { handleDelete(item.id) }}}>Delete</button></td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </Table>
    </div>
</div>
    
)
}

export default Emplisting