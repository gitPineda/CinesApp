import axios from "axios";

const movieDB=axios.create({
  baseURL:'https://api.themoviedb.org/3/movie',
  params:{
    api_key:'ce03b47b48f33917839c344e655ed980'  ,
    language:'es-ES'    
    
  } 

});

export default movieDB;