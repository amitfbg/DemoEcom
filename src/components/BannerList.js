/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Suspense, useRef } from "react";
import styled from "styled-components";
import GeneralComponent, { Loader } from "./GeneralComponent";
const BannerCard = React.lazy(() => import("./BannerCard"));

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LoaderDiv = styled.div`
  display: ${({ isWholeFetched }) => (isWholeFetched ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BannerList = () => {
  const myRef = useRef(null);
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isWholeFetched, setIsWholeFetched] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsFetching(entry.isIntersecting);
    });
    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      `https://dummyjson.com/products?limit=5&skip=${5 * (page - 1)}`
    );
    const data = await result.json();
    if (data?.products?.length) {
      setPage(page + 1);
      setListItems(() => {
        return [...listItems, ...data.products];
      });
    } else {
      console.log("here");
      setIsWholeFetched(true);
    }
  };

  useEffect(() => {
    if (isFetching) fetchMoreListItems();
  }, [isFetching]);

  const fetchMoreListItems = () => {
    fetchData();
    setIsFetching(false);
  };

  return (
    <>
      <Container>
        <Suspense fallback={<GeneralComponent val="Loading" />}>
          {listItems.map((listItem) => (
            <BannerCard
              bannerImage={listItem.images[0]}
              key={listItem?.id}
              bannerType="men"
            />
          ))}
        </Suspense>
      </Container>
      {!isWholeFetched && (
        <LoaderDiv ref={myRef} isWholeFetched={isWholeFetched} id="loader">
          <Loader />
        </LoaderDiv>
      )}
    </>
  );
};

export default BannerList;
