function getDateXDaysAfter(days) {
  const addDays = require("date-fns/addDays");
  console.log(addDays(new Date(22, 6, 2020), days));
}

const days = x;
getDateXDaysAfter(days);
