import React from "react";
import { useState, useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import StationContext from "../context/stations";

// 드롭다운으로 지역 선택 할수있는 부분

const SelectLoaction = ({ selected, setSelected, stations }) => {
  const { state } = useContext(StationContext);

  

  // 수정필요
  const [isActiveSido, setisActiveSido] = useState(false);
  const [isActiveStation, setisActiveStation] = useState(false);

  const sidoNames = [
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
    <SelectLocationWarp>
      <div className="sido-dropdown">
        <div
          className="dropdown-btn sido"
          onClick={(e) => setisActiveSido(!isActiveSido)}
        >
          {selected.sido ? selected.sido : `시 / 도`}
          <FaChevronDown />
        </div>
        {isActiveSido && (
          <div className="dropdown-content">
            {sidoNames.map((sido) => {
              return (
                <div
                  className="dropdown-item"
                  onClick={(e) => {
                    setSelected({ ...selected, sido: sido });
                    setisActiveSido(false);
                  }}
                >
                  {sido}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="station-dropdown">
        <div
          className="dropdown-btn station"
          onClick={(e) => setisActiveStation(!isActiveStation)}
        >
          {selected.station ? selected.station : `동 이름`}
          <FaChevronDown />
        </div>
        {isActiveStation && (
          <div className="dropdown-content">
            {state.stationName.map((station) => {
              return (
                <div
                  className="dropdown-item"
                  onClick={(e) => {
                    setSelected({ ...selected, station: station });
                    setisActiveStation(false);
                  }}
                >
                  {station}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </SelectLocationWarp>
  );
};

export default SelectLoaction;

// style
const SelectLocationWarp = styled.div`
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
