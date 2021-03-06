import styled from 'styled-components';

export const Item = styled.li`
  background: #FFF;
  padding: 15px;
  border-radius: 8px;
  position: relative;  
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  cursor: pointer;
  max-height: 200px;
`;

export const Image = styled.img`
  height: 80px;
  width: 150px;
`;

export const Name = styled.h2`
  font-size: 20px;
  color: #41414d;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Capital = styled.p`
  color: #737380;
  font-family: Arial, Helvetica, sans-serif;
`;