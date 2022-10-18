import React,{useState} from 'react'
import CSection from '../component/UI/CSection'
import Space from '../component/Space/Space'
import { Container,Row, Col } from 'reactstrap'
import '../style/shop..css'
import products from "../assets/data/products"
import ProductList  from '../component/UI/ProductList'
 
const Shop = () => {

  const [productsData,setProductsData] = useState(products)
  const handle = e =>{
      const fValue = e.target.value
        if(fValue==='TEEMO1'){
          const filProducts = products.filter(item=>item.category==="TEEMO1")

          setProductsData(filProducts);

        }
        if(fValue==='TEEMO2'){
          const filProducts = products.filter(item=>item.category==="TEEMO2")

          setProductsData(filProducts);

        }
        if(fValue==='TEEMO3'){
          const filProducts = products.filter(item=>item.category==="TEEMO3")

          setProductsData(filProducts);

        }
        if(fValue==='TEEMO4'){
          const filProducts = products.filter(item=>item.category==="TEEMO4")

          setProductsData(filProducts);

        }
        if(fValue==='TEEMO5'){
          const filProducts = products.filter(item=>item.category==="TEEMO5")

          setProductsData(filProducts);

        }
  }

  const handleSearch = e =>{
    const searchTerm = e.target.value
    const searchProduct = products.filter(item=> item.productName.
      toLowerCase().includes(searchTerm.toLowerCase()))

      setProductsData(searchProduct)
  }

  return <Space title='Shop'>
    <CSection title='Product'/>

    <section>
      <Container>
        <Row>
          <Col lg='3' md='3'>
            <div className="f-wi">
              <select onChange={handle}>
                <option>Category</option>
                <option value="TEEMO1">TEEMO1</option>
                <option value="TEEMO2">TEEMO2</option>
                <option value="TEEMO3">TEEMO3</option>
                <option value="TEEMO4">TEEMO4</option>
                <option value="TEEMO5">TEEMO5</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='3'>
          <div className="f-wi">
              <select>
                <option>Sort</option>
                <option value="ascend">Ascend</option>
                <option value="descend">Descend</option>
              </select>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="searcch">
              <input type="text" placeholder="..." onChange={handleSearch}/>
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

<section className='pt-0'>
  <Container>
    <Row>
      {
        productsData.length===0?<h1 className='text-center'>없는 상품이에용</h1>
        : <ProductList data={productsData}/>
      }
    </Row>
  </Container>
</section>
  </Space>
    
  
}

export default Shop