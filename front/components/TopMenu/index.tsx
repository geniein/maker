import React from 'react'
import { Container, Li, Ul } from './styles'

const TopMenu = () => {
    return (
        <Container>
            <Ul>
                <Li>
                    영상
                </Li>
                <Li>
                    편지
                </Li>
                <Li>
                    성장
                </Li>
                <Li>
                    감사
                </Li>
            </Ul>
        </Container>       
    )
}

export default TopMenu
