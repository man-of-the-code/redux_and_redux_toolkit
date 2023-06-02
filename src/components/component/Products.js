import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import {STATUSES} from '../store/productSlice';
import './Products.css' ;
import { add } from '../store/cartSlice';


//component function definition
const Products = () => {

  const dispatch = useDispatch();

  const {data:items,status} = useSelector(state=>state.product);
  console.log(items);

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])

  


    

if(status === STATUSES.LOADING)
{
    return <h4>loading....</h4>
}

if(status === STATUSES.ERROR)
{
    return <h4>something went wrong....</h4>
}

// handling add to cart
const addHandle = (item) => {
  dispatch(add(item));
}


  return (
    <div className='productsWrapper'>
      {
        items.map(item => (
          <div className='card' key={item.id} >
            <img src={item.image}></img>
            <h3>{item.title}</h3>
            <h6>details : {item.description}</h6>
            <h4>Rs:- {item.price}</h4>
            <button onClick={()=>addHandle(item)} >add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products



// {
//   items.map(item => (
//     <div className='card' key={item.id}>
//         <img src={item.image}></img>
//         <h4>{item.title}</h4>
//         <h5>{item.price}</h5>
//         {/* <button className='btn' onClick={() => handleAdd(item)} >Add to cart</button> */}
//     </div>
//     //() => handleAdd(product)
// ))
// }