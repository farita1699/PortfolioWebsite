import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [featuredPortfolio, setFeatured] = useState([]);
  const [webPortfolio, setWeb] = useState([]);
  const [healthPortfolio, setHealth] = useState([]);
  const [mechatronicsPortfolio, setMechatronics] = useState([]);
  const [otherPortfolio, setOther] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "health",
      title: "Health Science Project",
    },
    {
      id: "mechatronics",
      title: "Mechatronics Project",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  useEffect(async () => {
    let response = await fetch("https://jerrywan-api.herokuapp.com/api/featured-projects");
    let data = await response.json();
    setFeatured(data);

    if(selected === "featured") {
      setData(data);
    }

    response = await fetch("https://jerrywan-api.herokuapp.com/api/web-projects");
    data = await response.json();
    setWeb(data);

    response = await fetch("https://jerrywan-api.herokuapp.com/api/health-projects");
    data = await response.json();
    setHealth(data);

    response = await fetch("https://jerrywan-api.herokuapp.com/api/mechatronics-projects");
    data = await response.json();
    setMechatronics(data);

    response = await fetch("https://jerrywan-api.herokuapp.com/api/other-projects");
    data = await response.json();
    setOther(data);

  }, []);


  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "health":
        setData(healthPortfolio);
        break;
      case "mechatronics":
        setData(mechatronicsPortfolio);
        break;
      case "other":
        setData(otherPortfolio);
        break;
      default:
        setData([featuredPortfolio]);
    }
  }, [selected]);


  return (
   <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <Link to={d.link} className="item">
            <img
              src={d.image}
              alt=""
            />
            <h3>{d.title}</h3>
          </Link>
        ))}
      </div>
   </div>
  );
}
