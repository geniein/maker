import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200]

const bp = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const bpw = breakpoints.map(
  bp => `@media (min-width: ${bp}px) {
    width: ${bp};    
  }`
)

export const Wrap = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
`;

export const Thema = styled.div`
${bpw}
`;