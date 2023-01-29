import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "react-scroll-up";
import LayoutCars from "layout/layoutCars";
import Car from "components/car";
import LoadingSpinner from "components/loading/loadingSpinner";
import { ReactComponent as ArrowOnTopIcon } from "assets/icons/arrow-top-bold.svg";

import * as S from "./style";

const CarsPage = () => {
  const [items, setItems] = useState(Array.from({ length: 3 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length < 70) {
      setTimeout(() => {
        setItems(items.concat(Array.from({ length: 3 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };

  const testCar2 = {
    id: "123",
    carName: "Koenigsegg",
    carType: "Sedan",
    thumnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    gas: "90L",
    gearType: "Auto",
    dailyPrice: 70,
    salePrice: 56,
    discount: 20,
    people: 4,
    isSale: true,
  };

  return (
    <LayoutCars>
      <S.CarPageContainer>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <S.LoadingContainer>
              <LoadingSpinner color="primary" size="medium" />
            </S.LoadingContainer>
          }
        >
          <S.Content>
            {items.map((item, index) => (
              <Car key={index} {...testCar2} />
            ))}
            <S.NumberOfList>
              <S.NumberTitle>item of list</S.NumberTitle> {items.length} / 70
            </S.NumberOfList>
          </S.Content>
        </InfiniteScroll>
      </S.CarPageContainer>
      <ScrollToTop
        showUnder={200}
        style={{
          transitionDuration: "0.2s",
          transitionTimingFunction: "linear",
          transitionDelay: "0.2s",
        }}
      >
        <S.ScrollTopContainer>
          <ArrowOnTopIcon />
        </S.ScrollTopContainer>
      </ScrollToTop>
    </LayoutCars>
  );
};

export default CarsPage;
