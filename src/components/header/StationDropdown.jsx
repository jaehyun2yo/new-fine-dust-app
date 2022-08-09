import React from "react";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";


export default function StationDropdown({
  stationName,
  showStation,
  setShowStation,
  selectedStation,
  setSelectedSatation,
}) {
 
  return (
    <>
      <StationDropDownContainer>
        {/* 드롭다운 버튼  */}
        <div
          className="dropdown-btn station"
          onClick={(e) => setShowStation(() => !showStation)}
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
      </StationDropDownContainer>
    </>
  );
}
const StationDropDownContainer = styled.div`
  width: 150px;
  margin: 30px auto;
  position: relative;

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
