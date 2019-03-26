import React from 'react'
import './bookList.css'

class BookItem extends React.Component{

  state={expand:false}
   expandHandle=()=>{
    this.setState({expand:true})
  }

  collapseHandle=()=>{
    this.setState({expand:false})
  }

render()
{  const price = (this.props.bookdata.saleInfo.retailPrice)?
  <div className='book-price'>price: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
  .format(this.props.bookdata.saleInfo.retailPrice.amount)}</div>:<div>price not available</div>
  const bookcover = (this.props.bookdata.volumeInfo.imageLinks)? <img alt ='bookcover' src={this.props.bookdata.volumeInfo.imageLinks.thumbnail }/>:
  <span>front cover is not available</span>
  // const description = (this.props.bookdata.volumeInfo.description)? <div className='book-description'>{this.props.bookdata.volumeInfo.description.slice(0,300)}<button onClick={()=>this.expandHandle()}id='expand' type='click'>View Details</button></div>:
  // (this.state.expand)?<div className='book-description'>{this.props.bookdata.volumeInfo.description}<button onClick={()=>this.expandHandle()}id='collapse' type='submit'>Collapse</button></div>:<p>No description available</p>
  // console.log('test state',this.state.expand)
  let description = ''
  if(this.props.bookdata.volumeInfo.description){
    if(this.state.expand){
      description = <div className='book-description'>{this.props.bookdata.volumeInfo.description}<strong onClick={()=>this.collapseHandle()}id='view-less' type='submit'>Show Less</strong></div>
    }else{
      description=  <div className='book-description'>{this.props.bookdata.volumeInfo.description.slice(0,300)}<strong onClick={()=>this.expandHandle()}id='view-more' type='submit'>Show More</strong></div>
    }

  }

  return(
    <li className='book-item'>
    <div className='book-item-container'>
      <div className='book-cover'>
       {bookcover}
      </div>
      <div className='book-info'>
      <h3 className='book-title'> {this.props.bookdata.volumeInfo.title}</h3>
      <div className='book-author'>Author: {this.props.bookdata.volumeInfo.authors}</div>
      {price}
      {description}
      </div>
      </div>
    </li>
  )}
}

export default BookItem