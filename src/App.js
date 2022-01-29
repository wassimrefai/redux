import React, { Component } from 'react'
import Todolist from './conponents/todolist'
import Addtask from './conponents/addtask'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      todolist:[],
      addtask:""
    }
    this.addtask = this.addtask.bind(this)
    this.changevalue = this.changevalue.bind(this)
    this.deleteTask=this.deleteTask.bind(this)
  }
  addtask(){
    const list =[...this.state.todolist]
    list.push(this.state.text)
    this.setState({todolist : list , text:""})

  }
  deleteTask(id){
    const list= this.state.todolist.filter((value,index)=>index!==id)

  }
  changevalue(value){
    console.log(value);
    this.setState({text: value})

  }
  render() {
    return (
      <div className='container' >
        <div className='col-lg-6-col-md-8-col-sm-10'></div>
        <h1 className='text-center'>Todo List</h1>
        <Todolist list={this.state.todolist} deleteTask={this.deleteTask} />
        <Addtask text ={this.state.text} addtask={(value)=>this.addtask(value)} changevalue={this.changevalue}/>

      </div>
    )
  }
}