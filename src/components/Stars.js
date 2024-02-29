"use client";

import { Rating } from "react-simple-star-rating";

const Stars = ({ starCount }) => {
  return (
    <>
      <Rating
        className="stars"
        initialValue={starCount}
        fillColor="#FFB80F"
        size={18}
        iconsCount={5}
        readonly
      />
    </>
  );
};

export default Stars;
