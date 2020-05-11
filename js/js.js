function showblock(id) {
  let x = document.getElementById(id);
  x.style.display = "flex";
}

function hideblock(ifid) {
  if (ifid.classList.contains('bgblock')) {
    ifid.style.display = "none";
  }
  else{

  }
}