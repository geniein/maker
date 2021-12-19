import Footer from '@components/Footer'
import Header from '@components/Header'
import TopMenu from '@components/TopMenu'
import React from 'react'
import { LCContainer, LCMenu, LCTop } from './styles'

const LetterContent = () => {
    return (
        <div>            
            <LCTop>
                <p>
                    설렘 순간을 영상으로 보여주세요                
                </p>
            </LCTop>
            <LCMenu>
                <ul>
                    <li >
                        전체보기                        
                    </li>
                    <li >
                        프로포즈
                    </li>
                    <li >
                        웨딩스토리
                    </li>
                    <li >
                        성장스토리
                    </li>
                    <li >
                        가족스토리
                    </li>
                </ul>
            </LCMenu>                        
        </div>
    )
}

export default LetterContent
