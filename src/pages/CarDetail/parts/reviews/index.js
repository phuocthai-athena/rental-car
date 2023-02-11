import React, { useEffect, useState } from "react";
import { pluralize } from "utils/commons";
import Review from "./review";
import { ReactComponent as ShowAll } from "assets/icons/arrow-down.svg";
import { ReactComponent as ShowLess } from "assets/icons/arrow-up.svg";

import * as S from "./style";

const commentList = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    reviewer_name: "Alex Stanton",
    reviewer_job: "CEO at Bukalapak",
    review_date: "21 July 2022",
    review_rating: 4,
    review_desc:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    reviewer_name: "Skylar Dias",
    reviewer_job: "CEO at Amazon",
    review_date: "20 July 2022",
    review_rating: 4,
    review_desc:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    reviewer_name: "Alex Stanton",
    reviewer_job: "CEO at Bukalapak",
    review_date: "21 July 2022",
    review_rating: 4,
    review_desc:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    reviewer_name: "Skylar Dias",
    reviewer_job: "CEO at Amazon",
    review_date: "20 July 2022",
    review_rating: 4,
    review_desc:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    reviewer_name: "Alex Stanton",
    reviewer_job: "CEO at Bukalapak",
    review_date: "21 July 2022",
    review_rating: 4,
    review_desc:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    reviewer_name: "Skylar Dias",
    reviewer_job: "CEO at Amazon",
    review_date: "20 July 2022",
    review_rating: 4,
    review_desc:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    reviewer_name: "Alex Stanton",
    reviewer_job: "CEO at Bukalapak",
    review_date: "21 July 2022",
    review_rating: 4,
    review_desc:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    reviewer_name: "Skylar Dias",
    reviewer_job: "CEO at Amazon",
    review_date: "20 July 2022",
    review_rating: 4,
    review_desc:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    reviewer_name: "Alex Stanton",
    reviewer_job: "CEO at Bukalapak",
    review_date: "21 July 2022",
    review_rating: 4,
    review_desc:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    reviewer_name: "Skylar Dias",
    reviewer_job: "CEO at Amazon",
    review_date: "20 July 2022",
    review_rating: 4,
    review_desc:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    reviewer_name: "Alex Stanton",
    reviewer_job: "CEO at Bukalapak",
    review_date: "21 July 2022",
    review_rating: 4,
    review_desc:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    reviewer_name: "Skylar Dias",
    reviewer_job: "CEO at Amazon",
    review_date: "20 July 2022",
    review_rating: 4,
    review_desc:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    reviewer_name: "Alex Stanton",
    reviewer_job: "CEO at Bukalapak",
    review_date: "21 July 2022",
    review_rating: 4,
    review_desc:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
];

const Reviews = () => {
  const [switchButton, setSwitchButton] = useState(false);
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    if (commentList && commentList.length > 2 && !switchButton) {
      setCurrentList(commentList.slice(0, 2));
    } else {
      setCurrentList(commentList);
    }
  }, [switchButton]);

  const handleSwitchButton = () => {
    setSwitchButton(!switchButton);
  };

  return (
    <S.ReviewContainer>
      <S.ReviewHeaderContainer>
        <S.ReviewHeader>
          {pluralize("Review", commentList.length)}
        </S.ReviewHeader>
        <S.ReviewTotal>
          <S.Number>
            {commentList.length < 10
              ? "0" + commentList.length
              : commentList.length}
          </S.Number>
        </S.ReviewTotal>
      </S.ReviewHeaderContainer>
      <S.ReviewBody style={{ maxHeight: switchButton ? "100%" : "340px" }}>
        {currentList.map((item, index) => {
          return <Review key={index} commentInfor={item} />;
        })}
        {commentList.length > 2 && (
          <S.ButtonWrapper>
            <S.ButtonContainer onClick={() => handleSwitchButton()}>
              <S.ButtonText>
                {switchButton ? "Show Less" : "Show All"}
              </S.ButtonText>
              <S.ButtonIcon>
                {switchButton ? <ShowLess /> : <ShowAll />}
              </S.ButtonIcon>
            </S.ButtonContainer>
          </S.ButtonWrapper>
        )}
      </S.ReviewBody>
    </S.ReviewContainer>
  );
};

export default Reviews;
