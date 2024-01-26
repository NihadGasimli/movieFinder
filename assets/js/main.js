const inp = document.querySelector("#inp")
const poster = document.querySelector("#poster")
const title = document.querySelector("#title")
const plot = document.querySelector("#plot")
const year = document.querySelector("#year")
const director = document.querySelector("#director")
const writer = document.querySelector("#writer")
const actors = document.querySelector("#actors")
const rating = document.querySelector("#rating")
const btn = document.querySelector("#btn")
var filmInf = document.querySelector("#filmInf")

btn.addEventListener("click", function () {
    var v = inp.value
    if (inp.value != "") {
        searchMovie(v);
        inp.value = ""
        filmInf.style.display = "flex"
        // if (title.innerHTML = "undefined") {
        //     alert("We don't have this film's information in database, please write correct film name")
        // } else {

        // }
    }
    else {
        alert("Please write film name")
    }
})
window.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        var v = inp.value
        if (inp.value != "") {
            searchMovie(v);
            inp.value = ""
            filmInf.style.display = "flex"
            // if (title.innerHTML = "undefined") {
            //     alert("We don't have this film's information in database, please write correct film name")
            // } else {

            // }
        }
        else {
            alert("Please write film name")
        }
    }
})



function searchMovie(api) {
    var apiw = fetch(`https://www.omdbapi.com/?apikey=trilogy&t=${api}`)

    apiw.then(function (apiw) {
        return apiw.json()
    }).then(function (info) {
        poster.src = info.Poster
        title.innerHTML = info.Title
        plot.innerHTML = `About movie : ${info.Plot}`
        year.innerHTML = `Year : ${info.Year}`
        director.innerHTML = `Director : ${info.Director}`
        writer.innerHTML = `Writer : ${info.Writer}`
        actors.innerHTML = `Actors : ${info.Actors}`
        rating.innerHTML = `IMdB: ${info.imdbRating}`
    })
}