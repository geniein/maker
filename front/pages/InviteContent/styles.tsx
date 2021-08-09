import styled from '@emotion/styled'

export const ICTop = styled.div`    
    width:100%;
    height:200px;
    background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);    
    position: relative;    
    p {
        position:absolute;
        top:30%;        
        width:100%;
        text-align:center;
        font-weight:bold;
        font-size: 12px;
        letter-spacing: 3px;
    }
`;

export const ICMenu = styled.div`
    border-bottom: 1px solid #eaeaea;
    height: 70px;
    margin-bottom: 20px;
    ul{
        display:inline-flex;
        justify-content:center;
        flex-direction:row;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        list-style: none;
    }
    li{
        float: left;
        height: 70px;
        line-height: 70px;
        width: 150px;
        cursor: pointer;
        opacity:1;
    }
    pick_line {
        border-top: 1px solid rgb(255, 200, 99);
        width: 150px;
        position: relative;        
    }   
`;    

export const ACContainer = styled.ul`
    width: 80%;
    margin: 0 auto;
    list-style: none;
    margin-top: 20px;
    display: flex;
    justify-content:center;    
    flex-wrap: wrap;
    li{
        float: left;
        width: 33.33%;
        margin: 20px 0px;
    }
`;

export const GoListBtn = styled.div`
    color: #fff;
    cursor: pointer;
    background: #eac684;
    margin: 50px 20px 30px 20px;
    border: 0px;
    width: 250px;
    height: 60px;            
    border-radius: 2px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;