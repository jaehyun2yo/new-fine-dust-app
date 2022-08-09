import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchDust } from "../../services/fetchDust";
import StationDropdown from "./StationDropdown";
import SidoDropdown from "./SidoDropdown";

// 드롭다운
const Dropdown = ({
  selectedSido,
  selectedStation,
  setSelectedSatation,
  setSelectedSido,
}) => {
  // 드롭다운 버튼 클릭시 보여주기위한 토글
  const [showSido, setShowSido] = useState(false);
  const [showStation, setShowStation] = useState(false);

  const [stationName, setStationName] = useState([]);

  // 동이름 저장하기위한 데이터
  useEffect(() => {
    if (selectedSido) {
      setStationName(() => []);
      fetchDust(setStationName);
    }
  }, [selectedSido]);

  // 시도 이름 선택시 동이름 데이터를 추출
  // useEffect(() => {
  //   if (selectedSido) {
  //     fetchDust(setStationName);
  //   }
  //   console.log("dropdown");
  // }, [selectedSido]);

  return (
    <DropdownWarp>
      <SidoDropdown
        showSido={showSido}
        setShowSido={setShowSido}
        selectedSido={selectedSido}
        setSelectedSido={setSelectedSido}
        setSelectedSatation={setSelectedSatation}
      />
      <StationDropdown
        stationName={stationName}
        showStation={showStation}
        setShowStation={setShowStation}
        selectedStation={selectedStation}
        setSelectedSatation={setSelectedSatation}
      />
    </DropdownWarp>
  );
};

export default Dropdown;

// style
const DropdownWarp = styled.div`
  display: flex;
  justify-content: center;
`;
