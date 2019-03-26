import React from 'react'
import PrintType from './printType'
import BookType from './bookType'
import './filterTool.css'

class FilterTool extends React.Component{
render(){
  return(
    <div className='filter-tools'>
      <PrintType printTypeHandle={this.props.printTypeHandle}/>
      <BookType bookTypeHandle={this.props.bookTypeHandle}/>

    </div>
  )
}
}

export default FilterTool