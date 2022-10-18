import React, {useState,useEffect} from 'react'

import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import { Container,Row,Col } from 'reactstrap'
import heImg from '../assets/images/pteemo10.jpg'
import Space from '../component/Space/Space'
import "../style/home.css"
import Servi from '../servi/Servi'
import ProductList from '../component/UI/ProductList'
import products from '../assets/data/products'
import counter from '../assets/images/pteemo.jpg'
import Clock from '../component/UI/Clock'


const Home = () => {

  const [data,setData] = useState([]);
  const [bigdata,setbigData] = useState([]);
  const [mdata,setmData] =useState([])
  const [wdata,setwData] = useState([])
  const [pdata,setpData] = useState([])

  const year = new Date().getFullYear()
  useEffect(()=>{
    const 상품 = products.filter(item=> item.category==='TEEMO2'
    );
    const 빅상품 = products.filter(item=> item.category==='TEEMO1'
    );
    const 모상품 = products.filter(item=> item.category==='TEEMO3'
    );
    const 와상품 = products.filter(item=> item.category==='TEEMO5'
    );
    const 인기상품 = products.filter(item=> item.category==='TEEMO4'
    );

    setpData(인기상품);
    setbigData(빅상품);
    setData(상품);
    setmData(모상품);
    setwData(와상품);
  },[]);
  return  (
  <Space title={"Home"}>
   <section className='he_section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className='he_content'>
              <p className='he_sub'>TEEMO WORLD{year}</p>
              <h2>Honney TeeMo ^오^</h2>
              <p>TEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMO
              TEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMO
              TEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMOTEEMO
              </p>
              <Link to='/shop'>
              <motion.button whileTap={{scale:1.2}} className='bbbtn'>SHOP GOGO</motion.button>
              </Link>
          </div>
        </Col>

        <Col lg='6' md='6'>
          <div className="he_img">
            <img src={heImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>

  <Servi/>
  <section className='tr_product'>
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className='se_title'>TEEMO</h2>
        </Col>
        <ProductList data={data}/>
      </Row>
    </Container>
  </section>
  <section className='big_sale'>
    <Container>
    <Row>
        <Col lg='12' className='text-center'>
          <h2 className='se_title'>BIG TEEMO</h2>
        </Col>
        <ProductList data={bigdata}/>
      </Row>
    </Container>
  </section>

  <section className='timer'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="clock_top">
            <h4 className='text-white fs-6 mb-2'>마감 임박!!!</h4>
            <h3 className='text-white fs-6 mb-3'>지금이 기회</h3>
          </div>
          <Clock/>
          <button className='bbbtn'>
            <Link to="/shop">상점으로 이동</Link>
          </button>
        </Col>

        <Col lg="6" md="6" className='text-end'>
          <img src={counter} alt="" />
        </Col>
      </Row>
    </Container>
  </section>
  <section className='new_arr'>
    <Container>
      <Row>
      <Col lg='12' className='text-center mb-5'>
          <h2 className='se_title'>NEW</h2>
        </Col>
        <ProductList data={mdata}/>
        <ProductList data={wdata}/>
      </Row>
    </Container>
  </section>

  <section className='p_category'>
  <Container>
      <Row>
      <Col lg='12' className='text-center mb-5'>
          <h2 className='se_title'>인기상품</h2>
        </Col>
        <ProductList data={pdata}/>
      </Row>
    </Container>
  </section>
  </Space>
  );
}

export default Home