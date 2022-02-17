import React, { useEffect, useState } from "react";  
import Service from "../Service";
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/main.css';

function CreateAddress(){
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

    const addAddress = async (e) => {
        e.preventDefault();
        await Service.addressCreate(data)
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
            <form onSubmit={(e) => addAddress(e)}>
                <div className="detailBox shadow bg-body rounded">
                    <h1 className='h1 d-flex justify-content-center'>Add New Address.</h1>
                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="addLine1" onChange={(e) => handle(e)} placeholder="Address Line 1" required/>
                        <label htmlFor="floatingInput">Address Line 1</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="addLine2" onChange={(e) => handle(e)} placeholder="Address Line 2" required/>
                        <label htmlFor="floatingInput">Address Line 2</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="city" onChange={(e) => handle(e)} placeholder="City" required/>
                        <label htmlFor="floatingInput">City</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="province" onChange={(e) => handle(e)} placeholder="Province" required/>
                        <label htmlFor="floatingInput">Province</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="country" onChange={(e) => handle(e)} placeholder="Country" required/>
                        <label htmlFor="floatingInput">Country</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="zipCode" onChange={(e) => handle(e)} placeholder="Zip Code" required/>
                        <label htmlFor="floatingInput">Zip Code</label>
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
export default CreateAddress;