import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {LIST_COUNTRY} from '../../services';
import Card from './components/Card';
import { FaSearch } from 'react-icons/fa';
import {List, Title, Header, Input, Line} from './styles';

const Home = () => {
  const {loading,data,error} = useQuery(LIST_COUNTRY);

  const [search, setSearch] = useState('');
  // const [countries, setCountries] = useState(data);

  let countries = data;
  
  // useEffect(() => {
  //   setCountries(data);
  // }, [data]);
  
  // useEffect(() => {
  //   setCountries(
  //     countries.filter(country =>
  //       country.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search, countries]);

  function handleSearch(search){
    setSearch(search)

    countries = data.Country.filter(country => {
      return country.name.toLowerCase().includes(search.toLowerCase())      
    })
    // setCountries(data.Country.filter(country => {
    //   return country.name.toLowerCase().includes(search.toLowerCase())      
    // }))

    console.log(countries.length);
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
        <Title>Conheça todos os Países</Title>
          <Line>
            <FaSearch color={'#dcdce6'}></FaSearch>
            <Input type='search' 
                   placeholder={'Buscar'}
                   onChange={e => handleSearch(e.target.value)}
                   value={search}></Input>  
          </Line>        
      </Header>

      <List value={countries}>
        {countries.Country.map(country => (
          <Card key={country._id} country={country}/>
        ))}
      </List>
      
    </>
  );
}

export default Home;