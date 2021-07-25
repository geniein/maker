import React from 'react'
import { Container, TopMenuLi, TopMenuUl } from './styles'

const TopMenu = () => {
    return (
        <Container>
            <TopMenuUl>
                <TopMenuLi>
                    영상
                </TopMenuLi>
                <TopMenuLi>
                    편지
                </TopMenuLi>
                <TopMenuLi>
                    성장
                </TopMenuLi>
                <TopMenuLi>
                    감사
                </TopMenuLi>
            </TopMenuUl>
        </Container>       
    )
}

export default TopMenu
