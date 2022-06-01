import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import GeneralComponent from "./GeneralComponent";
const UserTypeCard = lazy(() => import("./UserTypeCard"));
const BannerCard = lazy(() => import("./BannerCard"));

const Container = styled.div`
  display: flex;
  margin: 0 2rem;
  flex-wrap: wrap;
  padding-top: 2rem;
`;
const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  justify-content: center;
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

  const bannerData = [
    {
      bannerType: "child",
      bannerId: "child",
      bannerImage:
        "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg",
    },
    {
      bannerType: "beauty",
      bannerId: "beauty",
      bannerImage:
        "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg",
    },
    {
      bannerType: "watches",
      bannerId: "watches",
      bannerImage:
        "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg",
    },
    {
      bannerType: "bath",
      bannerId: "bath",
      bannerImage:
        "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg",
    },
  ];

  return (
    <Suspense fallback={<GeneralComponent val="Loading" />}>
      <Container>
        {users?.map((currUser) => (
          <UserTypeCard
            key={currUser?.userId}
            userType={currUser?.userType}
            userImage={currUser?.userImage}
          />
        ))}
        <BannerContainer>
          {bannerData?.map((currUser) => (
            <BannerCard
              key={currUser?.bannerId}
              bannerType={currUser?.bannerType}
              bannerImage={currUser?.bannerImage}
            />
          ))}
        </BannerContainer>
      </Container>
    </Suspense>
  );
}

export default Home;
