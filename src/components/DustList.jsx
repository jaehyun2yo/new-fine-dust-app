import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

// 리스트 카드들을 생성해서 보여주기
export const DustList = () => {
  const [dustData, setDustData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDust = async () => {
    try {
      const getParameters = {
        serviceKey:
          "l0nbWhpAc7sw9na%2FgOkvDeOrTARupcnTfitwtAWSw8KJmxr2ctqYlb4EMTWt5VH9iG4IoBG%2Fxm0gOFXLQKmCIg%3D%3D",
        returnType: "json",
        numOfRows: "650",
        pageNo: "1",
        sidoName: "서울",
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
  }, []);

  if (loading) return <div>로딩중 ...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  // dustData 가 받아와지지 않았다면 null 반환
  if (!dustData) return null;

  return (
    <DustListWrap>
      {dustData.map(
        (data) =>
          data && (
            <DustInfoCard data={data.pm10Grade}>
              <div className="dustCard" key={data.stationName}>
                <p>동 이름 : {data.sidoName}</p>
                <p>동 이름 : {data.stationName}</p>

                <p>시간 :{data.dataTime}</p>
                <p>미세먼지 농도 10 :{data.pm10Value}</p>
                <p>미세먼지 1~5 :{data.pm10Grade}</p>
              </div>
            </DustInfoCard>
          )
      )}
    </DustListWrap>
  );
};

// style
const DustListWrap = styled.div`
  border: 2px pink soild;
`;

const DustInfoCard = styled.div`
  background-color: white;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 40px;
  padding: 20px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => {
    if (props.data === "1") {
      return "#4486e4";
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

  & p {
    color: white;
  }
`;
