export const trimText = (text="", limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const formatData = (data) => {
  const theDate = new Date(data);
  return theDate.toLocaleDateString("ko", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
