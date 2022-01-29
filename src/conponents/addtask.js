import React, { Component } from 'react'

export default class addtask extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div className='mt-3'>
                <input value={this.props.text} onChange={(e)=>this.props.changevalue(e.target.value)} class="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
                <button onClick={this.props.addtask} type="button" class="btn btn-dark mt-3">Add task</button>

            </div>
        )
    }
}