//import html_utils from './html_utils';

const eMenuHinderances = document.getElementById('menu-hinderances');
const eMenuTraits = document.getElementById('menu-traits');
const eMenuEdges = document.getElementById('menu-edges');
const eMenuPowers = document.getElementById('menu-powers');

function menuClick(item) {
  eMenuHinderances.classList.remove('active');
  eMenuTraits.classList.remove('active');
  eMenuEdges.classList.remove('active');
  eMenuPowers.classList.remove('active');

  if (item==='hinderances') {
    eMenuHinderances.classList.add('active');
  } else if (item==='traits') {
    eMenuTraits.classList.add('active');
  } else if (item==='edges') {
    eMenuEdges.classList.add('active');
  } else if (item==='powers') {
    eMenuPowers.classList.add('active');
  } else {
    console.log('menuClick not understood');
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the
user clicks on the icon */
function topNavFunc() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
