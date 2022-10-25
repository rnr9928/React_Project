import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {motion} from 'framer-motion'
import serviceData from "../assets/data/serviceData"
import './servi.css'

const Servi = () => {
  return   <section className='servi'>
    <Container>
        <Row>
            { serviceData.map((item,index)=>(
                    
                        <motion.div whileHover={{scale: 1.1}}
                className='sv_item'>
                    <span>
                        <i class={item.icon}></i>
                            </span>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                        <p>{item.story}</p>
                    </div>
                </motion.div>
         
               
                ))
            }
           
        </Row>
    </Container>
  </section>
 
  
}

export default Servi