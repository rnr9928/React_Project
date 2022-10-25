import React from 'react'
import '../style/cart.css'
import Space from '../component/Space/Space'
import CSection from '../component/UI/CSection'
import { Container,Row,Col } from 'reactstrap'


import {cartAction} from '../redux/slice/cartSlice'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmout = useSelector((state) => state.cart.totalAmout)
  return (
  <Space title="Cart">
    <CSection title="카트임"/>
    <section>
       <Container>
        <Row>
          <Col lg='9'>
         {
          cartItems.length === 0 ? (
          <h2 className='fs-4  text-center'>상품이 비어있어요
          </h2> 
          ): (

          <table className='table bordered'>
              <thead>
                <tr>
                  <th>이미지</th>
                  <th>제목</th>
                  <th>가격</th>
                  <th>수량</th>
                  <th>취소</th>
                </tr>
              </thead> 

                <tbody>
                  
               {
                cartItems.map((item,index)=>(
             <HMM item={item} key={index}/>
                ))
               }
              </tbody>           
              </table>
        ) }
   </Col>

                   <Col lg='3'>
                    <div className='hmm'>
                      <h6 className='d-flex align-items-center justify-content-between'>합계
                      <span className='fs-4 fw-bold'>${totalAmout}</span></h6>
                    </div>
                    {/* <p className='fs-6 mt-2'>티모모모모모모모모모</p> */}
                    <div>
                      <button className='bbbtn1 w-100'><Link to='/shop'>물건 더 담기</Link></button>
                      <br></br>
                      <br></br>
                      <button className='bbbtn1 w-100'><Link to='/check'>결제하기</Link></button>
                    </div>
                   </Col>
                   </Row>
       </Container>    
    </section>
    </Space>
    )
}

const HMM =  ({item}) => {

  const dispatch = useDispatch()
  const deleteProduct = () =>{
    dispatch(cartAction.deleteItem(item.id))
  }
  return   <tr >
  <td><img src={item.imgUrl} alt="" /></td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}개</td>
  <td><i  onClick={deleteProduct}  class="ri-delete-bin-6-line"></i></td>
</tr>
}

export default Cart