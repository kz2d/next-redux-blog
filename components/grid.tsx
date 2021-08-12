import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 50px 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
