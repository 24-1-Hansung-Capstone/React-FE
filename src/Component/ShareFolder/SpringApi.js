import axios from "axios";

const URL = "localhost";
const PORT = 8080;
const BASEURL = `http://${URL}:${PORT}`;

const getSearchResult = (service, setResult) => {
  try {
    axios
      .get(`${BASEURL}/${service}`)
      .then((response) => {
        console.log(`getapi : ${response.data}`);
        setResult(response.data);
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
};

export { getSearchResult };
