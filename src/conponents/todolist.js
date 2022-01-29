import React, { Component } from 'react'

export default class todolist extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <ul class="list-group list-group-flush">
                    {this.props.list.map((item, index)=>(
                    <li className='list-group-item' key={index}>{item} <button onClick={()=> this.props.deletetask(index)}> delete</button> </li>
                    ))}
                </ul>

            </div>
        )
    }
}
