import React , {Component} from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    this.state={}
    //console.log("this is")
    //https://api.themoviedb.org/3/search/movie?query=marvel&api_key=1b5adf76a72a13bad99b8fc0c68cb085
    //this.state = {rows: [
      //<p key="1">This is my name</p>,
      //<p key="2">This is my name</p>]}

      //const movies = [
      //{id: 0,poster_src: "https://images.spot.im/v1/production/kiyx7mqy5owcqs2mofmi", title: "Avengers: Infinity War", Overview: "As the Avengers and thie end game"},
      //{id: 1,poster_src: "https://images.spot.im/v1/production/kiyx7mqy5owcqs2mofmi",title: "Avengers", Overview: "As the Avengers and thie end game"}
    //]

    //var movieRows = []
    //movies.forEach((movie) => {
      //console.log(movie.title)
      //movieRows.push(<p key={movie.id}>{movie.title}</p>)
      //const movieRow = <MovieRow movie={movie}/>
      //const movieRow = <table key={movie.id}>
        //<tbody>
          //<tr>
            //<td>
              //<img alt="poster" width="200" src={movie.poster_src}/>
            //</td>
            //<td>
              //{movie.title}
              //<p>{movie.Overview}</p>
            //</td>
          //</tr>
        //</tbody>
        //</table>
        //movieRows.push(movieRow)
    //})

    //this.state = {rows: movieRows}

    this.performSearch("antman")
  }

  performSearch(searchTerm){
    console.log("Perform Search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="+searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        //console.log(searchResults)
        const results =searchResults.results
        //console.log(results[0])

        var movieRows=[]
        results.forEach((movie)=> {
          movie.poster_src="https://image.tmdb.org/t/p/w185"+ movie.poster_path
          console.log(movie.title)
          const movieRow= <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })


        this.setState({rows: movieRows})
      },
      error: (xhr, status, err)=> {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject =this
    const searchTerm=event.target.value
    boundObject.performSearch(searchTerm)

  }
  render(){
  return (
    <div>

      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width="50" src="favicon.ico"/>
            </td>
            <td width="8"/>
            <td>
              <h1>MoviesDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <input style={{
        fontSize: 24,
        width: "99%",
        display: 'block',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search term"/>

      {this.state.rows}
    </div>
  );
}
}
export default App;
