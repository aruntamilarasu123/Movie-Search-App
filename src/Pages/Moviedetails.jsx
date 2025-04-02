import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router";

function Moviedetails() {
    const { imdbID } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `http://www.omdbapi.com/?i=${imdbID}&apikey=35e2c71e`
                );
                const result = await response.json();
                if (result.Response === "True") {
                    setMovieDetails(result);
                } else {
                    console.error("Error fetching movie details:", result.Error);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovieDetails();
    }, [imdbID]);

    if (loading) return <div className="text-[#CCFF00]">Loading...</div>;

    if (!movieDetails) return <div className="text-[#CCFF00]">No details available for this movie.</div>;

    return (
        <div className="movie-details text-[#ffffff] px-20 py-8 relative max-md:px-0">
            <div  className="movie-detail-img max-md:flex max-md:justify-center">
                <img src={movieDetails.Poster} alt={movieDetails.Title} />
            </div>
            <div className="poppins-regular flex flex-col gap-4">
                <h2><strong className="poppins-bold text-xl">Movie Name:</strong> {movieDetails.Title} ({movieDetails.Year})</h2>
                <p><strong className="poppins-bold text-xl">Consept:</strong> {movieDetails.Plot}</p>
                <p><strong className="poppins-bold text-xl">Director:</strong> {movieDetails.Director}</p>
                <p><strong className="poppins-bold text-xl">Cast:</strong> {movieDetails.Actors}</p>
                <p><strong className="poppins-bold text-xl">Genre:</strong> {movieDetails.Genre}</p>
                <p><strong className="poppins-bold text-xl">Rating:</strong> {movieDetails.imdbRating}</p>
            </div>
            <Link className="sign-btn absolute right-8 bottom-8 text-black poppins-bold" to="/Movies">
            Back To Home 
            </Link>
        </div>
    )
}
export default Moviedetails