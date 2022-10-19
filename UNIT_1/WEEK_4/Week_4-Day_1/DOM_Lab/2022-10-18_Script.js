// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector(`main`)

mainEl.style.backgroundColor = "var(--main-bg)"

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

mainEl.classList.add(`flex-ctr`)

const topMenuEl = document.querySelector(`#top-menu`)

topMenuEl.style.height = `100%`

topMenuEl.style.backgroundColor = `var(--top-menu-bg)`

topMenuEl.classList.add(`flex-around`)

let i = 0
for (let link of menuLinks){
    let href =menuLinks[i].href
    let text =menuLinks[i].text
    link = document.createElement(`a`)
    link.setAttribute(`href`, href)
    link.textContent = text
    topMenuEl.append(link)
    console.log(link)
    i++
}

console.log(menuLinks)

console.log(topMenuEl)

console.log(mainEl)