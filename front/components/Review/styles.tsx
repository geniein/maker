import styled from '@emotion/styled';

export const ReviewWrap = styled.div`    
    width: 60%;
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
    `;

export const Paging = styled.ul`
    width: 100%;
    margin-top: 10px !important;
    list-style: none !important;
    text-align: center !important;
    margin: 0px auto 0px !important;
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