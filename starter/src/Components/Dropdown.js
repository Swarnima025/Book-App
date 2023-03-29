import React from 'react'
function Dropdown(props) {
  return (
    
         <div className="book-shelf-changer">
                      <select
                        onChange ={
                          (e)=>{
                            props.changeShelf(props.book,e.target.value)
                          }
 
                          }
                            value={props.book.shelf || "none"}
                          >
                        
                        <option  disabled>
                          {props.path === 'search' ? props.toggle ? 'Add To ...' : 'Move to ..': 'Move To...'}
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
          
                        <option value="none"
                       >
                        None
                        
                        </option>
                        
                        
                      </select>
                      </div>
    
  )
}


export default Dropdown