import { Wine } from "../api/wine";

type ProductCardProps = {
    wine: Wine,
}
export default function ProductCard({wine}: ProductCardProps){
    return <div key={wine.id} className="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img src={wine.imageUrl} alt="" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{wine.title}</h2>
      <p>{wine.description}</p>
      <div>
        <span>{wine.averageRating}</span><span>{wine.ratingCount}</span>
      </div>
      <div>{wine.price}</div>
      <div className="card-actions justify-end">
        <a className="btn btn-primary" href={wine.link}>Get</a>
      </div>
    </div>
  </div>
}