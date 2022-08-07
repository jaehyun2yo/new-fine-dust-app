import React from "react";

import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
// import {IoLocationOutline} from "react-icons/io"

const Footer = ({ setSelectedSido }) => {
  return (
    <FooterWrap>
      <div>
        <BsPinMap className="icon" />
        내지역보기
      </div>
      <div onClick={() => setSelectedSido("전국")}>
        <BsMap className="icon" />
        전체 시도보기
      </div>
      <div>
        <AiOutlineStar className="icon star" />
        즐겨 찾기
      </div>
    </FooterWrap>
  );
};

export default Footer;

// style

const FooterWrap = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100px;
  /* border: 3px blue solid; */
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: white;
  -webkit-box-shadow: 0px -20px 48px -20px rgba(61, 48, 61, 0.2);
  -moz-box-shadow: 0px -20px 48px -20px rgba(61, 48, 61, 0.2);
  box-shadow: 0px -20px 48px -20px rgba(61, 48, 61, 0.2);

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 140px;
    height: 70px;
    font-weight: bold;
    color: #333333;
    cursor: pointer;

    .icon {
      margin-right: 5px;
    }
    .star {
      font-size: 22px;
    }
  }
`;
