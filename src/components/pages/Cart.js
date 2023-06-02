import React from 'react' ;
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  console.log(items);


  const removeHandle = (itemId) => {
    dispatch(remove(itemId));
  }


  return (
    <div className='item__wrapper'>
      {
        items.map(item => (
          <div className='item__content' key={item.id} >
            <img src={item.image}></img>
            <h3>{item.title}</h3>
            <h6>details : {item.description}</h6>
            <h4>Rs :- {item.price}</h4>
            <button onClick={()=>removeHandle(item.id)} >remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart