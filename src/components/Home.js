import React from "react";
import styled from "styled-components";
import UserTypeCard from "./UserTypeCard";

const Container = styled.div`
  display: flex;
  margin: 0 4rem;
  flex-wrap: wrap;
  padding-top: 4rem;
`;

function Home() {
  const users = [
    {
      userType: "men",
      userId: "men",
      userImage:
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2022/3/2/093bc645-d461-4128-94a1-0692803944141646215571321-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--1.jpg",
    },
    {
      userType: "women",
      userId: "women",
      userImage:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
    },
  ];

  return (
    <Container>
      {users?.map((currUser) => (
        <UserTypeCard
          key={currUser?.userId}
          userType={currUser?.userType}
          userImage={currUser?.userImage}
        />
      ))}
    </Container>
  );
}

export default Home;
