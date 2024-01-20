import React, { useState } from 'react'
function TodoItem(props){
  const [value,setValue]=useState(props.item);

  return props.isEditMode ?(
    <span>
      <input className='w-full h-10 p-1 text-black'
       type='text' 
       placeholder='what is your task'
       value={value} 
       onChange={(event) => setValue(event.target.value)} />
        <button onClick={() => props.onDone(value,props.index)} className='pl-4'>
          Done
        </button>
      </span>
  ) :  (
    <span className='flex'>
    {props.item}
    <button onClick={() => props.onEdit(props.index)} className='pl-4'>
      Edit  
        </button>
    <button onClick={() => props.onDelete(props.item)} className='pl-4'>
      delete  
        </button>



</span>
);
}


    <div>Todoitem</div>
  

export default TodoItem