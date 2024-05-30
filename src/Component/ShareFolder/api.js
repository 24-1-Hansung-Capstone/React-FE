import axios from "axios";

const URL = "3.34.134.82";
const PORT = 8080;
const BASEURL = `http://${URL}:${PORT}`;

const getSearchResult = (query, service, setResult) => {
  // 영어가 섞여 있는 경우, 한글로 변환
  // let newQuery = inko.en2ko(query);
  let isQueryChanged = false;
  let suggest = query;

  try {
    axios
      .get(`${BASEURL}/${service}?query=${query}`)
      .then((response) => {
        if (service === "search" || service === "satisfaction") {
          isQueryChanged = response.headers.isquerychanged;
          suggest = decodeURIComponent(response.headers.suggestquery);
          console.log(
            `isQueryChanged : ${isQueryChanged}\tsuggest : ${suggest}`
          );
          setResult(response.data, isQueryChanged, suggest);
        } else {
          setResult(response.data);
        }
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
};

const getSummary = (service, data, setResult) => {
  console.log(`보낸 url : ${data}`);
  try {
    axios
      .post(`${BASEURL}/${service}`, data)
      .then((response) => {
        console.log(`getSummaryapi : ${response.data}`);
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

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const OPENAI_API_ORG = process.env.REACT_APP_OPENAI_API_ORG;
const CHATGPT_BASE_URL = "https://api.openai.com/v1/chat/completions";

const getChatAnswer = (query, assi, users, setResult, errorHandle) => {
  // let messages = [
  //   { role: "system", content: "너는 서울의 부동산을 알려주는 찾아줘 홈즈 부동산의 중개업자야. 매우 보수적이라 확실한 것밖에 대답을 하지 못해." },
  //   { role: "assistant", content: assi },
  // ]

  // users.map( user => messages.push({ role : "user", content : user }))
  
  let data = JSON.stringify({
    model: "gpt-4-turbo",
    temperature: 0.5,
    messages: [
      { role: "system", content: "너는 한국의 부동산 중개업자야. 매우 보수적이라 확실한 것밖에 대답을 하지 못해." },
      { role: "assistant", content: "안녕하세요. 홈즈입니다. 저에게 부동산에 대해 물어봐 주세요" },
      { role: "user", content: query },
    ],
    max_tokens: 512,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: CHATGPT_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      Organization: OPENAI_API_ORG,
    },
    data: data,
  };

  try {
    axios
      .request(config)
      .then((response) => {
        let answer = response.data.choices[0].message.content;
        setResult(answer);
      })
      .catch((error) => {
        let status = error.toJSON()["status"];
        let code = error.toJSON()["code"];
        errorHandle(
          `에러가 발생했습니다. 관리자에게 문의해주세요. (CODE ${status})`
        );
        console.log(`error summary : ${status} ${code}\n${error}`);
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
};

const getSentimental = (query, service, setResult) => {
  const data = {
    target: query,
  };
  try {
    axios
      .post(`${BASEURL}/${service}`, data)
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
};

export { getSearchResult, getSummary, getChatAnswer, getSentimental };
