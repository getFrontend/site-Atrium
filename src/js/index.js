// import { hello } from "./modules/hello";

import { datePickerCheckIn, datePickerCheckOut } from "./modules/datePicker";

// console.log(hello);

const init = () => {
  datePickerCheckIn();
  datePickerCheckOut();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});
