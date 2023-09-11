function toggle() {
  var btn = document.getElementById("btn");
  btn.style.display = 
  (btn.style.display === "none" || btn.style.display === "") ? "block" : "none";
}

function showTab(tabIndex) {

  var tabs = document.querySelectorAll(".tab");
  for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
  }
  tabs[tabIndex].style.display = "block";
}
showTab(0);


// counter

function updateCounter() {
  const vernabilityTitles = document.querySelectorAll('.vernability_title');
  const counterElement = document.getElementById('counter');
  counterElement.textContent = `${vernabilityTitles.length}`;
}

// Initial call to update the counter when the page loads
updateCounter();