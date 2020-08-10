import React from 'react';
import {useHistory} from 'react-router-dom';
import {Item, Image, Name, Capital} from './styles';

const Card = ({country}) => {
  
  const history = useHistory();

  const navigateToDetail = () =>{
    history.push(`/detail/${country._id}`);
  }
 
  return(
    <Item onClick={navigateToDetail}>
      <Image src={country.flag.svgFile}></Image>
      <Name>
        {country.name}
      </Name>
      <Capital>
        {country.capital}
      </Capital>
    </Item>
  )
}

export default Card;