import React from 'react'

export default function Item(props) {
  return (
    <div className='item'>
      {props.item.name}
      <input type='checkbox' onClick={() => {props.handleCheck(props.index)}}></input>
    </div>
  )
}