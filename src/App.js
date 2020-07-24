import React,{useState} from 'react';


import './App.css';

import Display  from "./components/Display";
















function App(props) {


 const [employee,setEmployee] =useState({
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
})



 let DeleteItem=(id)=>{

  let data=employee.data.filter(ele=>ele.id!==id);

  setEmployee({...employee,data});



 }


  return (
    

<Display DeleteItem={DeleteItem}  somedata={employee.data}/>
   
  );
}

export default App;
