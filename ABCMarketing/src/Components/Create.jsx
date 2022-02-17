import { useState, useEffect } from "react";
import Service from "../Service";
import { useNavigate } from 'react-router-dom';

function Create(){
    const navigate = useNavigate();

    const [maxID, setMaxID] = useState({
        maxID: ""
    })

    useEffect(()=>{
        Service.customerMaxId().then(({data})=>{ console.log(data); setMaxID(data); })
        .catch(({response})=>{ console.log(response) }) 
    },[])

    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: ""
    });

    const [contact, setContact] = useState({
        customerID: "",
        number: ""
    });

    const [address, setAddress] = useState({
        customerID: "",
        addLine1: "",
        addLine2: "",
        city: "",
        province: "",
        zipCode: ""
    });

    

    function handleCustomer(e){
        const newData = {...customer};
        newData[e.target.id] = e.target.value;
        setCustomer(newData);
        console.log(newData);
    }

    function handleContact(e){
        const newData = {...contact};
        newData[e.target.id] = e.target.value;
        newData["customerID"] = maxID;
        setContact(newData);
        console.log(newData);
    }

    function handleAddress(e){
        const newData = {...address};
        newData[e.target.id] = e.target.value;
        newData["customerID"] = maxID;
        setAddress(newData);
        console.log(newData);
    }

    function createData(e){
        e.preventDefault();
        createCustomer(e);
        createContact(e);
        createAddress(e);
        navigate("/");
    }

    const createCustomer = async (e) => {
        e.preventDefault();
        await Service.customerCreate(customer)
        .then(({customer})=>{
          console.log(customer);
        }).catch(({response})=>{
          console.log(response);
        });
    }

    const createContact = async (e) => {
        e.preventDefault();
        await Service.contactCreate(contact)
        .then(({contact})=>{
          console.log(contact);
        }).catch(({response})=>{
          console.log(response);
        });
    }

    const createAddress = async (e) => {
        e.preventDefault();
        await Service.addressCreate(address)
        .then(({address})=>{
          console.log(address);
        }).catch(({response})=>{
          console.log(response);
        });
    }

    return(
        <div className="container">
            <br />
            <h2>Create new customer.</h2>
            <form onSubmit={(e) => createData(e)}> 
                <div className="row row-cols-3 my-2">
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="firstName" onChange={(e) => handleCustomer(e)} placeholder="John" required/>
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="lastName" onChange={(e) => handleCustomer(e)} placeholder="Smidth" required/>
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="dob" onChange={(e) => handleCustomer(e)} placeholder="" required/>
                            <label htmlFor="floatingInput">Date of Birth</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <select className="form-control" id="gender" onChange={(e) => handleCustomer(e)}  placeholder="Gender" required>
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Femail">Female</option>
                            </select>
                            <label htmlFor="floatingInput">Gender</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" onChange={(e) => handleCustomer(e)} placeholder="example@mail.com" required/>
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="number" onChange={(e) => handleContact(e)} placeholder="+94 77 1234567" required/>
                            <label htmlFor="floatingInput">Contact Number</label>
                        </div>
                    </div>
                </div>

                <p className="h4 my-3">Address</p>

                <div className="row row-cols-3 my-2">
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="addLine1" onChange={(e) => handleAddress(e)} placeholder="Address Line 1" required/>
                            <label htmlFor="floatingInput">Address Line 1</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="addLine2" onChange={(e) => handleAddress(e)} placeholder="Address Line 2" required/>
                            <label htmlFor="floatingInput">Address Line 2</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="city" onChange={(e) => handleAddress(e)} placeholder="City" required/>
                            <label htmlFor="floatingInput">City</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="province" onChange={(e) => handleAddress(e)} placeholder="Province" required/>
                            <label htmlFor="floatingInput">Province</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="country" onChange={(e) => handleAddress(e)} placeholder="Country" required/>
                            <label htmlFor="floatingInput">Country</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="zipCode" onChange={(e) => handleAddress(e)} placeholder="Zip Code" required/>
                            <label htmlFor="floatingInput">Zip Code</label>
                        </div>
                    </div>
                </div>
                <div className="mx-5">
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-success">Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;