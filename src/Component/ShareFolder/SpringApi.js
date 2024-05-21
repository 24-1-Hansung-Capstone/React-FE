// SpringApi.js
import axios from "axios";

const URL = "3.34.134.82";
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

const sendCommentToServer = (comment, postId, setComments, comments) => {
  axios.get(`${BASEURL}/CommunityPage/sendComment`, { comment, postId })
    .then((response) => {
      setComments([...comments, comment]);
    })
    .catch((error) => {
      console.error("Error adding comment:", error);
    });
};

const receiveCommentFromServer = (postId, setComments) => {
  axios.get(`${BASEURL}/CommunityPage/receiveComments${postId}`)
    .then((response) => {
      setComments(response.data);
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
    });
};

export { getSearchResult, sendCommentToServer, receiveCommentFromServer };
