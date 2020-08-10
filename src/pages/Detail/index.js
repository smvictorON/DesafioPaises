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
import {ApolloProvider, createHttpLink, InMemoryCache, ApolloClient} from '@apollo/client'
import gql from 'graphql-tag';

const Detail = () => {

  const [name,setName] = useState('');
  const [capital,setCapital] = useState('');
  const [area,setArea] = useState('');
  const [population,setPopulation] = useState('');
  const [topLevel,setTopLevel] = useState('');  
  
  const country = { flag: {}, topLevelDomains: {} };
  const { params } = useRouteMatch();

  const { loading, data, error } = useQuery(LIST_COUNTRY, {
    variables: { id: params.id },
  });

  const history = useHistory('/');

  // const httplink = new createHttpLink({uri:'https://countries-274616.ew.r.appspot.com'})
  const cache = new InMemoryCache();
  // const client = new ApolloClient({link:httplink,cache:cache});

  function handleUpdate(){
    cache.modify({
      id: params.id,
      fields:{
        name(name){
          return name;
        },
      },
      broadcast: false
    })

    console.log(name);
    // history.push('/')    

    const nameFrag = gql`
    fragment Update on listCountry {
      name
    }
    `;
  
    const fragmentResult = cache.writeFragment({
      id: params.id,
      fragment: nameFrag,
      data: {
        name: name
      }
    });  

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
          <Image src={data?.Country[0].flag.svgFile}></Image>
        </CardImage>

        <Line>
          <Text>Nome: </Text>
          <Input onChange={e => setName(e.target.value)}
                 value={name} 
                 placeholder={data?.Country[0].name}></Input>
        </Line>

        <Line>
          <Text>Capital: </Text>
          <Input onChange={e => setCapital(e.target.value)} 
                 value={capital} 
                 placeholder={data?.Country[0].capital}></Input>
        </Line>

        <Line>
          <Text>Área: </Text>
          <Input onChange={e => setArea(e.target.value)} 
                 value={area}                  
                 placeholder={data?.Country[0].area}></Input>
        </Line>

        <Line>
          <Text>População: </Text>
          <Input onChange={e => setPopulation(e.target.value)} 
                 value={population} 
                 placeholder={data?.Country[0].population}></Input>
        </Line>

        <Line>
          <Text>Top Level: </Text>
          <Input onChange={e => setTopLevel(e.target.value)} 
                 value={topLevel} 
                 placeholder={data?.Country[0].topLevelDomains[0].name}></Input>
        </Line>

        <Button onClick={handleUpdate}>
          <ButtonText>Alterar</ButtonText> 
          <FaPen></FaPen>
        </Button>
      </Card>
    </>
  );
};

export default Detail;
