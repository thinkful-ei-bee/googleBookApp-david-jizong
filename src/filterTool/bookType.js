import React from 'react'
import './filterTool.css'
function BookType(props){
  return(
    <div className='book-type'>
      <form className='book-type-form'>
      <label>Book Type: 
      <select 
      id='book-type'
      name='book-type'
      onChange={e=>props.bookTypeHandle(e)}>
      <option  value=''>No Filter</option>
      <option value='filter=ebooks'>ebooks</option>
        <option value='filter=free-ebooks'>free ebooks</option>
        <option value='filter=paid-ebooks'>paid ebooks</option>
      </select>
    </label>
    </form>
    </div>
  )
}

export default BookType