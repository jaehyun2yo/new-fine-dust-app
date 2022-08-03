import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";


const Footer = () => {
  return (
    <FooterWrap>
      <label htmlFor="">
        <a href="">내지역보기</a>
      </label>
      <label htmlFor="">
        <a href="">전체 시도보기</a>
      </label>
      <label htmlFor="">
        <a href="">즐겨 찾기</a>
      </label>
    </FooterWrap>
  );
};

export default Footer;

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
  background-color: #93b9e5;

  & label {
    width: 100px;
    
    & a {
        text-decoration: none;
        color: white;
    }

  }
`;
