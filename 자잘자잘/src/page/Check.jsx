import React from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import Space from '../component/Space/Space'
import CSection from '../component/UI/CSection'
import '../style/check.css'
import { useSelector } from 'react-redux'

const Check = () => {

  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const totalAmout = useSelector(state=>state.cart.totalAmout)

  return (
    <Space title="결제페이지">
      <CSection title='결제페이지임'/>
      <section>
        <Container>
          <Row>
            <Col lg ='8'>
              <h6 className='mb-4 fw-bold'>정보</h6>
              <Form className='b_form'>
                <FormGroup className='f_group'>
                  <input type="text" placeholder="이름입력"/>
                </FormGroup>
                <FormGroup className='f_group'>
                  <input type="email" placeholder="이메일입력"/>
                </FormGroup>
                <FormGroup className='f_group'>
                  <input type="text" placeholder="주소입력"/>
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
              <div className="check_cart">
                <h6>총 수량: <span>{totalQuantity}개</span></h6>
                <h6>합계: <span>{totalAmout}</span></h6>
                <h4>총 가격: <span>{totalAmout}</span></h4>
                <button className="bbbtn1 w-100">구매하기</button>
              </div>
             
            </Col>
          </Row>
        </Container>
      </section>
    </Space>
  )
}

export default Check