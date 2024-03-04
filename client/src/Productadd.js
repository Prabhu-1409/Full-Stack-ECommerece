import React, { useState } from 'react'
import Axios from 'axios'
import './Productadd.css'

function Productadd() {
    const [name, setname]=useState('')
    const [description, setdescription]=useState('')
    const [category, setcategory]=useState('')
    const [stock, setstock]=useState()
    const [price, setprice] = useState(0)
    const [file, setfile]=useState()

    const handledata=(e)=>{
        e.preventDefault()
        const formdata=new FormData()
        //formdata.get('name')
        formdata.append('name',name)
        formdata.append('description',description)
        formdata.append('category',category)
        formdata.append('stock',stock)
        formdata.append('price',price)
        formdata.append('image',file)
        console.log([...formdata.entries()])
        Axios({
            method:'POST',
            url:'http://localhost:3001/api/addproducts',
            data:formdata,
        }).then(()=>{
            console.log('Sent Succesfully')
        }).catch((err)=>{
            console.log(err)
        })
        setname('')
        setdescription('')
        setcategory()
        setprice('')
        setstock('')
        setfile()

    }
    //useEffect(()=>{
      //  Axios.get('http://localhost:3001/api/gettingproduct').then((res)=>{
          //  console.log(res)
        //})
    //},[])

  return (
    <div className='add-product'>
        <div className='topic-align'>
            <h1 className='addproduct-name'>Add Products</h1>
            <span className='line2'></span>
        </div>
        <form className='add-productform' onSubmit={handledata}>
            <h3 className='names5'>Enter the Name of the Product</h3>
            <input className='addinput' type='text' name='name' value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter the Product Name'></input>
            <textarea className='addinput' type='text' name='description' value={description} onChange={(e)=>{setdescription(e.target.value)}} cols={40} rows={5} placeholder='Enter the Description of the Product'></textarea>
            <h3 className='names2'>Enter Category of the Product</h3>
            <select className='addinput' value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                <option className='option-name'>Select an option</option>
                <option>Electronics</option>
                <option>Household</option>
                <option>Toys</option>
                <option>Home Decors</option>
                <option>Kitchen</option>
            </select>
            <h3 className='names'>Enter Number of Stock Available</h3>
            <input className='addinput' type='number' name='stock' value={stock} onChange={(e)=>{setstock(e.target.value)}} placeholder='Enter the number of Stocks Available'></input>
            <h3 className='names4'>Enter Price</h3>
            <input className='addinput' type='number' name='price' value={price} onChange={(e)=>{setprice(e.target.value)}} placeholder='Enter the Price'></input>
            <input className='addinputfile' type='file' name='image' id='image' onChange={(e)=>{setfile(e.target.files[0])}}></input>
            <input className='submitbutton' type='submit'></input>
        </form>
    </div>
  )
}

export default Productadd
