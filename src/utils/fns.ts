import moment from 'moment';

export const formatDateObj = obj => {
  if (obj) {
    if (obj.hasOwnProperty('dateTime')) {
      return moment(obj.dateTime).format('MMMM Do YYYY @ h:mm:ss a');
    } else if (obj.hasOwnProperty('date')) {
      return moment(obj.date).format('MMMM Do YYYY');
    } else {
      return '';
    }
  }
};
