import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HomeTechLatest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://blog-app-backend-beryl.vercel.app/technology`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const itemToshow = data.slice(0, 3);
  return (
    <>
      <div className="homeLatest Bolly-home-mainBox latestTechnology-mainBox">
        <h1>Latest Technology</h1>
        <hr />
        <div className="home-latestBox">
          {itemToshow.map((item) => (
            <div key={item.id} className="Latest-item-box">
              <div className="latest-img">
                <Link to={`/article/${item.id}`}>
                  <img
                    src={item.image}
                    className="inside-latestTechnology-img"
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
            </div>
          ))}
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default HomeTechLatest;
