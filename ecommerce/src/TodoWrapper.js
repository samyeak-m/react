import React, { useState } from 'react'
import Todoitem from './TodoItem';

function TodoWrapper() {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const [isEditIndex, setEditIndex] = useState(null);

    const onAdd = () =>{
        setValue("");
        setList([...list, value]);
    };

    const onDelete = (item) => {
        const newList = list.filter((todo) => todo !== item);
        setList(newList);
    };

     const onEdit =(index) => {
        setEditIndex(index);
          
     };

     const onDone = (item,index) =>{
        const newList = list.map((value,i)=>{
            if(index === i){
                return item;
            }
            return value;
        });
        setList(newList);
        setEditIndex(null);
     };

  return ( 
  <div className="*:min-h-screen bg-indigo-600 flex items-center justify-center" > 
  <div className=" w-1/3 text-red w-9 bg-green-950 rounded-xl p-4 py-3 ">
    <div className= "mb-4 text-2xl text-center" >Get Things Done</div>
    <div className="flex">

  <input  type="text"
   placeholder=" What is your task today?"
    onChange = {(event) =>{
        setValue(event.target.value);
    }}
    />
    {/* className="w-full h-10 p-1" */}


  <button className=" w-32 h-10 p-1 px-2 bg-indigo-600 rounded-none"
      onClick = {onAdd} >Add item </button>
  </div>
  <div>
    {list.map ((item,index) =>(
       
       <Todoitem key={index} item = {item} index ={index} onDelete={onDelete} onEdit ={onEdit} onDone={onDone} isEditMode={isEditIndex === index}/>
    ))}
  </div>
  </div> 
  </div>
  ); 
}

export default TodoWrapper