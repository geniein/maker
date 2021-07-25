import React from 'react'
import { FC } from 'react'
import { SubTitleCon, SubTitleList } from './styles'

interface Props{
    text:any;
}

const SubTitle:FC<Props> = ({text}) => {    
    return (
        <SubTitleCon>
            <SubTitleList>
                {text}
            </SubTitleList>
        </SubTitleCon>
    )
}

export default SubTitle
