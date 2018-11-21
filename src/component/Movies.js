import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import { paginate } from "../utils/paginate";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;

    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return <div className="row mt-4">
        <div className="col-4 col-sm-4 mt-2">
          <ListGroup 
            items={this.state.genres} 
            onItemSelect={this.handleGenreSelect} 
            selectedItem={this.state.selectedGenre} />
        </div>
        <div className="col mt-2">
          <Link to='/movies/new' className='btn btn-primary mb-3'>New Movie</Link>
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesTable 
            movies={movies} 
            onLike={this.handleLike} 
            onDelete={this.handleDelete} 
            onSort={this.handleSort} 
            sortColumn={sortColumn} />

          <Pagination 
            itemsCount={filtered.length} 
            pageSize={pageSize} 
            currentPage={currentPage} 
            onPageChange={this.handlePageChange} />
        </div>
      </div>;
  }
}

export default Movies;
