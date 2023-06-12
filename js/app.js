const menuRight = document.getElementById("cbp-spmenu-s2"),
  body = document.body;

showRight.onclick = function () {
  classie.toggle(this, "active");
  classie.toggle(menuRight, "cbp-spmenu-open");
};
