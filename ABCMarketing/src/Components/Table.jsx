import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service";

function Table(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchCustomers() 
    },[])

    const fetchCustomers = async () => {
        await Service.customerGetAll().then(({data})=>{
            setData(data);
            console.log(data);
        })
    }

    const getAge = (dateString) =>{
        let today = new Date();
        let dob = new Date(dateString);
        var age = today.getFullYear() - dob.getFullYear();
        return age;
    }

    return(
        <div className="container">
            <br/>
            <h3>Hi, Welcome to the "ABC Marketing"</h3>
            <br/>
            <table className="table table-hover">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(datas =>
                            <tr key={datas.id}>
                                <th scope="row">{datas.id}</th>
                                <td>{datas.firstName}</td>
                                <td>{datas.lastName}</td>
                                <td>{datas.gender}</td>
                                <td>{datas.email}</td>
                                <td>{getAge(datas.dob)}</td>
                                <td>
                                    <Link to={`/view/${datas.id}`} className='btn btn-primary me-2'><i className="bi bi-eye-fill"></i> View </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;