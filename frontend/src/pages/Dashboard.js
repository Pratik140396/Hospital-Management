import React, { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
    const [patients, setPatients] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => { 
        API.get("/patients", {
            headers: { authorization: token }
        }).then(res => setPatients(res.data));

    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Hospital Dashboard</h2>

            <div className="card p-3 shadow">
                <h4>Patient List</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Disease</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(p => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.age}</td>
                                <td>{p.disease}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}


export default Dashboard;