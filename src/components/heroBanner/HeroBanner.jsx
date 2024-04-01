import { useState } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Img from "../heroImg/Img";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [backgroundImg, setBackgroundImg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, isPending } = useFetch(`/movie/upcoming`);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackgroundImg(bg);
  }, [data]);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="heroBanner">
      {!isPending && (
        <div className="backdrop-img">
          <Img src={backgroundImg} />
        </div>
      )}
      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Moviez.</span>
            <span className="subTitle">Find your favorite movie</span>
            <div className="searchInput">
              <input
                onKeyDown={handleSearch}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search for a movie"
                className="searchInput"
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
