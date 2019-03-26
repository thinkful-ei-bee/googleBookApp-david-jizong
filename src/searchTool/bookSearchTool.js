import React from 'react'
import './bookSearchTool.css'
class BookSearchTool extends React.Component{
  constructor(props){
    super(props)
    this.state={value:''}
  }

  handleOnchange=(e)=>{
    this.setState({
      value:e.target.value
    })
  }
  render(){
    console.log(this.state)
    return(
      <div className='search-tool'>
        <form onSubmit={e=>this.props.searchHandle(e)} className='search-book-form'>
          <label htmlFor='search'>Search:    
          <input 
          type='text'
          ref='searc' 
          name='search' 
          id='search-tool' 
          placeholder='Search..' 
          value={this.state.value} onChange={e=>this.handleOnchange(e)}
          />

          </label>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BookSearchTool 