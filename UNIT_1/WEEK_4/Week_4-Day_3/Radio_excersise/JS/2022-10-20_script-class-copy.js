/*
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
    return song
  }
}

const btn = document.querySelector(`button`)
const p = document.querySelector(`p`)
const h3 = document.querySelector(`h3`)

btn.addEventListener(`click`, (evt)=>{
  let newSong = radio.changeStation()
  h3.textContent = `Station: ${radio.stations[radio.currentStation].name}`
  p.innerHTML = `Now playing: <br></br> ${newSong.title} <br></br> By, ${newSong.artist} `
})