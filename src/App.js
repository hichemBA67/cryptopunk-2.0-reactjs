import "./App.css";

import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import NftList from "./components/NftList";
import Main from "./components/Main";

function App() {
  const [nftListData, setNftListData] = useState([]);
  const [selectedNft, setSelectedNft] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x287A1bdc2A2B0DA6903B15621D78EFA26CE779aa&order_direction=asc"
      );
      setNftListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {nftListData.length > 0 && (
        <>
          <Main nftListData={nftListData} selectedNft={selectedNft} />
          <NftList nftListData={nftListData} setSelectedNft={setSelectedNft} />
        </>
      )}
    </div>
  );
}

export default App;
