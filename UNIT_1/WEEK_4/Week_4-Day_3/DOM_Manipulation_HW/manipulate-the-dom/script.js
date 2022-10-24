let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

const newTitleEl = document.querySelector(`#main-title`) //1.0
newTitleEl.textContent = `This is Fast Guy` //1.1

const bodyEl = document.querySelector(`body`) //2.0
bodyEl.style.backgroundColor = `darkgoldenrod` //2.1

const favEl = document.querySelector(`#favorite-things`) //3.0
const lastChildEl = favEl.lastElementChild.remove() //3.1

const specialEl = document.querySelectorAll(`.special-title`) //4.0
specialEl.forEach(function(elem) {
  elem.style.fontSize = `2rem`
});

const raceLocationsEl = document.querySelectorAll(`#past-races>li`) //5.0
// console.log(raceLocationsEl)
raceLocationsEl.forEach(function(li){
  if(li.textContent === `Chicago`){
    li.remove()
    return
  }
})

const raceListEl = document.querySelector(`#past-races`)

const newRaceLocalEl = document.createElement(`li`) //6.0
newRaceLocalEl.textContent = `New York`
// console.log(newRaceLocalEl)
raceListEl.append(newRaceLocalEl)

const mainEl = document.querySelector(`.main`) //7.0
console.log(mainEl)

const newBlog = document.createElement(`div`)
const newBlogHeader = document.createElement(`h1`)
const newBlogText = document.createElement(`p`)

newBlog.classList.add(`blog-post`, `purple`)
newBlogHeader.textContent = newRaceLocalEl.textContent
newBlogText.textContent = `I JUMPED THE EMPIRE-STATE BUILDING`

newBlog.append(newBlogHeader, newBlogText)
mainEl.append(newBlog)

const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};

const quoteEl = document.querySelector(`#quote-title`) //8.0
quoteEl.addEventListener(`click`, ()=>{
  randomQuote()
})

const allPostsEl = document.querySelectorAll(`.blog-post`) //9.0
allPostsEl.forEach(function(blogPost){
  blogPost.addEventListener(`mouseout`, function(){
    //blogPost.classList.toggle(`purple`) is what it asks for however
    blogPost.classList.toggle(`red`) // this is closer to how we assume it wants to function
  })
  blogPost.addEventListener(`mouseenter`, function(){
    blogPost.classList.toggle(`red`)
  })
})
console.log(allPostsEl)