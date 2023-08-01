import "./style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HomeLatest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://blog-app-backend-beryl.vercel.app/bollywood`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="homeLatest">
        <h1 className="lastesth1bolly">Latest Bollywood</h1>
        <hr />
        <div className="home-latestBox">
          {data
            .map((item) => (
              <>
                <div key={item.id} className="Latest-item-box">
                  <div className="latest-img">
                    <Link to={`/article/${item.id}`}>
                      <img
                        className="inside-latest-img"
                        src={item.image}
                        alt=""
                        width="380px"
                        height="250px"
                      />
                    </Link>
                  </div>
                  <div className="latest-content">
                    <div className="latest-bolly-name">{item.name}</div>
                    <div className="latest-bolly-detail">{item.content}</div>
                    <div className="latest-bolly-date">{item.release}</div>
                  </div>
                  <div className="blankSpace"></div>
                </div>
              </>
            ))
            .splice(0, 3)}
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default HomeLatest;
