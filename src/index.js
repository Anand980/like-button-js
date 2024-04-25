import "./styles.css";

const likebtn = document.getElementById("likebtn");
const likecnt = document.getElementById("count");

likebtn.addEventListener("mouseover", function () {
  likebtn.style.backgroundColor = "yellow";
});
likebtn.addEventListener("mouseout", function () {
  likebtn.style.backgroundColor = "gray";
});

likebtn.addEventListener("click", function () {
  likebtn.style.backgroundColor = "red";
  likecnt.innerText = +likecnt.innerText + 1;
});
