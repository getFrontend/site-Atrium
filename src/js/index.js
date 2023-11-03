// import { hello } from "./modules/hello";

import { datePickerCheckIn, datePickerCheckOut } from "./modules/datePicker";
import { mobileNav } from "./modules/mobile-nav";

// console.log(hello);

const init = () => {
  mobileNav();
  datePickerCheckIn();
  datePickerCheckOut();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});
