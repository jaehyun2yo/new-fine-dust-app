import React, { useCallback } from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import StationContext from "../context/stations";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { List } from 'react-virtualized';


// 리스트 카드들을 생성해서 보여주기
export const DustList = ({ selected, StationFind }) => {
  const { state, actions } = useContext(StationContext);
  // const stationName = useContext(stations);
  const [dustData, setDustData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDust = async () => {
    const sidoSelect = selected.sido ? selected.sido : "전국";
    try {
      const getParameters = {
        serviceKey:
          "l0nbWhpAc7sw9na%2FgOkvDeOrTARupcnTfitwtAWSw8KJmxr2ctqYlb4EMTWt5VH9iG4IoBG%2Fxm0gOFXLQKmCIg%3D%3D",
        returnType: "json",
        numOfRows: "100",
        pageNo: "1",
        sidoName: sidoSelect,
        ver: "1.0",
      };

      // 요청 시작시 error와 loading 을 초기화
      setError(null);
      setLoading(null);
      setLoading(true);
      const response = await axios.get(
        `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters["serviceKey"]}&returnType=${getParameters["returnType"]}&numOfRows=${getParameters["numOfRows"]}&pageNo=${getParameters["pageNo"]}&sidoName=${getParameters["sidoName"]}&ver=${getParameters["ver"]}`
      );

      setDustData(response.data["response"]["body"]["items"]);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDust();
    
  }, [selected]);

  if (loading) return <div>로딩중 ...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  // dustData 가 받아와지지 않았다면 null 반환
  if (!dustData) return null;

  if (selected.sido) {
    // findStationList();
  }


  // StationFind();
  // station 값
  // dustData.map((data) => {
  //   return actions.setStations(data.stationName);
  // });

  // api 에서 시도 리스트 뽑기
  // const sidoNameArr = [];
  // dustData.map((data) => {
  //   return sidoNameArr.push(data.sidoName);
  // });
  // const sidoArr = new Set(sidoNameArr);
  // console.log(sidoArr);

  return (
    <>
      <DustListWrap>
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
      </DustListWrap>
    </>
  );
};

// style

const DustListWrap = styled.div`
  // 카드 수평 정렬
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// 별 위치

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
