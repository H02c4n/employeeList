import Button from './Button'
import React, { useEffect, useState } from 'react'

const Employee = ({list}) => {

    const[employees, setEmployees] = useState([]);
    const[range, setRange] = useState({
        start:0,
        finish:5
    });



    useEffect(function(){
        const filteredList = list.filter((item, index) =>{
            if (index>=range.start && index<range.finish) {
               return item;
            }
        })
        
        setEmployees(prevEmployees => filteredList)
    }, [range.start, range.finish])


    function increase(){        
        setRange(prevRange => {
            return{
                start: range.start +5,
                finish: range.finish +5,
            }
        })

    }
    function decrease(){        
        setRange(prevRange => {
            return{
                start: range.start -5,
                finish: range.finish -5,
            }
        })
    }
    
  return (<div className='bg-white'>
    <p className='fw-bold fs-4 text-center'>(Employees {range.start+1} to {range.finish})</p>
  <div>
        {employees.map(employee => {
                return(
              <div key={employee.id} className="row">
            <div className="col-md-4 ms-4">
                <img style={{"width":"100px", "borderRadius":"50%"}} src={employee.image} alt="" />
            </div>
            <div className="col-md-7">
                <h3>{employee.name}</h3>
                <p>{employee.email}</p>
                <p>{employee.age}</p>
            </div>
        </div>  
            )            
        })}
        
    </div>
        <Button inc={increase} dec={decrease} range={range}/>
    </div>
    
  )
}

export default Employee