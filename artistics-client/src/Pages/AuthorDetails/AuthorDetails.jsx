import React from "react";
import AuthorProfile from "./AuthorProfile/AuthorProfile";
import TrendingTopics from "../Home/TrendingTopics/TrendingTopics";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";


const AuthorDetails = () => {
  return (
    <div className="background-color">
      <AuthorProfile />
      <TrendingTopics />
      <NewsLetter />
    </div>
  );
};

export default AuthorDetails;
