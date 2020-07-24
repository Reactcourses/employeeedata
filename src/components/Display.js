import React from 'react'



function getaverage(value)
{
return (value/12).toFixed(2);
}

let  Display=(props) =>{


    return (
        <div>




       <table className="table table-bordered">
<thead>
<tr>
<th>id</th>
<th>employee_name</th>

<th>employee_salary</th>

<th>employee_age</th>
<th>employee_gender</th>
<th>Average Salary</th>

<th>Delete</th>
</tr>

</thead>


    





<tbody>

{ props.somedata.map((ele,id)=>(


<tr key={id}>

 <td> {ele.id}</td> 
<td>{ele.employee_name}</td>
<td>{ele.employee_salary}</td>
<td>{ele.employee_age}</td>
<td>{ele.employee_gender}</td>
<td>{getaverage(ele.employee_salary)}</td>
<td><button className="btn btn-danger" onClick={()=>props.DeleteItem(ele.id)}>Delete</button></td>

</tr>






))  }



</tbody>


       </table>






        
        </div>
    )
}



export default Display;



