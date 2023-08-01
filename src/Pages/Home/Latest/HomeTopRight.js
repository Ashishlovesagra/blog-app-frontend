import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HomeTopRight() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://blog-app-backend-beryl.vercel.app/fitness`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const itemToshow = data.slice(0, 1);
  const showItem = data.slice(1, 4);
  return (
    <>
      <div className="homeTopAdd">
        <span className="toppost-add">Advertistement</span>
      </div>
      <div className="homeTopRight">
        <h1 className="hometopposth1">Top Posts</h1>
        <hr className="homeTopRighthr" />
        <div className="homeTopRightBox">
          {itemToshow.map((item) => (
            <div key={item.id} className="homeTopRight-item-box">
              <div className="homeTopRight-img">
                <Link to={`/article/${item.id}`}>
                  <img
                    src={item.image}
                    className="homeTopRight-inside-img"
                    alt=""
                    width="452px"
                    height="266px"
                  />
                </Link>
              </div>
              <div className="homeTopRight-content">
                <div className="homeTopRight-bolly-name">{item.name}</div>
                <div className="homeTopRight-bolly-date">
                  Time /{item.release}
                </div>
              </div>
            </div>
          ))}
          <hr className="HomeTopRight-hr" />
        </div>
        <div className="homeTopRightBoxlower">
          {showItem.map((item) => (
            <>
              <div key={item.id} className="homeTopRight-item-boxlower">
                <div className="homeTopRight-imglower">
                  <Link to={`/article/${item.id}`}>
                    <img src={item.image} alt="" width="101px" height="104px" />
                  </Link>
                </div>
                <div className="homeTopRight-contentlower">
                  <div className="homeTopRight-bolly-namelower">
                    {item.name}
                  </div>
                  <div className="homeTopRight-bolly-datelower">
                    Time /{item.release}
                  </div>
                </div>
              </div>
              <hr className="HomeTopRight-hr" />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeTopRight;
