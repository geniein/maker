import React from 'react'
import { FC } from 'react'
import { SubTitleCon, SubTitleList } from './styles'

interface Props{
    text:any;
    style?:any;
}

const SubTitle:FC<Props> = ({text, style}) => {    
    return (
        <SubTitleCon style={style}>
            <SubTitleList>
                {text}
            </SubTitleList>
        </SubTitleCon>
    )
}

export default SubTitle
