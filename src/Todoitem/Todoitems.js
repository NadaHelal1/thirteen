import React from 'react'
import todoitems from './todoitems.css'

  

const TodoItem=(props)=>{
    const {items,deleteItem}=props
    let length=items.length
     const listItems=length?( items.map(item=>{
        return(
              <div className=" ListItems" key={item.id}>
                  <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
                </div>
           )
       })):(<p> There is no item to show </p>)
       
     
     
     
     
     
     //items.map(item=>{
    //     return(
    //         <div key={item.id}>
    //             <span>{item.name}</span>
    //             <span>{item.age}</span>
    //             <span onClick={()=>deleteItem(item.id)}>&times;</span>
    //         </div>
    //     )
    // })
    return(
        <div className="ListItems">
            <div className="ListItems">
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
          {listItems}
        </div>
    )
}

export default TodoItem;