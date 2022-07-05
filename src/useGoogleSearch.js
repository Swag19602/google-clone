import { useState, useEffect } from "react";
import API_KEY from "./keys";
const CONTEXT_KEY = "54ed99abfbd94339b";
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    // eslint-disable-next-line
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      ).then(response=>response.json())
      .then(result=>{
        setData(result);
      })
    };
    fetchData();
  }, [term]);
  return {data};
};
//term is a data layer variable
export default useGoogleSearch;
