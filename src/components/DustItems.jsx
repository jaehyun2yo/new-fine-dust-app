import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const DustItems = ({ dustData }) => {
  return (
    <>
      {dustData.map(
        (data) =>
          data && (
            <DustInfoCard data={data.pm10Grade}>
              <div className="dustCard" key={data.stationName}>
                <header className="cardHeaderInfo">
                  <span className="stationName">
                    {data.stationName}
                    <span className="sidoName">{data.sidoName}</span>
                  </span>
                  <AiOutlineStar className="off-Favorties" />
                </header>
                <TangledDustWrap data={data.pm10Grade}>
                  <div className="tangledDust">
                    {data.pm10Grade === "1"
                      ? "좋음"
                      : data.pm10Grade === "2"
                      ? "보통"
                      : data.pm10Grade === "3"
                      ? "한때나쁨"
                      : data.pm10Grade === "4"
                      ? "나쁨"
                      : data.pm10Grade === "5"
                      ? "매우나쁨"
                      : "알수없음"}
                  </div>
                </TangledDustWrap>
                <DustInfo>
                  <p>미세먼지 수치 : {data.pm10Value}</p>
                  <p>({data.dataTime} 기준)</p>
                </DustInfo>
              </div>
            </DustInfoCard>
          )
      )}
    </>
  );
};

const DustInfoCard = styled.div`
  height: 215px;
  width: 550px;
  background-color: white;
  margin: 50px 30px;
  padding: 20px;
  border-radius: 8px;
  // 미세먼지에따른 배경색상 변화
  background-color: ${(props) => {
    if (props.data === "1") {
      return "#549ef7";
    } else if (props.data === "2") {
      return "#22c363";
    } else if (props.data === "3") {
      return "#c6cc28";
    } else if (props.data === "4") {
      return "#cf871d";
    } else if (props.data === "5") {
      return "#e14024";
    } else {
      return "#767677";
    }
  }};

  -webkit-box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.17);
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.17);
  /* border: 1px black solid; */

  span {
    color: white;
  }

  span.stationName {
    font-size: 32px;
    margin-right: 10px;
  }

  .cardHeaderInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .sidoName {
      position: absolute;
      font-size: 18px;
      margin-left: 10px;
      top: 13px;
    }
    .off-Favorties {
      font-size: 30px;
      color: white;
      margin-bottom: 10px;
      margin-left: auto;
      cursor: pointer;
    }
  }
`;

// 미세먼지 상태
const TangledDustWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .tangledDust {
    background-color: white;
    font-size: 70px;
    border-radius: 13px;
    padding-top: 7px;
    padding-left: 9px;
    padding-right: 9px;
    color: ${(props) => {
      if (props.data === "1") {
        return "#549ef7";
      } else if (props.data === "2") {
        return "#22c363";
      } else if (props.data === "3") {
        return "#c6cc28";
      } else if (props.data === "4") {
        return "#cf871d";
      } else if (props.data === "5") {
        return "#e14024";
      } else {
        return "#767677";
      }
    }};
  }
`;

const DustInfo = styled.div`
  p {
    color: white;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 0;
    width: 100%;
    font-size: 16px;
  }
  p + p {
    margin-top: 0;
  }
`;

export default DustItems;
