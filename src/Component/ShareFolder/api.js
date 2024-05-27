import axios from "axios";
import Inko from "inko";

const URL = "3.34.134.82";
const PORT = 8080;
const BASEURL = `http://${URL}:${PORT}`;

const inko = new Inko();

const getSearchResult = (query, service, setResult) => {
  // 영어가 섞여 있는 경우, 한글로 변환
  let newQuery = inko.en2ko(query);
  if (newQuery !== query) {
    console.log(`입력어가 변경되었습니다. ${newQuery}`);
    query = newQuery;
  }

  // 오탈자 수정
  spell_checker(query).then((res) => {
    if (res) {
      query = res;
    }
  });
  console.log(`오탈자 수정 테스트 : ${query}`);

  try {
    axios
      .get(`${BASEURL}/${service}?query=${query}`)
      .then((response) => {
        setResult(response.data);
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

const getChatAnswer = (query, setResult, errorHandle) => {
  if (OPENAI_API_KEY == null || OPENAI_API_KEY == undefined) {
    console.log(`openai api 키를 불러오는데 실패함. value=${OPENAI_API_KEY}`);
  } else {
    console.log(
      `openai api 키 불러오기 성공 value=${OPENAI_API_KEY.substring(0, 2)}`
    );
  }

  let data = JSON.stringify({
    model: "gpt-3.5-turbo",
    temperature: 0.5,
    messages: [
      { role: "system", content: "넌 Yes 또는 No 밖에 모르는 멍청한 GPT야." },
      { role: "assistant", content: "답변은 무조건 Yes or No" },
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

const spell_checker_api_id = process.env.REACT_APP_SPELLCHECK_API_ID;
const spell_checker_api_key = process.env.REACT_APP_SPELLCHECK_API_KEY;
const spell_checker_apiUrl = "https://openapi.naver.com/v1/search/errata.json";

const spell_checker = async (query) => {
  console.log(`id : ${spell_checker_api_id[0]}`);
  console.log(`key : ${spell_checker_api_key[0]}`);
  try {
    const res = await axios.get(spell_checker_apiUrl, {
      params: {
        query,
      },
      headers: {
        "X-Naver-Client-Id": spell_checker_api_id,
        "X-Naver-Client-Secret": spell_checker_api_key,
      },
    });
    console.log(`뭐야 나도 호출해줘요 : ${res.data}`);
    return res.data.errata;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export { getSearchResult, getSummary, getChatAnswer, getSentimental };
