import React from "react";
import { DustList } from "./components/DustList";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Dropdown from "./components/header/Dropdown";
import { StationProvider } from "./context/stations";

const App = () => {
  const [selectedSido, setSelectedSido] = useState("");
  const [selectedStation, setSelectedSatation] = useState("");

  return (
    <>
      <StationProvider>
        <Dropdown
          selectedSido={selectedSido}
          selectedStation={selectedStation}
          setSelectedSatation={setSelectedSatation}
          setSelectedSido={setSelectedSido}
        ></Dropdown>
        <DustList
          selectedSido={selectedSido}
          selectedStation={selectedStation}
        ></DustList>
        <Footer setSelectedSido={setSelectedSido}></Footer>
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
