import React from 'react'
import { Container } from 'reactstrap'
import '../../style/CSection.css'

const CSection = ({title}) => {
  return (
    <section className="co_section">
    <Container className='text-center'>
        <h1>{title}</h1>
    </Container>
    </section>
  )
}

export default CSection