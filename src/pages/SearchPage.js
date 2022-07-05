import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./SearchPage.css";
function SearchPage() {
  // eslint-disable-next-line
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/image">Image</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <div className="searchPage__resultCount">
            <p>
              About {data?.searchInformation.formattedTotalResults} results{" "}
              {data?.searchInformation.formattedSearchTime} for {term}
            </p>
            {data?.items.map((item) => (
              <div className="searchPage__result">
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage__resultImage"
                        src={item.pagemap?.cse_image[0]?.src}
                        alt=""
                      />
                    )}

                  {item.displayLink}
                </a>
                <a href={item.link}>{item.displayLink}</a>
                <a href={item.link} className="searchPage__resultTitle">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;

//cse key from https://cse.google.com/cse/create/new
//api from https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
