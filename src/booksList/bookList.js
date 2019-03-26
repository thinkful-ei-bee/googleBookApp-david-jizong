import React from 'react'
import BookItem from './bookItem'
import './bookList.css'
class BookList extends React.Component{
  render(){
    console.log(this.props.books,'test booklist current')
    const bookList = this.props.books?this.props.books.map((book,index)=>
      <BookItem bookdata={book} key={index}/>
      ):<div className="no-book-found">No book found!</div>
    return(
      <ul className='book-list'>
        {bookList}
      </ul>
    )
  }
}

export default BookList 