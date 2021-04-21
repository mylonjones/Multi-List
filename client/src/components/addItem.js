import React from 'react'

export default function AddItem(props) {
  return (<div className='adder'>
    <form>
    <input type='text' className='input'></input>
    <button onClick={props.handleAddItem}>ADD</button>
    </form>
  </div>)
}