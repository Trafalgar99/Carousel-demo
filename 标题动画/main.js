const div = document.querySelector("div");
[...div.textContent].reduce(function (pre, cur, index) {
  pre === index && (div.innerHTML = "");
  let span = document.createElement("span");
  span.innerHTML = cur;
  div.appendChild(span);
  span.addEventListener("mouseover", function () {
    this.classList.add("color");
  });
  span.addEventListener("animationend", function () {
    this.classList.remove("color");
  });
}, 0);
