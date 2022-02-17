import React, { useEffect, useState } from "react";  
import Service from "../Service";
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/main.css';

function EditCustomer(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({
        name: "",
        type: ""
    });

    useEffect(()=>{
        Service.customerGet(id)
        .then(({data})=>{
          console.log(data);
          setData(data);
        }).catch(({response})=>{
          console.log(response);
        })
    },[])

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const updateCustomer = async (e) => {
        e.preventDefault();
        await Service.customerUpdate(data)
        .then(({data})=>{
          console.log(data);
          navigate(`/view/${data.id}`);
        }).catch(({response})=>{
          console.log(response);
        })
    }

    return(
        <div className="container">
            <br/>
            <form onSubmit={(e) => updateCustomer(e)}>
                <div className="detailBox shadow bg-body rounded">
                    <h1 className='h1 d-flex justify-content-center'>Edit Customer Details.</h1>
                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" value={ data.firstName } onChange={(e) => handle(e)} id="firstName" placeholder="John" required/>
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" value={ data.lastName } onChange={(e) => handle(e)} id="lastName" placeholder="Smidth" required/>
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" value={ data.dob } onChange={(e) => handle(e)} id="dob" placeholder="" required/>
                        <label htmlFor="floatingInput">Date of Birth</label>
                    </div>
                    <div className="form-floating">
                        <select className="form-control" value={ data.gender } onChange={(e) => handle(e)} id="gender"  placeholder="Gender" required>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Femail">Female</option>
                        </select>
                        <label htmlFor="floatingInput">Gender</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" value={ data.email } onChange={(e) => handle(e)} id="email" placeholder="example@mail.com" required/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <br/>
                    <div className="form-floating d-flex justify-content-end">
                        <button type='submit' className='btn btn-success'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditCustomer;