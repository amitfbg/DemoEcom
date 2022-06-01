import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sizeChart } from "../__mockData__/mockData";

const SizeContainer = styled.div`
  margin: 10px 0 24px;
`;
const SizeHeader = styled.div`
  margin: 0 0 10px;
`;
const SizeOptions = styled.div`
  display: flex;
  margin: 0 0 10px;
`;

const Size = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  min-width: 40px;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 50px;
  border: 1px solid #bfc0c6;
  color: #282c3f;
  cursor: pointer;
  margin-right: 4px;
  &:hover {
    border: 1px solid #ff3f6c;
    color: #ff3f6c;
  }
`;

function SizeChart({ type }) {
  const [sizeOptions, setSizeOptions] = useState([]);
  console.log("ty", type);
  useEffect(() => {
    if (["men", "women"].includes(type)) {
      setSizeOptions(sizeChart["adult"]);
    } else if (type == "child") {
      setSizeOptions(sizeChart["kid"]);
    } else {
      setSizeOptions(sizeChart["free"]);
    }
  }, [type]);

  return (
    <SizeContainer>
      <SizeHeader>Select Size</SizeHeader>
      <SizeOptions>
        {sizeOptions?.map(({ id, type }) => (
          <Size key={id}>{type}</Size>
        ))}
      </SizeOptions>
    </SizeContainer>
  );
}

export default SizeChart;
