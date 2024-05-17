import React, { useEffect, useState } from "react";



const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    const fetchData = async () => {
        const url = 'https://movies-api14.p.rapidapi.com/shows';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '42bc2e971fmshb5a13befb606858p11a193jsncd2eedb9b368',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setMovies(result.movies)
            console.log("movies data is", result.movies);
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        fetchData()
        console.log("use Effect is rendering", movies.length)
    }, [])
    const handleGenre = (selectedGenre) => {
        const filtered = movies.filter((movie) => movie.genres.includes(selectedGenre));
        setMovies(filtered);
        console.log("particulat gener selected", selectedGenre)
        console.log("filtered", filtered)
        console.log("movies isaf", movies)
    };

    return (movies.length == 0 ? "" :
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-secondary p-4 ">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#">
                        Movies
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                            <li className="nav-item m-60" >
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#"


                                    onClick={() => {
                                        const topmovies = movies.filter((element) => element.imdbrating >= 7);
                                        console.log("top movielllkkks", topmovies)
                                        setTopMovies(topmovies);
                                        console.log("topMovies", topMovies)
                                    }
                                    }>
                                    Top  Rated

                                </a> */}
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Genres
                                </a>
                                <ul className="dropdown-menu">

                                    <li>
                                        <a onClick={() => handleGenre("Comedy")} className="dropdown-item" href="#">
                                            Comedy
                                        </a>

                                    </li>
                                    <li>
                                        <a onClick={() => handleGenre("Crime")} className="dropdown-item" href="#">
                                            Crime
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleGenre("Drama")} className="dropdown-item" href="#">
                                            Drama
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <input
                            className="form-control me-2 w-50"
                            type="search"
                            placeholder="Search movie"
                            aria-label="Search"

                        />
                        <button className="btn btn-outline-success" onClick={fetchData} type="submit">
                            Search
                        </button>

                    </div>
                </div>
            </nav>

            <div className="row">
                {movies.map((element) => (
                    <div className="col-md-3 lg-2 d-flex" key={element._id}>
                        <div className="card" style={{ width: "18rem", marginRight: "15px" }}>
                            <img src={element.poster_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MOVIES</h5>
                                <p className="card-text"><b>  genres-{element.genres.join(",")}</b></p>
                                {/* <p className="card-text">
                                    release_date-{element.released}
                                </p>  */}
                                <h4>Title-{element.original_title}</h4>


                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div >
    );




};

export default Movies;


