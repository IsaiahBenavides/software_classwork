/* PART A
1. Create a new HTML/CSS/JS replLinks to an external site.Links to an external site. page and complete the following in your .js file
2. Give it a property called stations and make the value an array of station objects
3. Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
4. Song object should have two properties: title and artist
5. Create a currentStation property on your radio object
6. Create a method on your radio object that changes the station. 
7. When the station is changed, pick a song from that station console.log("Now Playing:" + song.title + "by" + song.artist)
*/

const radio = {
  currentStation: 0,
  stations: [
    {
      name: "92.9",
      color: "blue",
      songs: [
        {
          title: "Somebody That I used to know",
          artist: "Gotye"
        },
        {
          title: "You Proof",
          artist: "Morgan Wallen"
        }
      ]
    },
    {
      name: "97.9",
      color: "red",
      songs: [
        {
          title: "Something in the Orange",
          artist: 'Zach Bryan'
        },
        {
          title: 'Glimpse Of Us',
          artist: "Joji"
        }
      ]
    },
    {
      name: "99.7",
      color: "green",
      songs: [
        {
          title: "Running Up That Hill (A Deal With God)",
          artist: 'Kate Bush'
        },
        {
          title: 'Golden Hour',
          artist: "JVKE"
        }
      ]
    },
  ],
  
  changeStation: () => {
    let newStation 

    if (radio.currentStation === radio.stations.length - 1) {
      radio.currentStation = 0
      newStation = radio.stations[radio.currentStation]
    } else {
      radio.currentStation += 1
      newStation = radio.stations[radio.currentStation]
    }
    
    const song = newStation.songs[Math.floor(Math.random() * newStation.songs.length)]

    console.log(`Station: ${newStation.name} | Now Playing: ${song.title} by ${song.artist}`)
    updateDOM(newStation.name, song, newStation.color)
  }
}

// PART B THE DOM
/*
Directions
This morning we will be taking the radio object that you built yesterday and integrate that into the DOM
Setup: 
1. In the same folder as yesterday, make a index.html and style.css file. 
2. Link your CSS and JS to the index.html
Requirements:
1. There must be HTML elements that display the current station and song on the radio.
2. There must be a button and when pressed, will change the station. The elements that display the current station and song should be updated when the button is pressed.
Don't over complicate this. You already have all of the contents in your radio object to display. 
Think about the HTML element you can use and how we can manipulate them once an event occurs.
*/




const radioEl = document.querySelector('.radio')
const stationEl = document.querySelector('.station')
const songEl = document.querySelector(".song")
const changeBtn = document.querySelector("#change")


changeBtn.addEventListener('click', radio.changeStation)



function updateDOM (stationName, songObj, color) {
  stationEl.textContent = stationName
  radioEl.style.backgroundColor = color
  songEl.textContent = `Now Playing: ${songObj.title} by ${songObj.artist}`
}

radio.changeStation()