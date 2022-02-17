import React, { useEffect, useState } from "react";  
import Service from "../Service";
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/main.css';

function EditAddress(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({ });
    const [returnValue, setReturnValue] = useState({ });

    useEffect(()=>{
        Service.addressGet(id)
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

    const updateAddress = async (e) => {
        e.preventDefault();
        await Service.addressUpdate(data)
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
            <form onSubmit={(e) => updateAddress(e)}>
                <div className="detailBox shadow bg-body rounded">
                    <h1 className='h1 d-flex justify-content-center'>Edit Contact Details.</h1>
                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="addLine1" value={data.addLine1} onChange={(e) => handle(e)} placeholder="Address Line 1" required/>
                        <label htmlFor="floatingInput">Address Line 1</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="addLine2" value={data.addLine2} onChange={(e) => handle(e)} placeholder="Address Line 2" required/>
                        <label htmlFor="floatingInput">Address Line 2</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="city" value={data.city} onChange={(e) => handle(e)} placeholder="City" required/>
                        <label htmlFor="floatingInput">City</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="province" value={data.province} onChange={(e) => handle(e)} placeholder="Province" required/>
                        <label htmlFor="floatingInput">Province</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="country" value={data.country} onChange={(e) => handle(e)} placeholder="Country" required/>
                        <label htmlFor="floatingInput">Country</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="zipCode" value={data.zipCode} onChange={(e) => handle(e)} placeholder="Zip Code" required/>
                        <label htmlFor="floatingInput">Zip Code</label>
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
export default EditAddress;