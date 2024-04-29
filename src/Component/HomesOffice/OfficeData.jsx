const officeCategory = Object.freeze({
  ALL: "모두",
  JEONSE: "전세",
  MONTH: "월세",
  SALE: "매매",
  CONFER: "협의",
});

const postData = Object.freeze([
  {
    id: 1,
    type: "전세",
    name: "대충아파트이름1",
    addr: "대충아파트주소1",
    desc: "대충아파트1 대충아파트1 대충아파트1 대충아파트1",
    img: "사진1-1",
  },
  {
    id: 2,
    type: "월세",
    name: "대충아파트이름2",
    addr: "대충아파트주소2",
    desc: "대충아파트2 대충아파트2 대충아파트2 대충아파트2",
    img: "사진2-1",
  },
  {
    id: 3,
    type: "매매",
    name: "대충아파트이름3",
    addr: "대충아파트주소3",
    desc: "대충아파트3 대충아파트3 대충아파트3 대충아파트3",
    img: "사진3-1",
  },
  {
    id: 4,
    type: "협의",
    name: "대충아파트이름4",
    addr: "대충아파트주소4",
    desc: "대충아파트4 대충아파트4 대충아파트4 대충아파트4",
    img: "사진4-1",
  },
]);

export { officeCategory, postData };
