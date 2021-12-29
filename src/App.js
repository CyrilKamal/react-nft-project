import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/Punklist";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x54a0f8D53Cd94C9bdc6D871CDEf786Af22DdF0B6&order_direction=asc"
      );
      console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />

      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
