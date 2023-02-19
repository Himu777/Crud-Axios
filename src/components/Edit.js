import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Edit = () => {

    const [id ,setId] = useState(0);
    const [name ,setName] = useState(0);
    const [lastName,setLastName] = useState(0);
    const [email ,setEmail] = useState(0);
    const [phone ,setPhone] = useState(0);
    const navigate = useNavigate();

        useEffect(() =>{
            setId(localStorage.getItem('id'));
            setName(localStorage.getItem('name'));
            setLastName(localStorage.getItem('lastName'));
            setEmail(localStorage.getItem('email'));
            setPhone(localStorage.getItem('phone'));
        }, [])


        const handleUpdate =(e)=>{
            e.preventDefault();
            axios.put(`http://localhost:4200/employee/${id}`,{
                e_name: name,
                e_lastName: lastName,
                e_email:email,
                e_phone:phone
            }).then(()=>{
                navigate('/');
            }).catch((err)=>{
                console.log(err);
            })
        }
return (
    <>
        <div className='App'>
            <h1>Update form</h1>
        </div>
        <div className='mb-2 mt-2'>
            <Link to="/">
                <button className='btn btn-primary'>
                    Read Data
                </button>
            </Link>
        </div>
        <div className='container'>

            <div className='row justify-content-center mt-5'>
                <div className='col-md-4'>
                    <form onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label>Enter Name:</label>
                            <input type="text" placeholder="Name" className='form-control'  value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Enter Last Name:</label>
                            <input type="text" placeholder=" Last Name" className='form-control'
                                value={lastName} onChange={(e) =>setLastName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email:</label>
                            <input type="email" placeholder="Email" className='form-control'
                                value={email} onChange={(e) => setEmail(e.target.value)}  />
                        </div>
                        <div className='form-group'>
                            <label>Enter PhoneNo:</label>
                            <input type="tel" placeholder="phone no" className='form-control'
                                value={phone} onChange={(e) => setPhone(e.target.value)}   />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="submit" value="Update" className='btn btn-primary' />
                        </div>

                    </form>
                    
                </div>
            </div>
        </div>
    </>
)
}

export default Edit