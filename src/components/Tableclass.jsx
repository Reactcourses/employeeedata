import React, { Component } from 'react'

export default class Tableclass extends Component {


    constructor(props)
    {
        super(props);


        this.state={
            status: "success",
            data: [
              {
                id: "1",
                employee_name: "Tiger Nixon",
                employee_salary: "320800",
                employee_age: "61",
                employee_gender: "M",
              },
              {
                id: "2",
                employee_name: "Garrett Winters",
                employee_salary: "170750",
                employee_age: "63",
                employee_gender: "M",
              },
              {
                id: "3",
                employee_name: "Ashton Cox",
                employee_salary: "86000",
                employee_age: "66",
                employee_gender: "M",
              },
              {
                id: "4",
                employee_name: "Cedric Kelly",
                employee_salary: "433060",
                employee_age: "22",
                employee_gender: "M",
              },
              {
                id: "5",
                employee_name: "Airi Satou",
                employee_salary: "162700",
                employee_age: "33",
                employee_gender: "M",
              },
              {
                id: "6",
                employee_name: "Brielle Williamson",
                employee_salary: "372000",
                employee_age: "61",
                employee_gender: "M",
              },
              {
                id: "7",
                employee_name: "Herrod Chandler",
                employee_salary: "137500",
                employee_age: "59",
                employee_gender: "M",
              },
              {
                id: "8",
                employee_name: "Rhona Davidson",
                employee_salary: "327900",
                employee_age: "55",
                employee_gender: "M",
              },
              {
                id: "9",
                employee_name: "Colleen Hurst",
                employee_salary: "205500",
                employee_age: "39",
                employee_gender: "F",
              },
              {
                id: "10",
                employee_name: "Sonya Frost",
                employee_salary: "103600",
                employee_age: "23",
                employee_gender: "M",
              },
              {
                id: "11",
                employee_name: "Jena Gaines",
                employee_salary: "90560",
                employee_age: "30",
                employee_gender: "M",
              },
              {
                id: "12",
                employee_name: "Quinn Flynn",
                employee_salary: "342000",
                employee_age: "22",
                employee_gender: "F",
              },
              {
                id: "13",
                employee_name: "Charde Marshall",
                employee_salary: "470600",
                employee_age: "36",
                employee_gender: "M",
              },
              {
                id: "14",
                employee_name: "Haley Kennedy",
                employee_salary: "313500",
                employee_age: "43",
                employee_gender: "M",
              },
              {
                id: "15",
                employee_name: "Tatyana Fitzpatrick",
                employee_salary: "385750",
                employee_age: "19",
                employee_gender: "F",
              },
              {
                id: "16",
                employee_name: "Michael Silva",
                employee_salary: "198500",
                employee_age: "66",
                employee_gender: "M",
              },
              {
                id: "17",
                employee_name: "Paul Byrd",
                employee_salary: "725000",
                employee_age: "64",
                employee_gender: "M",
              },
              {
                id: "18",
                employee_name: "Gloria Little",
                employee_salary: "237500",
                employee_age: "59",
                employee_gender: "M",
              },
              {
                id: "19",
                employee_name: "Bradley Greer",
                employee_salary: "132000",
                employee_age: "41",
                employee_gender: "F",
              },
              {
                id: "20",
                employee_name: "Dai Rios",
                employee_salary: "217500",
                employee_age: "35",
                employee_gender: "M",
              },
              {
                id: "21",
                employee_name: "Jenette Caldwell",
                employee_salary: "345000",
                employee_age: "30",
                employee_gender: "M",
              },
              {
                id: "22",
                employee_name: "Yuri Berry",
                employee_salary: "675000",
                employee_age: "40",
                employee_gender: "M",
              },
              {
                id: "23",
                employee_name: "Caesar Vance",
                employee_salary: "106450",
                employee_age: "21",
                employee_gender: "M",
              },
              {
                id: "24",
                employee_name: "Doris Wilder",
                employee_salary: "85600",
                employee_age: "23",
                employee_gender: "F",
              },
            ],
          }

    }








    render() {
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

{ this.state.data.map((ele,id)=>(


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
}
