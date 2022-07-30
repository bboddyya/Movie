export const getRatingColor = (rating) => {
  if (rating > 7) {
    return `#269613`;
  }
  return "#5e5e5c";
};

export const getAwaitRatingColor = (rating) => {
  const number = Number(rating.substring(0, rating.length - 1));

  if (number > 85) {
    return `#269613`;
  }
  return "#5e5e5c";
};
