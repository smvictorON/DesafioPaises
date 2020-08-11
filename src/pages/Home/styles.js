import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  color: #41414d;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Title2 = styled.h1`
  color: #41414d;
  font-family: Arial, Helvetica, sans-serif;
  height: 500px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  list-style: none;  
  height: 500px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  color: #333;
  background-color: #fff;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  margin: 10px;
`;

export const Line = styled.div`
  align-items: center; 
  display: flex;
  flex-direction: row;
`;