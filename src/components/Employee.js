import React, { Component } from 'react'
import App from '../App'

export default class Employee extends Component {

    

 

render() {

    let name="deepika";

        return (
            <div>
             <App  name={name}/>

                <h1>I am employee</h1>
                
            </div>
        )
    }
}
