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
        if(fValue==='Teemo'){
          const filProducts = products.filter(item=>item.category==="Teemo")

          setProductsData(filProducts);

        }
        if(fValue==='Yumi'){
          const filProducts = products.filter(item=>item.category==="Yumi")

          setProductsData(filProducts);

        }
        if(fValue==='Zed'){
          const filProducts = products.filter(item=>item.category==="Zed")

          setProductsData(filProducts);

        }
        if(fValue==='Zoe'){
          const filProducts = products.filter(item=>item.category==="Zoe")

          setProductsData(filProducts);

        }
        if(fValue==='Black cow'){
          const filProducts = products.filter(item=>item.category==="Black cow")

          setProductsData(filProducts);

        }
        if(fValue==='Category'){
          const filProducts = products.filter(item=>item.category)

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
    <CSection title='스킨상품'/>

    <section>
      <Container>
        <Row>
          <Col lg='3' md='3'>
            <div className="f-wi">
              <select onChange={handle}>
                <option value="Category">Category</option>
                <option value="Teemo">Teemo</option>
                <option value="Yumi">Yumi</option>
                <option value="Zed">Zed</option>
                <option value="Zoe">Zoe</option>
                <option value="Black cow">Black cow</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='3'>
          <div className="f-wi">
              
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