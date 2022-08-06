import React from "react";
import { DustList } from "./components/DustList";
import Footer from "./components/Footer";
import { useState } from "react";
import SelectLoaction from "./components/SelectLoaction";
import { StationProvider } from "./context/stations";

// footer (내지역보기 , 전체시도보기, 즐겨찾기 ) 기능수행

const App = () => {
  const [selected, setSelected] = useState({
    sido: "",
    station: "",
  });
  const [stations, setStations] = useState([]);

   const StationFind = (dustData) => {
     dustData.map((data) => {
       return setStations(stations.concat(data.stationName));
     });
   };

  console.log(`station 가 가지고있는값: ${stations}`);
  return (
    <>
      <StationProvider>
        <SelectLoaction
          selected={selected}
          setSelected={setSelected}
          station={stations}
        ></SelectLoaction>
        <DustList
          StationFind={StationFind}
          selected={selected}
        ></DustList>
        <Footer></Footer>
      </StationProvider>
    </>
  );
};

export default App;

// const GlobalStyle = createGlobalStyle`
//   *, *::before, *::after {
//     margin: 0;
//     padding: 0;
//     font-family: sans-serif;

//   }
// `;
