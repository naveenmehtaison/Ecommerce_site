import React, { useState,useEffect } from 'react';

import Scrolling from './scrolling';
import ShowingProductsOnSrc from './ShowingProductsOnScr';
const Input = () => {
    const [Filterdata,setFilterdata]=useState('')
    const [enterednum,setenterednum]=useState({})
    const [newdata,setnewdata]=useState([])  
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Inside handleFormSubmit');
        const small_data = {productId:event.target.elements.product_id.value,
            sellingPrice:event.target.elements.selling_price.value,
            productName:event.target.elements.product_name.value,
            type:Filterdata
        }
        setnewdata([...newdata,small_data])
        console.log(small_data)
    };
    const ScrollFilter=(value)=>{
        setFilterdata(value)
        console.log(Filterdata)

    }


    return (
        <div>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='product_name'>Product Name</label>
                    <input type='text' id='product_name' />
                    <label htmlFor='product_id'>Product ID</label>
                    <input type='text' id='product_id'  />
                    <label htmlFor='selling_price'>Selling Price</label>
                    <input type='number' id='selling_price'/>
                    
                    <button type='submit'>Add Product</button>
                    <Scrolling props={enterednum}  onChangeFilter={ScrollFilter}/>
                </div>


            </form>
            <label htmlFor='label1'><h2>Electronics</h2>
            <ShowingProductsOnSrc allData={newdata} props2={'1'} onChangeFilter={ScrollFilter}/>  
            </label>
            <br></br>

            <label htmlFor='label2'><h2>Food</h2>
            <ShowingProductsOnSrc allData={newdata}  props2={'2'} onChangeFilter={ScrollFilter}/>  
            
            </label>
            <br></br>
            <label htmlFor='label3'>
                <h2>Clothes</h2>
            </label>
            <br></br>
            <ShowingProductsOnSrc allData={newdata} props2={'3'} onChangeFilter={ScrollFilter}/>  
            

        </div>   
        
    
        
    );
};
 
export default Input;
