import React from 'react'
import './filterTool.css'
function PrintType(props){
  // let value=''
  // let onChange=(e)=>{
  //   value=e.target.value
  // }
  return(
    <div>
      <form>
      <label>Print Type:
      <select id='print-type'
        name='print-type'
        onChange={e=>props.printTypeHandle(e)}
       >
      <option  value='all'>All</option>
        <option  value='books'>Book</option>
        <option  value='magazines'>Magazine</option>
      </select>
    </label>
    </form>
    </div>
  )
}

export default PrintType