/*  =======================================================
//  TASKS 1
=======================================================  */
let mainEl = document.querySelector(`main`);                            //1.0
mainEl.style.backgroundColor = `var(--main-bg)`;                        //1.1
mainEl.innerHTML = `<h1>SEI Rocks!</h1>`;                               //1.2
mainEl.classList.add(`flex-ctr`);                                       //1.3

/*  =======================================================
//  TASKS 2
=======================================================  */
let topMenuEl = document.querySelector(`#top-menu`);                    //2.0
topMenuEl.style.height = `100%`;                                        //2.1
topMenuEl.style.backgroundColor=`var(--top-menu-bg)`;                   //2.2
topMenuEl.classList.add(`flex-around`);                                 //2.3

/*  =======================================================
//  TASKS 3
=======================================================  */

//  Menu data structure                                                 //5.0
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

let aEl;
for(let count = 0; count < menuLinks.length; count++) {                 //3.0
    aEl =document.createElement(`a`);                                   //3.1 <a></a>
    aEl.setAttribute(`href`, menuLinks[count].href);                    //3.2 <a href></a>
    aEl.textContent = menuLinks[count].text;                            //3.3 <a href=`/about`></a>
    topMenuEl.append(aEl);                                              //3.4 <a href=`about`>about</a>
}

/*  =======================================================
//  TASKS 4
=======================================================  */
let subMenuEl = document.getElementById("sub-menu");                    //4.0
subMenuEl.style.height = "100%";                                        //4.1
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";                 //4.2
subMenuEl.classList.add("flex-around");                                 //4.3
subMenuEl.style.position = "absolute";                                  //4.4
subMenuEl.style.top = "0";                                              //4.5

/*  =======================================================
//  TASKS 5 AND 6
=======================================================  */

let topMenuLinks = topMenuEl.querySelectorAll(`a`);                     //5.1a

let showingSubMenu = false;                                             //5.1b

function handleClick(evt) {                                             //5.2b
    evt.preventDefault();                                               //5.2c
    let clickedLink = evt.target;
    if(clickedLink.tagName !== `A`){                                    //5.2d
        return
    } else {
        console.log(clickedLink)                                        //5.2e
        if(clickedLink.classList.contains(`active`)){                   //5.3a
            clickedLink.classList.remove(`active`);                     //5.3b
            showingSubMenu = false;                                     //5.3c
            subMenuEl.style.top = `0`;                                  //5.3d
            return                                                      //5.3e
        }
        topMenuLinks.forEach(function(aLink) {                          //5.4
            aLink.classList.remove(`active`);
        });
        clickedLink.classList.add(`active`);                            //5.5
        
        let linkObj = menuLinks.find(function(aLinkObj) {             //5.6 HINT
            return aLinkObj.text === clickedLink.textContent;
        });
        console.log(linkObj)
        function buildSubMenu(linkObject){                              //5.7a2
            subMenuEl.innerHTML = ``;                                   //5.8a
            linkObject.subLinks.forEach(function(subLinkObj) {          //5.8b1
                let link = document.createElement(`a`);                 //5.8b2
                link.setAttribute(`href`, subLinkObj.href);             //5.8b3
                link.textContent = subLinkObj.text;                     //5.8b4
                subMenuEl.append(link);                                 //5.8b5
            });
            subMenuEl.addEventListener(`click`, function(subLinkEvt){   //6.0a
                subLinkEvt.preventDefault();                            //6.0b
                subMenuClickedLink = subLinkEvt.target
                if(subMenuClickedLink.tagName !== `A`){
                    return                                              //6.0c
                } else {
                    console.log(subMenuClickedLink);                    //6.0d
                    showingSubMenu = false;                             //6.1a
                    subMenuEl.style.top = `0`;                          //6.1b
                    topMenuLinks.forEach(function(aLink) {              //6.2
                        aLink.classList.remove(`active`);
                    });
                    
                }
            })
        }
        if(clickedLink.getAttribute(`href`)===`#`){                     //5.6
            showingSubMenu = true;
            console.log(showingSubMenu);
            buildSubMenu(linkObj);                                      //5.7a1
            subMenuEl.style.top = `100%`;                               //5.7b
        }else{
            showingSubMenu = false;
            console.log(showingSubMenu);
            subMenuEl.style.top = `0%`;                                 //5.7c
        };
        
    }
    mainEl.innerHTML = `<h1>${clickedLink.textContent}</h1>`; //6.3
}

topMenuEl.addEventListener(`click`, handleClick);                       //5.2


