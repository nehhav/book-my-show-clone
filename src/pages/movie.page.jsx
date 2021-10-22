import MovieHero from "../components/MovieHero/MovieHero.component";
const Movie = () => {
    return (
        <>
            <MovieHero />
            <div className="container mx-auto px-4">
                <h2 className="text-gray-800 font-bold text-2xl">About yhe movie</h2>
                <p>
                    Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent.
                    Meanwhile,Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
                </p>
            </div>
        </>
    )
};

export default Movie;
