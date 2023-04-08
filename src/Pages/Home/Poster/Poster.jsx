import React from 'react';
import './Style.css';

function Poster() {
  return (
    <div>
      <div className="poster-main">
        <div className="posterleft">
            {/* <article className="firstPosterTitle">Manali Himachal Pradesh</article>
            <article className="firstPosterDate">Travel/ November 2022</article> */}
        </div>
        <div className="posterright">
            <div className="topPoster">
                {/* <article className="topPosterTitle">Nainital Uttarakhand</article>
                <article className="topPosterDate">Travel/ September 2022</article> */}
            </div>
            <div className="bottomPoster">
                {/* <article className="bottomPostTitle">Auli Uttarakhand</article>
                <article className="bottomPostDate">Travel/ January 2023</article> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Poster;
