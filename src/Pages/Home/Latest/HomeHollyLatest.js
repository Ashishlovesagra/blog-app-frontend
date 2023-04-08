import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function HomeHollyLatest() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/hollywood`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
    <div className="homeLatest">
        <h1>Food</h1>
        <hr />
        <div className="home-latestBox">
            {data.map((item) => (
                <div key={item.id} className="Latest-item-box">
                    <div className="latest-img">
                    <Link to={`/article/${item.id}`}>
                        <img src={item.image} alt="" width="380px" height="250px"/>
                        </Link>
                    </div>
                    <div className="latest-content">
                        <div className="latest-bolly-name">{item.name}</div>
                        <div className="latest-bolly-detail">{item.content}</div>
                        <div className="latest-bolly-date">{item.release}</div>
                    </div>
                </div>
            )).splice(0,3)}
                
        </div>
        <br />
        <br />

    </div>
    </>
  )
}

export default HomeHollyLatest;
