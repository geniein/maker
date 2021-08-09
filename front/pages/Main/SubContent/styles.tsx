import styled from '@emotion/styled';

export const NoticeCon = styled.ul`
    width: 100%;
    height: 54px;
    list-style: none;    
    margin: 0 auto;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;   
    `;
export const NoticeSub = styled.li`
    color: #eac784;
    width: 10%
    letter-spacing: 0.8px;
    padding-right: 10px;
    font-size: 13px;
    border-right: 1px solid #ccc;
    height: 15px;
    line-height: 15px;
    margin: 20px 0px;
    float:left;
    `;

export const NoticeContent = styled.li`    
    width: 60%;
    height: 40px;
    margin: 7px 10px 0px;
    line-height: 40px;           
    float:left;
    `;

export const NoticeTip = styled.li`
    width: 15%;
    height: 40px;
    margin: 7px 0px;
    line-height: 40px;
    text-align: center;
    border-left: 1px solid #ddd; 
    border-right: 1px solid #ddd;
    float:right;
    `;

export const SubTitleCon = styled.ul`
    list-style: none;
    width: 100%;
    height:160px;    
    padding: 40px 0px;
    text-align: center;
    display:flex;
    justify-content:center;
    margin: 1px auto;    
    `;

export const SubTitleList = styled.p`
    font-size: 22px;
    width:100%;            
    color: #5d5d5d;
    font-family: 'noto_b';
    align: center;
    `;