import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  color: #41414d;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 40px;
`;

export const Card = styled.div`
  background: #fff;
  padding: 18px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 135px;
  width: 245px;
  margin-bottom: 15px;
`;

export const Line = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 3fr;
  align-items: center;
`;

export const Text = styled.label`
  color: #41414d;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e2b029;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
  filter: brightness(90%);
  }
`;

export const Input = styled.input`
  height: 40px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 10px;
  margin: 5px 0
`;

export const ButtonText = styled.label`
  padding-right: 10px;
`;

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  background: #fff;
  border: 0;
  color: #e2b029;
  font-size: 20px;
  transition: filter 0.2s;
  border-radius: 8px;
  padding-top: 5px;

  &:hover {
  filter: brightness(90%);
  }
`;