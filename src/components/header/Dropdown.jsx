import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import StationContext from "../../context/stations";
import { fetchDust } from "../../services/fetchDust";

// 시도 드롭다운
function SidoDropdown({
  showSido,
  setShowSido,
  selectedSido,
  setSelectedSido,
  setSelectedSatation,
}) {
  // 시이름 배열
  const sidoNameArr = [
    "서울",
    "경기",
    "강원",
    "부산",
    "울산",
    "경남",
    "경북",
    "대전",
    "충북",
    "충남",
    "광주",
    "전북",
    "전남",
    "제주",
    "대구",
    "인천",
    "세종",
  ];
  return (
    <>
      <div className="sido-dropdown">
        {/* 드롭다운 버튼 */}
        <div
          className="dropdown-btn sido"
          onClick={(e) => setShowSido(!showSido)}
        >
          {selectedSido ? selectedSido : `시 / 도`}
          <FaChevronDown />
        </div>

        {/* 드롭다운 메뉴 보여주는 부분  */}
        {showSido && (
          <div className="dropdown-content">
            {sidoNameArr.map((sido) => {
              return (
                <div
                  className="dropdown-item"
                  onClick={(e) => {
                    setSelectedSido(sido);
                    setShowSido(false);
                    setSelectedSatation("동 이름");
                  }}
                >
                  {sido}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

// 동이름 드롭다운
function StationDropdown({
  stationName,
  showStation,
  setShowStation,
  selectedStation,
  setSelectedSatation,
}) {
  return (
    <>
      <div className="station-dropdown">
        {/* 드롭다운 버튼  */}
        <div
          className="dropdown-btn station"
          onClick={(e) => setShowStation(!showStation)}
        >
          {selectedStation ? selectedStation : `동 이름`}
          <FaChevronDown />
        </div>

        {/* 드롭다운 메뉴 보여주는 부분  */}
        {showStation && (
          <div className="dropdown-content">
            {stationName.map((station) => {
              return (
                <div
                  className="dropdown-item"
                  onClick={(e) => {
                    setSelectedSatation(station.stationName);
                    setShowStation(false);
                  }}
                >
                  {station.stationName}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

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

  // 동이름 저장하기위한 데이터
  const [stationName, setStationName] = useState([]);

  // 시도 이름 선택시 동이름 데이터를 추출
  useEffect(() => {
    if (selectedSido) {
      fetchDust(setStationName);
      
    }
  }, [selectedSido]);

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

  .sido-dropdown {
    width: 150px;
    margin: 30px auto;
    position: relative;
  }
  .station-dropdown {
    width: 150px;
    margin: 30px auto;
    position: relative;
  }

  .dropdown-btn {
    padding: 10px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .dropdown-content {
    position: absolute;
    top: 110%;
    padding: 8px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    font-weight: 500;
    color: #333;
    width: 89%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
    height: 400px;
    overflow: auto;

    .dropdown-item {
      padding: 10px;
      cursor: pointer;

      transition: all 0.2s;
    }
    .dropdown-item:hover {
      background: #f4f4f4;
    }
  }
`;
