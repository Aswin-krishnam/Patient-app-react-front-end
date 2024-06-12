import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:8080/viewall").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            <center>
                <h3>View All Patients</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SL No</th>
                                    <th scope="col">Patient Name</th>
                                    <th scope="col">Doctor Name </th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Blood Group</th>
                                    <th scope="col">Booking Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                  
                                data.map(
                                (value, index) => {
                                    return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value.pName}</td>
                                    <td>{value.dName}</td>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.bloodGroup}</td>
                                    <td>{value.bDate}</td>
                                    
                                </tr>
                               }
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll