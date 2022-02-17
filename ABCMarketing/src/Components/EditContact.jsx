import React, { useEffect, useState } from "react";  
import Service from "../Service";
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/main.css';

function EditContact(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({ });
    const [returnValue, setReturnValue] = useState({ });

    useEffect(()=>{
        Service.contactGet(id)
        .then(({data})=>{
          console.log(data);
          setReturnValue(data);
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
        await Service.contactUpdate(data)
        .then(({data})=>{
          console.log(data);
          navigate(`/view/${returnValue.customerID}`);
        }).catch(({response})=>{
          console.log(response);
        })
    }

    return(
        <div className="container">
            <br/>
            <form onSubmit={(e) => updateCustomer(e)}>
                <div className="detailBox shadow bg-body rounded">
                    <h1 className='h1 d-flex justify-content-center'>Edit Contact Details.</h1>
                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" value={ data.number } onChange={(e) => handle(e)} id="number" placeholder="John" required/>
                        <label htmlFor="floatingInput">Contact Number</label>
                    </div>
                    <br/>
                    <div className="form-floating d-flex justify-content-end">
                        <button type='submit' className='btn btn-success'>Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default EditContact;