import React, { useState, useEffect } from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({ selectedNft, nftListData }) => {
  const [activeNft, setActiveNft] = useState(nftListData[0]);

  useEffect(() => {
    setActiveNft(nftListData[selectedNft]);
  }, [nftListData, selectedNft]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="nftHighlight">
          <div className="nftContainer">
            <img className="selectedNft" src={activeNft.image_url} alt="" />
          </div>
        </div>
        <div className="nftDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activeNft.name}
            <span className="itemNumber">#{activeNft.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activeNft.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activeNft.owner.address}</div>
                <div className="ownerHandle">@hichembenaoun</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
