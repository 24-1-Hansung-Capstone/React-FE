import React, {} from "react";

const OfficeRightContainer = ({ data, selectPostId }) => {

    const selectPost = data.find(({id}) => id == selectPostId)

    return (
        <>
            {
                selectPost != null ? (
                    <>
                        <div> 제목 : {selectPost.name} </div><hr/>
                    </>
                ) : (
                    <>
                    <div> 오른쪽 </div> 
                    </>
                )
            }
        </>
    )
}

export default OfficeRightContainer