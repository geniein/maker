import styled from '@emotion/styled';

export const EditorWrap = styled.div`    
    padding: 0px;    
    margin-top: 300px;
    width: 1200px;
    font-family: 'Noto_R';
    font-weight: normal;
    box-sizing: border-box;
`;

export const EditorLeft = styled.div`
    position: relative;
    z-index: 2;
    float: left;
    width: 54%;
    height: 530px;
    padding: 0;
    margin-right: 2%;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #ddd;
    
    .src_title{
        display: inline-flex;
        justify-content: center;
        flex-flow:column nowrap;
        text-align:center;
        width: 100%;
        padding: 20px 0;
        background: #fafafa;
        border-bottom: 1px solid #ebe9e9;
        h2{
            font-size: 14px;
            color: #F39F0D;
            margin-bottom: 4px;
            font-family: 'Noto_B';
        }
        p{
            font-size: 12px;
            color: #5e5e5e;
        }
    }

    .detail_src{        
        width:90%;        
        display: flex;
        flex-flow: column nowrap;
        justify-content:center;        
        align-items:center; 
        text-align:center;
        margin:20px;    
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }  
        video{
            width: 100%;
            height: 100%;
            object-fit: contain;            
        }         
    }
`;

export const EditorRight = styled.div`
    position: relative;
    z-index: 2;
    width: 44%;
    height: 530px;
    float: left;
    right: 0;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #ddd;

    .detail_title{
        display: inline-flex;
        justify-content: center;
        flex-flow:column nowrap;
        text-align:center;
        width: 100%;
        padding: 20px 0;
        background: #fafafa;
        border-bottom: 1px solid #ebe9e9;
        h2{
            font-size: 14px;
            color: #F39F0D;
            margin-bottom: 4px;
            font-family: 'Noto_B';
        }
        p{
            font-size: 12px;
            color: #5e5e5e;
        }
    }
    .image_list{
        display: inline-block;
        width: 100%;
        height: 488px;
        overflow-x: hidden;
        overflow-y: scroll;
        padding-top: 25px;

        .image_item{
            width: 100%;
            height: 220px;
            background-color: #ffffff;
            background-size: cover;
            margin-bottom: 55px;
            position: relative;
            border: 4px solid #eac785;
            border-radius: 0 0 5px 5px;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
`;

export const EditorDetailInfo = styled.div`
    width: 100%;
    display: inline-flex;
    padding: 0 20px;
    flex-wrap:wrap;
    .detail_part{
        float: left;
        width: 49%;
        margin-bottom: 10px;
    }
    span{
        color: #3e3e3e;
        float: left;
        margin-top: 10px;
        font-size: 12px;
        font-family: 'Noto_B';
    }
    input[type='text'] {
        padding: 8px;
        font-size: 13px;
        font-family: Verdana;
        height: 40px;
        margin-left: 3px;
        outline: 0;
        width: 96%;
        float: left;
        border: 1px solid #fff;
        border-bottom: 1px solid #ddd;
        background: #fff;
        color: #5e5e5e;
    }
    .post_btn{
        width: 93%;        
        line-height: 30px;        
        background-color: #FFC764;
        box-shadow: 3px 3px 10px -3px rgb(0 0 0 / 30%);
        margin-right: 8px;    
        text-align: center;            
        box-sizing: border-box;
        color: #fff;
        border-radius: 4px;    
        cursor: pointer;
        font-size: 13px;
        padding: 10px;
    }
`;

export const EditorBtn = styled.div`
    margin-right: 8px;
    width: 90%;
    text-align: center;
    display: inline-block;
    background-color: #d2d2d2;
    box-sizing: border-box;
    color: #fff;
    border-radius: 4px;    
    cursor: pointer;
    font-size: 13px;
    padding: 10px;

`;

export const EditorCenterWrap = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 450px;
    text-align: center;
    .center_title{        
        width: 100%;
        margin-bottom: 5px;
        height: 45px;
        line-height: 47px;
        background-color: #fafafa;
        color: #3e3e3e;
        border-top-right-radius: 12px;
        font-size: 13px;
        border-bottom: 1px solid #ccc;
        font-family: 'noto_m';
        span{
            color: #ff9900;
            font-family: 'Noto_B';
        }
        .upload_btn{
            width: 106px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #7e7e7e;
            position: absolute;
            top: 8px;
            right: 20px;
            border: 1px solid #b9b9b9;
            cursor: pointer;
        }
    }
`;

export const EditorCenter = styled.div`
    margin-bottom: 10px;
    width: 100%;
    height: 400px;
    border-radius: 8px;
    background-color: #ffffff;    
    top: 0;
    left: 0;
    z-index: 1;
    box-shadow: 3px 3px 10px rgb(0 0 0 / 6%);
        
    .center_main{
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(/public/logo/editor_upload.png);
        width: 100%;
        height: 380px;
        margin: 0px;
        display: inline-block;
        overflow-y: scroll;
        background-color: #fff;
        text-align: left;
        padding-bottom: 15px;
        border-radius: 0px 0px 5px 5px;
        border: 3px solid #fff;
    }
`;

export const BottomBtn = styled.div`
    width: 100%;
    display: inline-block;
    margin-top: 20px;        
    .btn{
        transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        text-decoration: none;
        color: #fff;
        font-size: 15px;
        text-align: center;
        font-family: 'noto_m';
        border-radius: 8px;
        cursor: pointer;
    }
    .pre_button{
        width: 150px;
        height: 56px;
        line-height: 56px;
        float: left;
        background-color: #999999;
        box-shadow: 3px 3px 10px -3px rgb(0 0 0 / 30%);
    }
    .post_button{
        width: 150px;
        height: 56px;
        line-height: 56px;
        float: right;
        background-color: #FFC764;
        box-shadow: 3px 3px 10px -3px rgb(0 0 0 / 30%);
    }
    .mid_button{
        width: 150px;
        height: 56px;
        line-height: 56px;
        text-align: center;
        background-color: #FFC764;
        box-shadow: 3px 3px 10px -3px rgb(0 0 0 / 30%);    
        margin: auto;
    }
`;