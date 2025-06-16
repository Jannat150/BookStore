import React from 'react'

const Uploads = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    const form=e.target;
    const title=form.title.value;
    const author=form.author.value;
    const publishedDate=form.publishedDate.value;
    const pages=form.pages.value;
    const description=form.description.value;
    const image=form.image.value;
    const price=form.price.value;

    const Object={
      title,
      author,
      publishedDate,
      pages,
      description,
      image,
      price
    }
    console.log(Object);
    fetch("http://localhost:8000/uploads-book",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(Object)
    }).then((res)=>res.json()).then((data)=>{
      alert("Book updated Successfuly")
      console.log(data)
    })
    form.reset()
  }
  return (
    <div>
      <h1 className='text-4xl'>Post Book here</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder='Enter book Title'></input>
        <input name='author' placeholder='Enter Author name'></input>
        <input name='publishedDate' placeholder='Enter published date'></input>
        <input name='pages' placeholder='Enter number of pages'></input>
        <input name='description' placeholder='Enter Book Description'></input>
        <input name='image' placeholder='Enter image Url'></input>
        <input name='price' placeholder='Enter price'></input>
        <button type='submit' className='bg-green-500 p-2 text-xl'>submit</button>
        

      </form>
    </div>
  )
}

export default Uploads
