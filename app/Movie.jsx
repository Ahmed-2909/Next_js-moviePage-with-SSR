import Link from "next/link";
import Image from "next/image";

const Movie = (props) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.release_date}</h2>
      <Link href={`/${props.id}`}>
        <Image
          src={imagePath + props.poster_path}
          width={800}
          height={800}
          alt={props.title}
        />
      </Link>
    </div>
  );
};

export default Movie;
