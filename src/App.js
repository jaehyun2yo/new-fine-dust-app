import React from "react";
import SelectLocation from "./components/SelectLoaction";
import { DustList } from './components/DustList';
import Footer from './components/Footer';





// footer (내지역보기 , 전체시도보기, 즐겨찾기 ) 기능수행

const App = () => {
  return (
    <>
      <SelectLocation></SelectLocation>
      <DustList></DustList>
      <Footer></Footer>
    </>
  );
};

export default App;
