import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { LIST_COUNTRY, UPDATE_COUNTRY} from '../../services';
import {
  Title,
  Header,
  Card,
  Input,
  Image,
  Button,
  CardImage,
  Text,
  Line
} from './styles';

const Detail = () => {
  const [name,setName] = useState('');
  const [capital,setCapital] = useState('');
  const [area,setArea] = useState(0);
  const [population,setPopulation] = useState(0);
  const [topLevel,setTopLevel] = useState('');  
  
  const country = { flag: {}, topLevelDomains: {} };
  const { params } = useRouteMatch();

  const { loading, data, error } = useQuery(LIST_COUNTRY, {
    variables: { id: params.id },
  });
  
  const [updateCountry] = useMutation(UPDATE_COUNTRY);

  console.log(data);

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
        <Title>Detalhe do País</Title>
      </Header>

      <Card>
        <CardImage>
          <Image src={data?.Country[0].flag.svgFile}></Image>
        </CardImage>

        <Line>
          <Text>Nome: </Text>
          <Input onChangeText={setName} v
                 value={name} 
                 placeholder={data?.Country[0].name}></Input>
        </Line>

        <Line>
          <Text>Capital: </Text>
          <Input onChangeText={setCapital} 
                 value={capital} 
                 placeholder={data?.Country[0].capital}></Input>
        </Line>

        <Line>
          <Text>Área: </Text>
          <Input onChangeText={setArea} 
                //  value={area}                  
                 placeholder={data?.Country[0].area}></Input>
        </Line>

        <Line>
          <Text>População: </Text>
          <Input onChangeText={setPopulation} 
                //  value={population} 
                 placeholder={data?.Country[0].population}></Input>
        </Line>

        <Line>
          <Text>Top Level: </Text>
          <Input onChangeText={setTopLevel} 
                 value={topLevel} 
                 placeholder={data?.Country[0].topLevelDomains[0].name}></Input>
        </Line>

        <Button onClick={updateCountry({ variables: { type: {name} } })}>
          Alterar
        </Button>
      </Card>
    </>
  );
};

export default Detail;
