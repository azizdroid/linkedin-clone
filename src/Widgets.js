import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./widgets.css";
function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleleft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets_articleright">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>{" "}
      </div>
    );
  };

  return (
    <div>
      <div className="widgets">
        <div className="widgets_header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArticle("HEY IAM BACK", "TOP NEWS-98989 readers")}
        {newsArticle("India hits 4LAKH corona cases", "TOP NEWS-98989 readers")}
        {newsArticle("Live news updates", "TOP NEWS-98989 readers")}

        {newsArticle("CoronaVirus:UK updates", "TOP NEWS-98989 readers")}
        {newsArticle("Tesla hits new thighs", "TOP NEWS-98989 readers")}
      </div>
    </div>
  );
}

export default Widgets;
