import React from "react";
import "./NftList.css";
import CollectionCard from "./CollectionCard";

const NftList = ({ nftListData }) => {
  return (
    <div className="nftList">
      {nftListData.map((nft) => (
        <div>
          <CollectionCard
            key={nft.token_id}
            id={nft.token_id}
            name={nft.name}
            traits={nft.traits}
            image={nft.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default NftList;
