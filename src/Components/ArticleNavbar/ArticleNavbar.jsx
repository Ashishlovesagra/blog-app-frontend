import React from "react";
import "./Style.css";

function ArticleNavbar() {
  function goBack() {
    window.history.back();
  }

  return (
    <>
      <div className="article-navbar">
        <div className="article-navbar-title">
          <div className="article-nav-the">The</div>
          <div className="article-nav-siren">Siren</div>
        </div>
        <div className="article-navbar-btn">
          <button onClick={goBack}>Back</button>
        </div>
      </div>
    </>
  );
}

export default ArticleNavbar;