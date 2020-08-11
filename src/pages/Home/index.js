import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import {LIST_COUNTRY} from '../../services';
import Card from './components/Card';
import { FaSearch } from 'react-icons/fa';
import {List, Title, Header, Input, Line} from './styles';

const Home = () => {
  const [search, setSearch] = useState(false);
  const [countries, setCountries] = useState([]);
  // const {loading,data,error} = useQuery(LIST_COUNTRY,{variables:{name: search.toLowerCase()}});

  const {loading,data,error} = useQuery(LIST_COUNTRY,{
    onCompleted: res => {
      if (res.Country && res.Country.length > 0)
        setCountries(res.Country);    
    }
  });

  function handleSearch(search){
    setSearch(true);

    setCountries(data.Country.filter(country => {
      return country.name.toLowerCase().includes(search.toLowerCase())      
    }))
  }

  if (loading && !data) {
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
                   onChange={e => handleSearch(e.target.value)}></Input>  
          </Line>        
      </Header>

      {countries.length === 0 && search ? (      
        <div>
          <Title>Desculpe, nenhum país encontrado 😅</Title>
        </div>) : (
          <List value={countries}>
            {countries.map(country => (
              <Card key={country._id} country={country}/>
            ))}
          </List>)
        }
    </>
  );
}

export default Home;