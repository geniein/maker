import styled from '@emotion/styled';

export const ReviewWrap = styled.div`    
    width: 80%;
    margin: 0 auto;

    h2{
        margin-top: 20px;
        text-align: left;
        font-size: 12px;
        font-weight: 600;
    }
`;

export const TableWrap = styled.table`
    width: 100%;
    margin: 15px auto;
    border-collapse: collapse;
    
    tbody{
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    tr{
        border-top: 1px solid #ccc;
    }
    th{
        padding: 15px 0px;
        font-size: 11px;
        font-weight: 600;
        color: #626262;
    }
    td{
        text-align: center;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 15px 0px;
        font-size: 11px;
        color: #434343;
        cursor: pointer;
    }
    .review_row{
        cursor: pointer;
    }
    .review_row:hover{
        background-color: #FFF0F5;
    }
    .review_content{
        background: #eee;
        padding: 20px;
        textAlign: left;
    }        
    `;

export const Paging = styled.ul`
    width: 100%;        
    list-style: none !important;
    text-align: center !important;
    margin: 10px auto !important;
    display: inline-block;

    li {
        display: inline-block;
        width: 20px !important;
        height: 20px !important;
        text-align: center !important;
        line-height: 20px !important;
    }
`;

export const ReviewComent = styled.div`
    background: #eee;
    padding: 20px;
    text-align: left;
`;

export const ReviewListWarp = styled.div``;