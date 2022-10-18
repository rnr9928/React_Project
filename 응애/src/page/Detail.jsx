import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Space from '../component/Space/Space'
import CSection from '../component/UI/CSection'
import '../style/detail.css'

const Detail = () => {

const {id} = useParams()
const product = products.find(item=> item.id === id)

const {imgUrl, productName , price ,Rating, review, script,ShortD} = product

  return <Space>
    <CSection/>

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
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-half-fill"></i></span>
                </div>

                <p>(<span>{Rating}</span>점)</p>
              </div>

              <span className='pro_price'>${price}</span>
              <p className='mt-3'>{ShortD}</p>
              
              <button className='bbbtn'>상품담기</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Space>
}

export default Detail