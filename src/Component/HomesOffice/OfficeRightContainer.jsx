import React, {} from "react";

const OfficeRightContainer = ({ data, selectPostId }) => {

    const selectPost = data.find(({id}) => id === selectPostId)

    return (
        <div className="officePost">
            {
                selectPost != null ? (
                    <>
                        <div> 제목 : {selectPost.name} </div><br/>
                        <div> 주소 : {selectPost.addr} </div><br/>
                        <div> 거래유형 : {selectPost.type} </div><br/>
                        <div> 사진 : {selectPost.img} </div><br/>
                        <div> 내용 : {selectPost.desc} </div><br/>
                    </>
                ) : (
                    <>
                    <div> 오른쪽 </div> 
                    </>
                )
            }
        </div>
    )
}

export default OfficeRightContainer