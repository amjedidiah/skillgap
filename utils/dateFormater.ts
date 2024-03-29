const moment = require('moment');
export const DateFormatter = (myDate) => {
    const createdAt = new Date(myDate);
    // Using moment.js for formatting
const formattedDate = moment(createdAt).format('DD MMM, YYYY | hh:mma');
 return formattedDate
}



