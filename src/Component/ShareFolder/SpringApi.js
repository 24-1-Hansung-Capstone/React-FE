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

const sendCommentToServer = (email, comment, postId, setComments, comments) => {
  axios.post(`${BASEURL}/CommunityPage/sendComment`, { writer: email, comment, realtyId : postId })
    .then((response) => {
      const savedComment = response.data;
      console.log("savedComment:",savedComment)
      setComments([...comments, savedComment]);
    })
    .catch((error) => {
      console.error("Error adding comment:", error);
    });
};

const receiveCommentFromServer = (postId, setComments) => {
  axios.get(`${BASEURL}/CommunityPage/receiveComments?realtyId=${postId}`)
    .then((response) => {
      setComments(response.data);
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
    });
};

const deleteCommentFromServer = (commentId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${BASEURL}/CommunityPage/deleteComment?commentId=${commentId}`)
      .then((response) => {
        resolve(response.data); // 삭제된 댓글의 데이터로 resolve
      })
      .catch((error) => {
        console.error("댓글 삭제 오류:", error);
        reject(error); // 에러와 함께 reject
      });
  });
};

const deletePostFromServer = (postId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${BASEURL}/CommunityPage/deletePost?realtyId=${postId}`)
      .then((response) => {
        resolve(response.data); // 삭제된 댓글의 데이터로 resolve
      })
      .catch((error) => {
        console.error("댓글 삭제 오류:", error);
        reject(error); // 에러와 함께 reject
      });
  });
};

export { getSearchResult, sendCommentToServer, receiveCommentFromServer, deleteCommentFromServer, deletePostFromServer };
