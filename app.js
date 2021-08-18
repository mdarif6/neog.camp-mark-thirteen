let inputdate = document.querySelector(".inputdate");
let buttondob = document.querySelector(".dob");
let output = document.querySelector(".output");

buttondob.addEventListener("submit", (e) => {
  e.preventDefault();
  let enteredDate = inputdate.value;
  let dob = new Date(enteredDate);
  console.log(typeof dob);
  let year = String(dob.getFullYear());
  console.log(typeof year);
  let month = String(dob.getMonth() + 1).padStart(2, "0");
  let dayDate = String(dob.getDate()).padStart(2, "0");

  console.log(year, month, dayDate);

  let concateDate = `${year}${month}${dayDate}`;

  console.log(concateDate);
  let spliting = concateDate.split("");
  let reversing = spliting.reverse();
  let joining = reversing.join("");
  console.log(joining);

  if (concateDate === joining) {
    output.textContent = `Yay! Your birtday is Palindrom ${joining}`;
  } else {
    output.textContent = `oops! this date is not Palindrome`;
  }
});
