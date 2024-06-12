import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchPatient = () => {
    const [data, setData] = useState(
        {
            "pName": ""
        }
    )

    const [result, setResult] = useState([])
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }


    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <div>
            <Navbar />
            <center>
                <h3>Search Patient</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Patient Name</label>
                                <input type="text" className="form-control" name='pName' value={data.pName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-primary" onClick={readValue}>Search</button>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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

                                    result.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{index + 1}</th>
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

export default SearchPatient