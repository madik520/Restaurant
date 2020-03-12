let btnGoinUPLG = document.querySelector('.btn-going-up-lg');
let btnGoinUPSM = document.querySelector('.btn-going-up-sm');
//
function magic() {
  if (window.pageYOffset > 200) {
    btnGoinUPLG.style.opacity = '1';
    btnGoinUPSM.style.opacity = '1';
  } else{ 
    btnGoinUPLG.style.opacity = '0';
    btnGoinUPSM.style.opacity = '0'; 
  }
}
//
btnGoinUPLG.onclick = function () {
	window.scrollTo({ 
        top: 0,
        behavior: "smooth"
    })
}
btnGoinUPSM.onclick = function () {
	window.scrollTo({ 
        top: 0,
        behavior: "smooth"
    })
}

// When scrolling, we run the function
window.onscroll = magic;