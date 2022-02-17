import React, { useEffect, useState } from "react";  
import Service from "../Service";
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/main.css';

function CreateContact(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({ });

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        newData["customerID"] = id;
        setData(newData);
        console.log(newData);
    }

    const addContact = async (e) => {
        e.preventDefault();
        await Service.contactCreate(data)
        .then(({data})=>{
          console.log(data);
          navigate(`/view/${id}`);
        }).catch(({response})=>{
          console.log(response);
        })
    }

    return(
        <div className="container">
            <br/>
            <form onSubmit={(e) => addContact(e)}>
                <div className="detailBox shadow bg-body rounded">
                    <h1 className='h1 d-flex justify-content-center'>Add Contact Number.</h1>
                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="number" placeholder="John" required/>
                        <label htmlFor="floatingInput">Contact Number</label>
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
export default CreateContact;