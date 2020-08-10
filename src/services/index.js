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

// mutation updateCountry($id:String,$name:String,$capital:String,$area:String,$population:String,$topleveldomain:String){
//   Country(id:String,name:String,capital:String,area:String,population:String,topleveldomain:String){

export const UPDATE_COUNTRY = gql`
mutation UpdateCountry($id: String!, $name:String!){
  updateContry(id: String, name:String){
    id,
    name, 
  }
}
`;

