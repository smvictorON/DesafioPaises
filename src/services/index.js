import gql from 'graphql-tag';

export const LIST_COUNTRY = gql`
query listCountry($id:String){
  Country (_id:$id){
    name
    _id
    capital
    area
    population
    topLevelDomains {
      name
    }
    flag {
      svgFile
    }
  }
}
`;



