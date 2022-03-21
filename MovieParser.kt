package com.lharo.youtubeplayer
import android.content.res.Resources

class MovieModel {
    var title: String = ""
    var year: Int = 0
    var plot: String = ""
    var director: String = ""
}
class MovieParser {
    val movies = ArrayList<MovieModel>()
    val titles: Array<String> = Resources.getSystem().getStringArray(R.array.title)
    val years: Array<String> = Resources.getSystem().getStringArray(R.array.year)
    val plots: Array<String> = Resources.getSystem().getStringArray(R.array.plot)
    val directors: Array<String> = Resources.getSystem().getStringArray(R.array.director)

    fun parseMovies() {
        for((i, element) in titles.withIndex()){
            val movie = MovieModel()
            movie.title = element
            movie.year = years[i].toInt()
            movie.plot = plots[i]
            movie.director = directors[i]
            movies.add(movie)
        }
    }
}