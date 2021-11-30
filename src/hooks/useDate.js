const useDate = () => {
  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) {
    date = `${day}-0${month}-${year}`;
  } else {
    date = `${day}-${month}-${year}`;
  }
  return date;
};

export default useDate;
