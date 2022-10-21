// Task 3.0
// Copy the following data structure to the top of script.js:
//Task 5.0
// Update the menuLinks array in script.js to this:
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// Task 1.0
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector(`main`);

// Task 1.1
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3
// Add a class of flex-ctr to mainEl.
mainEl.classList.add(`flex-ctr`);

// Task 2.0
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector(`#top-menu`);

// Task 2.1
// Set the height topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// Task 2.3
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`);

// Task 3.1
let i = 0;
// Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks){
    let href =menuLinks[i].href;
    let text =menuLinks[i].text;
    // Create an <a> element.
    link = document.createElement(`a`);
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    link.setAttribute(`href`, href);
    // Set the new element's content to the value of the text property of the "link" object.
    link.textContent = text;
    // Append the new element to the topMenuEl element.
    topMenuEl.append(link);
    i++;
};

// Task 4.0
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector(`#sub-menu`);

// Task 4.1
// Set the height subMenuEl element to be 100%.
subMenuEl.style.height = `100%`;

// Task 4.2
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// Task 4.3
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add(`flex-around`);

// Task 4.4
// Set the CSS positionproperty of subMenuEl to the value of absolute.
subMenuEl.style.position = `absolute`;

// Task 4.5
// Set the CSS topproperty of subMenuEl to the value of 0.
subMenuEl.style.top = `0`;

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks. 
const topMenuLinks = topMenuEl.querySelectorAll(`a`);
// Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
let abc = [];
let text1;

topMenuEl.addEventListener(`click`, (evt) => {

// The first line of code of the event listener function should call the event object's preventDefault() method.
    evt.preventDefault()

// The second line of code function should immediately return if the element clicked was not an <a> element.
if (evt.target.tagName !== `A`){
    return
  }
  // console.log the content of the <a> to verify the handler is working.
//   else {
//     console.log(evt.target.innerHTML)
//   }

// Task 5.3
// Next in the event listener, if the clicked <a> link has a class of active:
if (evt.className ===`active`){

    // Remove the active class from the clicked <a> element.
    evt.classList.remove(`active`)

// Set the showingSubMenu to false.
    showingSubMenu = false

// Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = `0`

// return to exit the handler.
    return
  }

// Task 5.4
// Next, the event listener should remove a class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
topMenuLinks.forEach((arg) => {
    arg.classList.remove('active');
    console.log(arg);
  })

// Task 5.5
// Next, the event listener should add a class name of active to the <a> element that was clicked.
evt.target.classList.add(`active`)

let linkObj = menuLinks.find(function(menuLinksObj){
    return menuLinksObj.text === evt.target.textContent;
});
console.log(linkObj)

// buildSubMenu function
function buildSubMenu(linkObj) {
    subMenuEl.innerHTML = "";
    // console.log(subMenuEl);
    linkObj.subLinks.forEach(function(currentLink) {
      let link = document.createElement("a");
      link.setAttribute("href", currentLink.href);
      link.textContent = currentLink.text;
      subMenuEl.append(link);
    });

    subMenuEl.addEventListener("click", function(evt2) {
      evt2.preventDefault();

      if(evt2.target.matches("a") ) {
        console.log(evt2.target)
      } else {
        return;
      }

      showingSubMenu = false;
      subMenuEl.style.top = "0";

      let aLinksAgain = document.querySelectorAll("#top-menu > a");
      aLinksAgain.forEach(function(elem) {
          elem.classList.remove("active");
      });

      mainEl.innerHTML = `<h1>${evt2.target.textContent}</h1>`;

    },{once : true});
  }

// Task 5.6
// Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.

if(evt.target.getAttribute(`href`)===`#`){
    showingSubMenu = true;
    buildSubMenu(linkObj)
    subMenuEl.style.top = `100%`
}else {
    showingSubMenu = false;
    subMenuEl.style.top = `0%`
}


// for (let i = 0; i < menuLinks.length; i++) {
//     console.log('menuLinks')

//     console.log(menuLinks[i])
//     //console.log(menuLinks[i].subLinks)

//     console.log(menuLinks[i].hasOwnProperty('subLinks'))


//     showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
//     if (menuLinks[i].hasOwnProperty('subLinks')) {

//       console.log(menuLinks[i].subLinks)
//     }

//   }

// for (let i = 0; i < menuLinks.length; i++){
//     if('subLinks' in menuLinks[i]){
//       abc.push(menuLinks[i].text)
//     }
    
//     text1 = evt.target.innerHTML;
//     showingSubMenu = false
//     for(let i=0; i<abc.length; i++){
//       if(text1===abc[i]){
//         showingSubMenu = true
//       } 
//     }

//   }
//   console.log("showingSubMenu is " + showingSubMenu + " for " + text1)

// Task 5.7
// Next in the event listener...
// If showingSubMenu is true:
// Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.


// Set the CSS topproperty of subMenuEl to 100%.


// Otherwise (showingSubMenu is false):


// Set the CSS top property of subMenuEl to 0.

//Task 5.8
// Code the buildSubMenu function so that it:
// Clears the contents of subMenuEl.


// Iterates over the subLinks array passed as an argument; and for each "link" object:

// Create an <a> element.

// On the new element, add an href attribute with its value set to the hrefproperty of the "link" object.

// Set the new element's content to the value of the text property of the "link" object.

// Append the new element to the subMenuElelement.



})



