import React from "react";

const OfficeListItem = ({post:{id, type, name, addr}, setSelectPostId}) => {
    return(
        <>
            <div>
                <div>type : {type} <br/></div>
                <div onClick={() => {
                    console.log(id)
                    setSelectPostId(id)}}>name : {name} <br/></div>
                <div>addr : {addr} <br/></div>
            </div>
            <br/>
        </>
    )
}

export default OfficeListItem