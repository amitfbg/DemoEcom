import React from "react";
import styled from "styled-components";
import UserTypeCard from "./UserTypeCard";

const Container = styled.div`
  display: flex;
  margin: 0 4rem;
  flex-wrap: wrap;
`;

function Home() {
  const users = [
    { userType: "men", userId: "men", userImage: "" },
    { userType: "women", userId: "women", userImage: "" },
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
