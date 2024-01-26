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
const notFound = document.querySelector("#notFound")
var filmInf = document.querySelector("#filmInf")

var v = inp.value

var komekci = true;



btn.addEventListener("click", function () {
    filmInf.style.display = "flex"

    if (inp.value === "" || inp.value === " ") {
        komekci = false;
    }
    else {
        komekci = true;
    }

    searchMovie(inp.value)
    inp.value = ""

})
window.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        filmInf.style.display = "flex"

        if (inp.value === "" || inp.value === " ") {
            komekci = false;
        }
        else {
            komekci = true;
        }

        searchMovie(inp.value)
        inp.value = ""

    }
})



function searchMovie(api) {
    if (komekci) {
        notFound.style.display = "none"
        var apiw = fetch(`https://www.omdbapi.com/?apikey=trilogy&t=${api}`)

        apiw.then(function (apiw) {
            return apiw.json()
        }).then(function (info) {

            if (info.Title == undefined) {
                filmInf.style.display = "none"
                notFound.style.display = "block"
            }
            else {
                poster.src = info.Poster
                title.innerHTML = info.Title
                plot.innerHTML = `About movie : ${info.Plot}`
                year.innerHTML = `Year : ${info.Year}`
                director.innerHTML = `Director : ${info.Director}`
                writer.innerHTML = `Writer : ${info.Writer}`
                actors.innerHTML = `Actors : ${info.Actors}`
                rating.innerHTML = `IMdB: ${info.imdbRating}`
            }

        })
    }
    else {
        filmInf.style.display = "none"
        alert("Please write movie name")
    }

}



