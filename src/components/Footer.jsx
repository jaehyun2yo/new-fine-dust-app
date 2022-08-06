import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
// import {IoLocationOutline} from "react-icons/io"


const Footer = () => {
  return (
    <FooterWrap>
      <label htmlFor="">
        <BsPinMap className="location" />
        <a href="">내지역보기</a>
      </label>
      <label htmlFor="">
        <BsMap className="map" />
        <a href="">전체 시도보기</a>
      </label>
      <label htmlFor="">
        <AiOutlineStar className="star" />
        <a href="">즐겨 찾기</a>
      </label>
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
  -webkit-box-shadow: 0px -20px 48px -20px rgba(61, 48, 61, 0.20);
  -moz-box-shadow: 0px -20px 48px -20px rgba(61, 48, 61, 0.20);
  box-shadow: 0px -20px 48px -20px rgba(61, 48, 61, 0.20);

  & label {
    width: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .location {
      font-size: 20px;
    }
    .map {
      font-size: 20px;
    }
    .star {
      font-size: 23px;
    }

    a {
      margin-top: 5px;
      font-size: 14px;
      text-decoration: none;
      color: #333333;
    }
  }
`;
