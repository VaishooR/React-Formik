import React from 'react'
import {Link} from 'react-router-dom'


function Table() {
    const person=[
        {
            id:1,
            name:'Vaish',
            position:'Systems Engineer',
            office:'Infosys',
            age:'25',
            startdate:'Mar 2017',
            salary:'3.5 lpa',
        },
        {
            id:2,
            name:'Baby',
            position:'Cyber security',
            office:'Google',
            age:'40',
            startdate:'Jan 2002',
            salary:'30 lpa',
        },
        {
            id:3,
            name:'Prajeeth',
            position:'Primary',
            office:'School',
            age:'10',
            startdate:'Aug 2016',
            salary:'No money',
        },
        {
            id:4,
            name:'Aish',
            position:'Network Eng',
            office:'Dell',
            age:'30',
            startdate:'Oct 2021',
            salary:'50 lpa',
        },
        {
            id:5,
            name:'Mommy',
            position:'Data Analyst',
            office:'CTS',
            age:'50',
            startdate:'July 1995',
            salary:'6 lpa',
        },
    ]
  return (
    <>
    {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Tables</h1>

                <Link to="/tables/createuser" class="btn btn-primary mb-4">
                Create User
                </Link> 


                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                        {
                                            person.map(eachperson=>{
                                                return (<>
                                                <tr>
                                                    <td>{eachperson.name}</td>
                                                    <td>{eachperson.position}</td>
                                                    <td>{eachperson.office}</td>
                                                    <td>{eachperson.age}</td>
                                                    <td>{eachperson.startdate}</td>
                                                    <td>{eachperson.salary}</td>
                                                    <td>
                                                        <Link to={`/table/view/${eachperson.id}`} className="btn btn-warning mr-3">View</Link>
                                                        <Link to={`/table/view/${eachperson.id}`} className="btn btn-success mr-3">Edit</Link>
                                                        <button className="btn btn-danger mr-3">Delete</button>
                                                    </td>
                                                </tr>
                                                </>)
                                            })
                                        }          
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Table