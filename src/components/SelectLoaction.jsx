import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";

// 드롭다운으로 지역 선택 할수있는 부분

const SelectLoaction = () => {
  return (
    <SelectLocationWarp>
          <select name="서울" id="">
              <option value="">서울 </option>
              <option value="">서울 </option>
              <option value="">서울 </option>
              <option value="">서울 </option>
              <option value="">서울 </option>
              <option value="">서울 </option>
        </select>
          <select name="서울" id="">
              <option value="">불광동</option>
              <option value="">불광동</option>
              <option value="">불광동</option>
              <option value="">불광동</option>
              <option value="">불광동</option>
              <option value="">불광동</option>
        </select>
    </SelectLocationWarp>
  );
};

export default SelectLoaction;

const SelectLocationWarp = styled.div`
display: flex;
justify-content: center;

border: 1px red solid;

  & select {
    display: flex;
    justify-content: center;
    width: 80px;
    height: 25px;
    margin: 30px;
    border: 1px black solid;
  }
`;
