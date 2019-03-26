import React from 'react'
import FilterTool from '../filterTool/filterTool'
import BookSearchTool from '../searchTool/bookSearchTool'

class BookToolBar extends React.Component{
  render(){
    return(
      <div className='book-tool-bar'>
        <BookSearchTool searchHandle = {this.props.searchHandle}
        />
        <FilterTool printTypeHandle={this.props.printTypeHandle}
        bookTypeHandle={this.props.bookTypeHandle}/>      
      </div>
    )
  }
}

export default BookToolBar