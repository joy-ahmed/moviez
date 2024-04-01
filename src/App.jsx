import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { fetchDataFromApi } from "./utils/apiCall";
import HomePage from "./pages/home/Home";
import ExplorePage from "./pages/explore/ExplorePage";
import SearchResultPage from "./pages/searchResult/SearchResult";
import MovideDetails from "./pages/movieDetails/MovideDetails";
import PageNotFound from "./pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispath = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispath(getApiConfiguration(url));
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore/:mediaType" element={<ExplorePage />} />
        <Route path="/search/:query" element={<SearchResultPage />} />
        <Route path="/:mediaType/:id" element={<MovideDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
