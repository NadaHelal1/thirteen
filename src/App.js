import React , { Component } from 'react'
import TodoItem from './Todoitem/Todoitems';
import AddItem from './Additem/Additem';
import Pokimon from './pokimon/Pokimon';



class App extends Component {
  state = { 
    items:[
      {id:1 , name:'nada' , age:30 },
      {id:2 , name:'mido' , age:29 },
      {id:3 , name:'elena' , age:2 },

    ]
   }

   deleteItem = (id) =>{
    // let items=this.state.items
    
    // let i=items.findIndex(item=>item.id ===id)
    // items.splice(i,1)
    // this.setState({
    //   items})

     let items=this.state.items.filter(item=>{
      return item.id !== id 

     })
    this.setState({items})
    


   }

   AddItem =(item)=>{
    item.id=Math.random()
    let items=this.state.items
    items.push(item)
    this.setState({items})

   }
  
  

  render() { 
    return (
     <div className='container'>
     <h1 className='text-center'>  Todo List</h1>
      <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
      <AddItem   AddItem={this.AddItem} />
      <Pokimon />
     </div> 
    );
  }
}
 
export default App;





