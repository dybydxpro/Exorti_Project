import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Service from "../Service";

function Read(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [customer, setCustomer] = useState({});
    const [contact, setContact] = useState([]);
    const [address, setAddress] = useState([]);
   
    useEffect(()=>{
        Service.customerGet(id)
        .then(({data})=>{
          console.log(data);
          setCustomer(data);
        }).catch(({response})=>{
          console.log(response);
        })

        Service.contactGetByCustomerID(id)
        .then(({data})=>{
          console.log(data);
          setContact(data);
        }).catch(({response})=>{
          console.log(response);
        })

        Service.addressGetByCustomerID(id)
        .then(({data})=>{
          console.log(data);
          setAddress(data);
        }).catch(({response})=>{
          console.log(response);
        });
    },[])

    function deleteCustomer(id){
        Service.addressDeleteByCustomerID(id)
        .then(({data})=>{
          console.log(data);
        }).catch(({response})=>{
          console.log(response);
        })

        Service.contactDeleteByCustomerID(id)
        .then(({data})=>{
          console.log(data);
        }).catch(({response})=>{
          console.log(response);
        })

        Service.customerDelete(id)
        .then(({data})=>{
          console.log(data);
          navigate("/");
        }).catch(({response})=>{
          console.log(response);
        })
    }

    function deleteAddress(id){
        Service.addressDelete(id)
        .then(({data})=>{
          console.log(data);
          setContact(data);
          navigate(`/view/${id}`);
        }).catch(({response})=>{
          console.log(response);
        })
    }

    function deleteContact(id){
        Service.contactDelete(id)
        .then(({data})=>{
          console.log(data);
          setContact(data);
          navigate(`/view/${id}`);
        }).catch(({response})=>{
          console.log(response);
        })
    }
        
    return(
        <div className="container">
            <br />
            <h2>{ customer.firstName+" "+customer.lastName }'s Profile.</h2>
            <button onClick={() => {if(window.confirm('Delete this address?')){ deleteCustomer(id) }}} className="btn btn-danger my-2">Delete Profile</button> 
            <div className="card shadow bg-body rounded">
                <div className="card-body">
                    <div className="row row-cols-5 my-2">
                        <div className="col"> 
                            <p><b>First Name:</b></p>
                            <p>{ customer.firstName }</p>
                        </div>
                        <div className="col">
                            <p><b>Last Name:</b></p>
                            <p>{ customer.lastName }</p>
                        </div>
                        <div className="col">
                            <p><b>Date of Birth:</b></p>
                            <p>{ customer.dob }</p>
                        </div>
                        <div className="col">
                            <p><b>Gender:</b></p>
                            <p>{ customer.gender }</p>
                        </div>
                        <div className="col">
                            <p><b>E-mail:</b></p>
                            <p>{ customer.email }</p>
                        </div>
                    </div>
                    <a href={`/edit/customer/${customer.id}`} className="btn btn-warning">Edit</a>
                </div>
            </div>

            <br/>
            <p className="h4 my-3">Contact Details</p> &nbsp; <a href={`/add/contact/${id}`} className="btn btn-primary">Add new number</a>

            <div className="row row-cols-5 my-2">
                {
                    contact.map( contactData =>
                        <div className="col"  key={contactData.id}>
                            <div className="card shadow bg-body rounded" style={{ "width": "18rem" }}>
                                <div className="card-body">
                                    <p><b>Contact Number:</b></p>
                                    <p>{ contactData.number }</p>
                                    <a href={`/edit/contact/${contactData.id}`} className="btn btn-warning">Edit</a>
                                    &nbsp;
                                    <button className="btn btn-danger" onClick={() => {if(window.confirm('Delete this address?')){ deleteContact(contactData.id) }}}>Delete</button> 
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <br/>    
            <p className="h4 my-3">Address</p> &nbsp; <a href={`/add/address/${id}`} className="btn btn-primary">Add new address</a>

            <div className="row row-cols-5 my-2">
                {
                    address.map( addresstData =>
                        <div className="col">
                            <div className="card shadow bg-body rounded" style={{ "width": "18rem" }}>
                                <div className="card-body">
                                    <p><b>Address Line 1 :&nbsp;</b>{addresstData.addLine1}</p>
                                    <p><b>Address Line 2 :&nbsp;</b>{addresstData.addLine2}</p>
                                    <p><b>City :&nbsp;</b>{addresstData.city}</p>
                                    <p><b>Province :&nbsp;</b>{addresstData.province}</p>
                                    <p><b>Country :&nbsp;</b>{addresstData.country}</p>
                                    <p><b>Zip code:&nbsp;</b>{addresstData.zipCode}</p>
                                    <a href={`/edit/address/${addresstData.id}`} className="btn btn-warning">Edit</a>
                                    &nbsp;
                                    <button className="btn btn-danger" onClick={() => {if(window.confirm('Delete this address?')){ deleteAddress(addresstData.id) }}}>Delete</button> 
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Read;