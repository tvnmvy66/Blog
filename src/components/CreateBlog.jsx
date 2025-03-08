import React from 'react'

function CreateBlog() {
  return (
    <>
    <div className='mt-17 flex flex-col items-center'>
        <div>title : <input type="text" /></div>
        <div>desp : <input type="text" /></div>
        <div>COntent : <input type="text" /></div>
        <div><button onClick={()=>{alert('ihave been clicked!!!')}}>Share</button></div>
    </div>
    </>
  )
}

export default CreateBlog
