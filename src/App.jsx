import React, {useState} from "react";
import Employee from "./components/Employee";
import employeeList from "./employeeList.js"


function App() {

  return (
    <div className="container">
    <div className='bg-white w-50 mx-auto mt-5 mb-2 rounded-3'>
    <h1 className='text-lead text-center'>Employee List</h1>
     
     <Employee list={employeeList} />
    </div>
    </div>
  )
}

export default App
