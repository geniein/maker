import React from 'react'
import { Container } from '../styles'
import { forwardRef } from 'react';

interface Props{
    pageState: boolean;
}

const SubFAQ = forwardRef((props, ref) => {  
    return (
        <Container>
                <div className='title'>FAQ <span>자주 묻는 질문</span></div>                         
        </Container> 
    )
});

export default SubFAQ
