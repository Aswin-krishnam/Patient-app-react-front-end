import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddPatient = () => {

        const [data,setData]=useState(
            {
                "pName":"",
                "dName":"",
                "age":"",
                "dob":"",
                "address":"",
                "gender":"",
                "bloodGroup":"",
                "bDate":""

    
            }
        )
        const inputHandler=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
    
        const readValue=()=>{
            console.log(data)
            axios.post("http://localhost:8080/",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Patient added Successfully")
                        
                    } else {
                        alert("Error")
                    }   
                }
            ).catch(
                (error)=>{
                    console.log(error.message)
                    alert(error.message)
                }
            )
        }
      return (
        <div>
            <Navbar/>
            <center>
                <h3>Add Patient</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Patient name</label>
                                <input type="text" className="form-control" name='pName' value={data.pName} onChange={inputHandler} />
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Doctor name</label>
                                <input type="text" className="form-control" name='dName' value={data.dName} onChange={inputHandler} />
    
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
    
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Gender</label>
                                <select id="" className="form-control" name='gender' value={data.gender} onChange={inputHandler}>
                                    <option >-select-</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                              
                                </select>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select id="" className="form-control" name='bloodGroup' value={data.bloodGroup} onChange={inputHandler}>
                                    <option >-select-</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
              
                                </select>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Booking Date</label>
                                <input type="date" className="form-control" name='bDate' value={data.bDate} onChange={inputHandler}/>
    
                            </div>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
                                <button className="btn btn-success" onClick={readValue}>Register</button>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
      )
    }
export default AddPatient