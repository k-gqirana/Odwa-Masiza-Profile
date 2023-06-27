AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// Services Functionality

function openPopup(event) {
  event.preventDefault(); // Prevents the default link behavior (navigating to another page)

  var clickedLink = event.target; // The specific <a> tag that triggered the onClick event
  console.log(clickedLink); // Output the clicked <a> tag to the console
  let get = "";
  if (clickedLink.id === "project") {
    get = "pr";
  } else if (clickedLink.id === "business") {
    get = "bs";
  } else {
    get = "db";
  }
  console.log(get);

  var popup = document.getElementById(`${get}`);
  popup.style.display = "block";
}

function Popup(event) {
  event.preventDefault();
  var clickedLink = event.target;
  console.log(clickedLink);
  let get = "";
  if (clickedLink.id === "portfolio") {
    get = "portfolio-analysis";
  } else if (clickedLink.id === "bpowered") {
    get = "bpowered-pilot";
  } else if (clickedLink.id === "EV") {
    get = "EV-Pilot";
  } else if (clickedLink.id === "property") {
    get = "property-services";
  } else if (clickedLink.id === "base") {
    get = "base-network-audit";
  } else if (clickedLink.id === "committee") {
    get = "committee-lead";
  } else if (clickedLink.id === "edu") {
    get = "Eduvos";
  } else {
    get = "diamond-gaming-hub";
  }
  console.log(get);
  var popup = document.getElementById(`${get}`);
  popup.style.display = "block";
}

function popupClose(event) {
  event.preventDefault();
  var clickedLink = event.target;
  let get = "";
  if (clickedLink.id === "close-portfolio-analysis") {
    get = "portfolio-analysis";
  } else if (clickedLink.id === "close-bpowered-pilot") {
    get = "bpowered-pilot";
  } else if (clickedLink.id === "close-EV-Pilot") {
    get = "EV-Pilot";
  } else if (clickedLink.id === "close-property-services") {
    get = "property-services";
  } else if (clickedLink.id === "close-base-network-audi") {
    get = "base-network-audit";
  } else if (clickedLink.id === "close-committee-lead") {
    get = "committee-lead";
  } else if (clickedLink.id === "close-Eduvos") {
    get = "Eduvos";
  } else {
    get = "diamond-gaming-hub";
  }

  var popup = document.getElementById(`${get}`);
  popup.style.display = "none";
}

function closePopup(event) {
  event.preventDefault();
  var clickedLink = event.target;
  let get = "";
  if (clickedLink.id === "close-pr") {
    get = "pr";
  } else if (clickedLink.id === "close-bs") {
    get = "bs";
  } else {
    get = "db";
  }
  console.log(get);
  var popup = document.getElementById(`${get}`);
  popup.style.display = "none";
}

// Optional: Close the pop-up when clicking outside the content

// window.onclick = function (event) {
//   console.log(event);
//   var popup = document.getElementById(`${event.target.id}`);
//   if (event.target == popup || event.target.classList.contains("close-popup")) {
//     popup.style.display = "none";
//   }
// };
