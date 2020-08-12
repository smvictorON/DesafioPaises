import React, { useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FaArrowLeft, FaPen } from 'react-icons/fa';
import { LIST_COUNTRY} from '../../services';
import {
  Title,
  Header,
  Card,
  Input,
  Image,
  Button,
  CardImage,
  Text,
  Line,
  ButtonText,
  BackButton
} from './styles';
import {useApolloClient} from '@apollo/client'

const Detail = () => {

  const [country, setCountry] = useState({
    name: '',
    capital: '',
    area: '',
    population: '',
    topLevelDomains: [
      {
        name: ''
      }
    ]
  });

  const client = useApolloClient();
  const { params } = useRouteMatch();

  const { loading, data } = useQuery(LIST_COUNTRY, {
    variables: { id: params.id },
    onCompleted: res => {
      if (res && res.Country) {
        setCountry({
          ...res.Country[0]
        })
      }
    }
  });

  const history = useHistory('/');

  const handleUpdate = () => {
    const countries = client.readQuery({
      query: LIST_COUNTRY
    });

    client.writeQuery({
      query: LIST_COUNTRY,
      data: {
        Country: countries.Country.map(item => {
          if (params.id === item._id) {
            return {
              ...item,
              ...country
            }
          }

          return item;
        })
      }
    })

    backPage();
  }

  function backPage(){
    history.push('/')
  }

  if (loading) {
    return(
      <div>
        <Title>Carregando...</Title>
      </div>
    )
  }

  const handleChange = (e) => {
    setCountry({
      ...country,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeTLD = (e) => {
    setCountry({
      ...country,
      topLevelDomains: [
        {
          name: e.target.value
        }
      ]
    })
  }
 
  function isBlank(str) {
    return (!str || /^\s*$/.test(str));
  }

  function check(){
    try {
      const res = client.readQuery({query: LIST_COUNTRY});
      return (res && res.Country && res.Country.length > 0);
    } catch {
      return false;
    }
  }

  if (isBlank(params.id) || isBlank(country.name)) { 
    return(
      <Title>Desculpe, nenhum país encontrado <span role="img" aria-label="decepcionado">😅</span></Title>
    )
  }

  return (
    <>
      <Header>
        <BackButton onClick={backPage}>
          <FaArrowLeft></FaArrowLeft>
        </BackButton>
        
        <Title>Detalhe do País</Title>
      </Header>

      <Card>
        <CardImage>
          <Image src={data.Country[0].flag.svgFile}></Image>
        </CardImage>

        <Line>
          <Text>Nome: </Text>
          <Input name="name" onChange={handleChange} disabled={!check()}
            value={country.name}></Input>
        </Line>

        <Line>
          <Text>Capital: </Text>
          <Input name="capital" onChange={handleChange} disabled={!check()} 
            value={country.capital}></Input>
        </Line>

        <Line>
          <Text>Área: </Text>
          <Input name="area" onChange={handleChange} disabled={!check()} 
            value={country.area}></Input>
        </Line>

        <Line>
          <Text>População: </Text>
          <Input name="population" onChange={handleChange} disabled={!check()} 
            value={country.population}></Input>
        </Line>

        <Line>
          <Text>Top Level: </Text>
          <Input name="topLevel" onChange={handleChangeTLD} disabled={!check()}
            value={country.topLevelDomains[0].name}></Input>
        </Line>

        <Button onClick={handleUpdate} disabled={!check()}>
          <ButtonText>Alterar</ButtonText> 
          <FaPen></FaPen>
        </Button>
      </Card>
    </>
  );
};

export default Detail;
