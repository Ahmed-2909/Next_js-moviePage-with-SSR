import Image from "next/image";
export const MovieDetail = async ({ params }) => {
    const { id } = params;
    // console.log(params)
    // console.log(id)
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );
    const res = await data.json();
    // console.log(res);

    return (<div>
        <div>
            <h1 className="text-2xl ">{res.title}</h1>
            <h2 className="text-xl">{res.release_date}</h2>
            <h2 >RunTime: {res.runtime} minutes</h2>
            <h2 className="text-sm bg-green-600 inline-block p-2 my-5 rounded-lg">{res.status}</h2>
            <Image
                src={imagePath + res.poster_path}
                width={1000}
                height={1000}
                alt={res.title}
                className="w-full my-12"
            />
            <p>{res.overview}</p>
        </div>
    </div>);
};

export default MovieDetail;