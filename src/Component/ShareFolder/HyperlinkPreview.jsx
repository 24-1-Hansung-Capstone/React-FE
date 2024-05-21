// src/Components/ShareFolder/HyperlinkPreview.jsx
import React from "react";
import { Link,  } from "react-router-dom";
import style from "./Style/HyperlinkPreviewStyle"
import { Button } from "@mui/material"
import { getSummary } from "./api";

export default function HyperlinkPreview({ title, itemPreview, url, isVisitKoreaItem, setSummary, isClickable}) {
  let target = "_blank"

  if(url == null){
    url = "/MapPage"
    target = "_self"
  }

  return (
    <div style={style.item}>
      <Link to={url} target={target} state={{ search: title }}>
        <h1 style={style.title}>{title}</h1>
      </Link>
      <p style={style.preview}>
        {isVisitKoreaItem ? itemPreview : itemPreview + "..."}
        <Button 
          variant="outlined" 
          onClick={() => { 
            console.log("어 형이야");
            setSummary()
          }}
          disabled={!isClickable}
        >요약하기</Button>
      </p>
    </div>
  );
}
