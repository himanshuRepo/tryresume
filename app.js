const	date_id = document.getElementById("date");
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function main() {

var today = new Date();
var date = monthNames[today.getMonth()]+'/'+today.getDate()+'/'+today.getFullYear();
date_id.innerHTML = date;
// date_id.innerHTML = today;
}

main();