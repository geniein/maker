import styled from '@emotion/styled';

export const EditorTop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: #fdd47a;
    width: 100%;
    height: 300px;
    color: #3e3e3e;
    text-align: center;
    padding-top: 30px;
    display: flex;    
    justify-content:center;
    .top_inner{
        width: 1160px;
        display: flex;
        flex-flow: column wrap;
        justify-content:center;
        .title{
            display: inline-flex;
            justify-content: center;            
            width: 80%;
            font-size: 18px;
            font-family: 'Noto_B';
        }
    }    
    .process_bar{
        width: 100%;
        margin-top: 80px;
        list-style: none;
    }
`;

export const EditorProcessItem =styled.li`
    float: left;
    width: 20%;
    padding: 10px;
    .process_item{
        width: 100%;
        height: 80px;
        background: #FFC764;
        border-radius: 40px;
        padding: 10px 0 0 10px;
        display: inline-flex;
        .pre{
            width: 60px;
            height: 60px;
            border-radius: 100%;
            overflow: hidden;
            background-color: #fff;
        }
        .post{
            text-align: left;
            padding: 10px 0 0 20px;
        }
    }
`;