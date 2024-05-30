import React from "react";
import { Link } from "react-router-dom";
import style from "./Style/HyperlinkPreviewStyle";
import summaryButton from "../../Asset/summary.png";

export default function HyperlinkPreview({ title, itemPreview, url, isVisitKoreaItem, setSummary, isClickable, isNews }) {
  let target = "_blank";

  if (url == null) {
    url = "/MapPage";
    target = "_self";
  }

  return (
    <div style={style.item}>
      <Link to={url} target={target} state={{ search: title }}>
        <h1 style={style.title}>{title}</h1>
      </Link>
      <p style={style.preview}>
        <span dangerouslySetInnerHTML={{ __html: isVisitKoreaItem ? itemPreview : itemPreview + "..." }}></span>
        {isNews && (
          <img
            src={summaryButton}
            alt="summary button"
            onClick={() => {
              setSummary();
            }}
            style={{
              cursor: isClickable ? 'pointer' : 'not-allowed',
              opacity: isClickable ? 1 : 0.5,
              width: '45px',
              height: '45px',
              float: 'right', // 오른쪽 정렬
              marginRight: '10px', // 오른쪽 여백
              marginTop: "-10px",
            }}
          />
        )}
      </p>
    </div>
  );
}
