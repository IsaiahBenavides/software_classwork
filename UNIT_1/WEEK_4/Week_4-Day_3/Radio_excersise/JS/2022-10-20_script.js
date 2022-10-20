const stations = [
    {name: `x`, songs:[{title: `a`, artist: `b`},{title: `c`, artist: `d`},{title: `e`, artist: `f`}]},
    {name: `x`, songs:[{title: `g`, artist: `h`},{title: `i`, artist: `j`},{title: `k`, artist: `l`}]},
    {name: `x`, songs:[{title: `m`, artist: `n`},{title: `o`, artist: `p`},{title: `q`, artist: `r`}]},
]


const radio = function(currentStation) {
    let currentSong = Math.floor(Math.random()*3)
    stations[currentStation] = console.log("Now Playing:" + stations[currentStation].songs[currentSong].title + " by " + stations[currentStation].songs[currentSong].artist)
}

radio(0)