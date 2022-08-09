import React from "react";
import { useState, useEffect } from "react";
import { fetchDust } from "../services/fetchDust";
import styled from "styled-components";
import DustItems from "./DustItems";

// 리스트 카드들을 생성해서 보여주기
export const DustList = ({
  selectedSido,
  selectedStation,
 
}) => {
  // const { state, actions } = useContext(StationContext);

 
  const [dustData, setDustData] = useState([]);

  // 시/도 , 동이름 선택시 리랜더링
  useEffect(() => {
    fetchDust(setDustData, selectedSido);
  }, [selectedSido, selectedStation]);


  return (
    <>
      <DustListWrap>
        <DustItems dustData={dustData} />
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
export default DustList;
