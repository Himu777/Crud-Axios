import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Create = () => {
    const [name,setName] = useState(' ');
    const [lastName,setLastName] = useState(' ');
    const [email,setEmail] = useState(' ');
    const [phone,setPhone] = useState(' ');


    const navigate =useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4200/employee",{
            e_name:name,
            e_lastname:lastName,
            e_email:email,
            e_phone:phone
        }).then(() =>{
            navigate('/');
        }).catch((err) => {
            console.log(err);
        })
    }
return (

<>
<div className='App'>
    <h1>Contact form</h1>
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
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Enter Name:</label>
                        <input type="text" placeholder="Name" className='form-control' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Enter Last Name:</label>
                            <input type="text" placeholder=" Last Name" className='form-control' onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Enter Email:</label>
                        <input type="email" placeholder="Email" className='form-control'
                          onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Enter PhoneNo:</label>
                        <input type="tel" placeholder="phone no" className='form-control' 
                        onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <br />
                    <div className='d-grid'>
                        <input type="submit" value="submit" className='btn btn-primary' />
                    </div>

                </form>
             
            </div>
        </div>
</div>
</>
)
}

export default Create