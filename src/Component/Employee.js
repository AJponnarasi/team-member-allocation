import React, { useState } from "react";
import femaleProfile from "../images/femaleProfile.jpg"
import maleProfile from "../images/maleProfile.jpg"

const Employees = () => {
    const [selectTeam,setTeam] = useState("Team B")
    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }])
    
    function handleTeamSelection(event){
        setTeam(event.target.value)
    }

    function handleEmployeeCardClick(event){
        const transformTeam = employees.map((employee) =>  employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectTeam) ? {...employee, teamName: '' } : {...employee, teamName: employee.teamName} : employee)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7">
                <select className="form-select" aria-label="Default select example" value={selectTeam} onChange={handleTeamSelection}>
                    <option value="Team A">Team A</option>
                    <option value="Team B">Team B</option>
                    <option value="Team C">Team C</option>
                    <option value="Team D">Team D</option>
                </select>
                </div>
            </div>
            <div className="row  justify-content-center mt-4">
                <div className="col-md-7">
                    <div className="card-collection">
                        {
                            employees.map((emp) => {
                                return (<div id={emp.id} className="card m-2" style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
                                    {emp.gender == "male" ? <img src={maleProfile} className="card-img-top" /> : <img src={femaleProfile} className="card-img-top" />}
                                    <div className="card-body">
                                        <h5 className="card-title">Full Name : {emp.fullName}</h5>
                                        <p className="card-text"> <b>Designation</b> : {emp.designation}</p>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees