import axios from "axios";

const URL = "localhost";
const PORT = 8080;
const BASEURL = `http://${URL}:${PORT}`;

const getSearchResult = (query, service, setResult) => {
  try {
    axios
      .get(`${BASEURL}/${service}?query=${query}`)
      .then((response) => {
        console.log(`getapi : ${response.data}`);
        // return response.data;
        setResult(response.data);
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
};

export { getSearchResult };
