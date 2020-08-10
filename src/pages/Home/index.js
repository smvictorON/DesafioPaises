import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {LIST_COUNTRY} from '../../services';
import Card from './components/Card';
import { FaSearch } from 'react-icons/fa';
import {List, Title, Header, Input, Line} from './styles';

const Home = () => {
  const {loading,data,error} = useQuery(LIST_COUNTRY);

  const [search, setSearch] = useState('');

  let filteredData = data;
  // const [filteredData, setFilteredData] = useState({});
  
  // useEffect(() => {
  //   handleSearch(search)
  // },[search])
  
  function handleSearch(search){
    setSearch(search)

    // console.log(data.Country);
    filteredData = data.Country.filter(country => {
      return country.name.toLowerCase().includes(search.toLowerCase())      
    })
    // setFilteredData(data.Country.filter(country => {
    //   return country.name.toLowerCase().includes(search.toLowerCase())      
    // }))

    console.log(filteredData.length);

    
    // const { loading, data, error } = this.useQuery(LIST_COUNTRY, {
    //   variables: { name: search },
    // });
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

      {!loading && (
        <List value={filteredData}>
          {filteredData.Country.map(country => (
            <Card key={country._id} country={country}/>
          ))}
        </List>
      )}
    </>
  );
}

export default Home;