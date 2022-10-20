import React , {useState, useRef}from 'react'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Space from '../component/Space/Space'
import CSection from '../component/UI/CSection'
import ProductsList from '../component/UI/ProductList'
import '../style/detail.css'
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/slice/cartSlice'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Detail = () => {

  const [tab,setTab] = useState('desc')
  const reviewUser = useRef('')
  const reviewMsg =useRef('')
  const dispatch = useDispatch()
  const [rating,setRating] = useState(null)
const {id} = useParams()
const product = products.find(item=> item.id === id)

const {imgUrl, productName , price ,Rating, reviews, script,ShortD,category} = product

const relate = products.filter(item=> item.category===category)
const submitHand = (e) =>{
  e.preventDefault()

  const reviewUserName =  reviewUser.current.value
  const reviewUserMsg =  reviewMsg.current.value

  const reviewObj={
    userName: reviewUserName,
    text: reviewUserMsg,
    rating,
  }
  // console.log(reviewUserName,reviewUserMsg)
  toast.success('리뷰작성')
}

const addCart = () =>{
  dispatch(cartAction.addItem({
    id,
    image:imgUrl,
    productName,
    price,

  })

  )

  toast.success('상품추가+1')
}

useEffect(()=>{
  window.scrollTo(0,0)
},[product])

  return <Space >
    <CSection title={productName}/>

    <section className='pt-5'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt="" />
          </Col>

          <Col lg='6'>
            <div className="pro_detail">
              <h2>{productName}</h2>
              <div className="pro_rating d-flex align-items-center gap-5 mb-3 ">
                <div>
                  <span ><i class="ri-star-fill"></i></span>
                  <span ><i class="ri-star-fill"></i></span>
                  <span ><i class="ri-star-fill"></i></span>
                  <span ><i class="ri-star-fill"></i></span>
                  <span ><i class="ri-star-half-fill"></i></span>
                </div>

                <p>(<span>{Rating}</span>점)</p>
              </div>


              <div className='d-flex align-items-center gap-5'>
              <span className='pro_price'>${price}</span>
              <span>category:{category.toUpperCase()}</span>
              </div>
              <p className='mt-3'>{ShortD}</p>
              
              <button className='bbbtn' onClick={addCart}>상품담기</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <div className="tab_wrap d-flex align-items-center gap-5">
          <h6 className={`${tab==='desc'?'active_tab':""}`}
          onClick={()=>setTab('desc')}>..</h6>
          <h6 className={`${tab==='rev'?'active_tab':""}`}
           onClick={()=>setTab('rev')}>리뷰({reviews.length})</h6>
        </div>

{ tab==='desc' ? ( 
<div className="tab_content mt-5">
     <p>{script}</p>
        </div>
         ) :(
          <div className='pro_review mt-5'>
            <div className="review_wrap">
              <ul>
                {
                  reviews.map((item,index)=>(
                    <li key={index} className='mb-4'>
                      <h6>티모킹</h6>
                      <span>{item.rating}</span>
                    <p>{item.text}</p>
                    </li>
                  ))
                }
              </ul>

              <div className="review_form">
                <h4>ㅇㅇㅇ</h4>
                <form action='' onSubmit={submitHand}>
                  <div className="f_group">
                    <input type="text" placeholder="이름" ref={reviewUser} required/>
                  </div>
                  <div className="f_group d-flex align-items-center gap-3 ">
                   <span onClick={()=> setRating(1)}>1<i class="ri-star-fill"></i></span>
                   <span onClick={()=> setRating(2)}>2<i class="ri-star-fill"></i></span>
                   <span onClick={()=> setRating(3)}>3<i class="ri-star-fill"></i></span>
                   <span onClick={()=> setRating(4)}>4<i class="ri-star-fill"></i></span>
                   <span onClick={()=> setRating(5)}>5<i class="ri-star-fill"></i></span>
                  </div>

                  <div className="f_group">
                    <textarea ref={reviewMsg} rows={4} type="text" placeholder="리뷰쓰기" required/>
                  </div>

                  <button type="submit"className='bbbtn'>작성</button>
                </form>
              </div>
            </div>
          </div>
        )
}
       
      </Col>
      <Col lg='12'>
        <h2 className="rtitle mt-5">
          hello
        </h2>
      </Col>
      <ProductsList data={relate}/>
    </Row>
  </Container>
</section>

  </Space>
}

export default Detail