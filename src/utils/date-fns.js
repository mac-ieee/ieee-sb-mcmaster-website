import dayjs from "dayjs";

export const formatDateObj = (obj) => {
  if (obj) {
    if (obj.hasOwnProperty("dateTime")) {
      return dayjs(obj.dateTime).format("MMMM D YYYY @ h:mm:ss a");
    } else if (obj.hasOwnProperty("date")) {
      return dayjs(obj.date).format("MMMM D YYYY");
    } else {
      return "";
    }
  }
};
