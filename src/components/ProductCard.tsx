import React from "react";
import { Wine } from "../api/wine";

type ProductCardProps = {
    wine: Wine,
}

// TODO Decouple wine from product card
export default function ProductCard({ wine }: ProductCardProps) {


    return <div key={wine.id} className="max-w-sm bg-slate-100 px-3 py-4 m-4 rounded-lg">
        <figure className="w-full h-52 mb-6 overflow-y-hidden">
            <img className="mx-auto" src={wine.imageUrl} alt="" />
        </figure>
        <div className="mt-6 px-4">
            <div className="flex mb-4 items-center justify-between">
                <h2 className="text-lg">{wine.title}</h2>
                <div className="bg-orange-100 text-lg font-mono px-2 py-1 rounded-lg">{wine.price}</div>
            </div>
            <div className="mb-4">
                <span>{wine.averageRating}</span><span>{wine.ratingCount}</span>
            </div>

            <div className="flex items-center">
                <AddToFavoritesBtn />
                <a className="capitalize font-medium bg-slate-900 w-full px-1 py-3 text-center rounded-lg text-white"
                    href={wine.link}>Go to shop</a>
            </div>
        </div>
    </div>
}


const getTruncatedText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) : text;
}

function AddToFavoritesBtn() {
    return <button className="text-xl p-3 mx-2 hover:text-red-200 transition-colors ease-in-out hover:bg-red-400 bg-slate-200 rounded-lg">
        <FavoriteIcon />
    </button>
}


const FavoriteIcon = React.forwardRef((forwardedRef) => (
    <svg width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.352 4.905a3.547 3.547 0 0 1 3.541-3.553c1.365 0 1.968.571 2.607 1.583c.64-1.012 1.242-1.583 2.607-1.583a3.547 3.547 0 0 1 3.54 3.553c0 1.835-1.046 3.6-2.246 5.064c-1.137 1.387-2.48 2.582-3.395 3.397l-.173.155a.5.5 0 0 1-.666 0l-.173-.155c-.916-.815-2.258-2.01-3.395-3.397C2.4 8.505 1.352 6.74 1.352 4.905Z" clipRule="evenodd"></path></svg>
));