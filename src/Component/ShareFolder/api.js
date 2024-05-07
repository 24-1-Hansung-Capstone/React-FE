import axios from "axios";
import OpenAI from "openai";

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
      .catch((e) =>
        console.log(`그래 나 에러났다. 그래서 너가 뭘할수 있는데 ㅋㅋ${e}`)
      );
  } catch (e) {
    console.log(`그래 나 에러났다. 그래서 너가 뭘할수 있는데 ㅋㅋ${e}`);
  }
  // return "요약";
};

const OPENAI_API_KEY = "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"; //"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"; //"sk-proj-9iwLRO6asDMedXEoW2yzT3BlbkFJ0dvN8REjEpjV7kFSu40q";
const CHATGPT_BASE_URL = "https://api.openai.com/v1/chat/completions";

const getChatAnswer = (query, setResult) => {
  let data = JSON.stringify({
    model: "gpt-3.5-turbo",
    temperature: 0.5,
    messages: [
      { role: "system", content: "" },
      { role: "user", content: query },
    ],
    max_tokens: 256,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: CHATGPT_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    data: data,
  };

  try {
    axios
      .request(config)
      .then((response) => {
        console.log(response.data[""]);
      })
      .catch((error) => {
        // console.log(`${error.toJSON()["status"]} ${error.toJSON()["code"]}`);
        setResult(`${error.toJSON()["status"]} ${error.toJSON()["code"]}`);
        console.log(`${error.toJSON()["status"]} ${error.toJSON()["code"]}`);
      });
  } catch (e) {
    console.log(e);
  }

  //   setTimeout(() => {
  //     setResult(`query:${query}`);
  // }, 3000); // 3초(3000밀리초) 지연
};

export { getSearchResult, getSummary, getChatAnswer };
