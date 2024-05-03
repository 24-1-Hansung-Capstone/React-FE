import axios from "axios";

const URL = "localhost";
const PORT = 8080;
const BASEURL = `http://${URL}:${PORT}`;

const getSearchResult = (query, service, setResult) => {
  try {
    axios
      .get(`${BASEURL}/${service}?query=${query}`)
      .then((response) => {
        // console.log(`getapi : ${response.data}`);
        // return response.data;
        setResult(response.data);
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
};

const getSummary = (service, setResult) => {
  try {
    axios
      .post(`${BASEURL}/${service}`)
      .then((response) => {
        console.log(`getSummaryapi : ${response.data}`);
        // return response.data;
        setResult(response.data);
      })
      .catch((e) => console.log(`그래 나 에러났다. 그래서 너가 뭘할수 있는데 ㅋㅋ${e}`));
  } catch (e) {
    console.log(`그래 나 에러났다. 그래서 너가 뭘할수 있는데 ㅋㅋ${e}`)
  }
  // return "요약";
};

const getChatAnswer = (query, service, setResult, errorHandle) => {
  try {
    axios
      .post(`${BASEURL}/${service}?question=${query}`)
      .then((response) => {
        console.log(`getChatAnswerApi : ${response.data}`);
        // return response.data;
        setResult(response.data);
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
  //   setTimeout(() => {
  //     setResult(`query:${query}`);
  // }, 3000); // 3초(3000밀리초) 지연
};

export { getSearchResult, getSummary, getChatAnswer };
