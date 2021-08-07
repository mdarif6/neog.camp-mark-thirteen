let inputdate = document.querySelector(".inputdate");
let buttondob = document.querySelector(".dob");
let output = document.querySelector(".output");

buttondob.addEventListener("submit", (e) => {
  e.preventDefault();
  let enteredDate = inputdate.value;
  let dob = new Date(enteredDate);
  console.log(dob);
  let year = dob.getFullYear();
  let month = dob.getMonth();
  let dayDate = dob.getDate();

  console.log(year, month, dayDate);

  let concateDate = `${year}${month}${dayDate}`;

  console.log(concateDate);
  let spliting = concateDate.split("");
  let reversing = spliting.reverse();
  let joining = reversing.join("");
  console.log(joining);

  if (inputdate.value === joining) {
    output.textContent = `This is Palindrom ${joining}`;
  } else {
    output.textContent = `Sorry`;
  }
});
