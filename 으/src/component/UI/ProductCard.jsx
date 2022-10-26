import React from 'react'
import {motion} from "framer-motion"
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../style/pro_card.css'

import { useDispatch } from 'react-redux'
import {cartAction} from "../../redux/slice/cartSlice"
import {toast } from 'react-toastify'

const ProductCard = ({item}) => {

  const dispatch = useDispatch()

  const addCart= () =>{
    dispatch(cartAction.addItem({
       id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl

    }
    ))
   toast.success(`${item.productName}+1`);
  }

  return (
    <Col lg='3' md='4' className='mb-2'>
    <div className="pro_item">
        <div className="pro_img">
        <Link to={`/shop/${item.id}`}>
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
            </Link>
        </div>
        <div className="p-2 pro_info">
        <h3 className='pro_name'>
            <Link to={`/shop/${item.id}`}>
            {item.productName}
            </Link>
            </h3>
        <span>{item.category}</span>
        </div>
        <div className="pro_card d-flex align-items-center justify-content-between p-2">
            <span className='price'>${item.price}</span>
            <motion.span whileTap={{scale:1.4}} onClick={addCart}>
            <span><i class="ri-hand-heart-fill"></i></span>
            </motion.span>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard