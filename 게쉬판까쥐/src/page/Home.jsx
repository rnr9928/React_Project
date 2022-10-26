import React, {useState,useEffect} from 'react'
import mImg from '../assets/images/mush.png'
import mImg1 from '../assets/images/mush.png'
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import { Container,Row,Col } from 'reactstrap'
import heImg from '../assets/images/djawl.png'
import Space from '../component/Space/Space'
import "../style/home.css"
import Servi from '../servi/Servi'
import ProductList from '../component/UI/ProductList'
import products from '../assets/data/products'
import counter from '../assets/images/hzoe.jpg'
import Clock from '../component/UI/Clock'


const Home = () => {

  const [data,setData] = useState([]);
  const [bigdata,setbigData] = useState([]);
  const [mdata,setmData] =useState([])
  const [wdata,setwData] = useState([])
  const [pdata,setpData] = useState([])


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
    <div className='titleee'>
    <span></span><p>LOL SKIN SHOP OPEN!!</p>
    </div>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className='he_content'>
              <Link to='/shop'>
              <motion.button whileTap={{scale:1.2}} className='bbbtn'>SHOP GOGO</motion.button>
              </Link>
          </div>
        </Col>
        <div className='m1_img'>
            <img className="animate-bounce"src={mImg} alt=""/>
          </div>
        <div className='m2_img ml-7  '>
            <img className="animate-bounce" src={mImg1} alt=""/>
          </div>
    
          <div className="he_img ">           
            <img  src={heImg} alt="" />         
          </div>
     

      </Row>
    </Container>
  </section>

  <Servi/>
 

  <section className='timer'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="clock_top">
            <h4 className='text-black fs-6  fs-4'>마감 임박!!!</h4>
            <h3 className='text-black fs-6 mb-3 fs-4'>지금이 기회</h3>
          </div>
          <Clock/>
          <button className='bbbtn1'>
            <Link to="/shop/20">상점으로 이동</Link>
          </button>
        </Col>

        <Col lg="6" md="6"> 
        <div className='cccc'>         
          <img src={counter} alt="" />
        </div>
        </Col>
      </Row>
    </Container>
  </section>

  </Space>
  );
}

export default Home