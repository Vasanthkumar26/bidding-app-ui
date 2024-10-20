export const getDiff = (endingTime) => {
  const currentTime = new Date();
  const endsAt = new Date(endingTime);
  const diffInMs = endsAt - currentTime;
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  return `${diffInHours} Hours ${diffInMinutes} Minutes`;
};
