import { useGetWineRecommendation, Wine, WineRecommendationParams } from "./api/wine";
import wineCategories from "./api/wine-categories";
import ProductCard from "./components/ProductCard";


export default function App() {
  const params: WineRecommendationParams = {
    wine: "merlot",
    maxPrice: 50,
    minRating: 0.7,
    count: 3,
  }
  let result: Wine[] = [];

  const { data, error, isLoading } = useGetWineRecommendation(params);
  if (data) {
    result = data.recommendedWines;
  }

  return (
    <>
      <header>
        <nav className="navbar bg-slate-900 justify-between text-white">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Winezill
          </a>
          <div className="">
            <a href="#" className="ml-4">About</a>
            <button>favorites</button>
          </div>
        </nav>
      </header>
      <main>
        <div className="wrapper">
          <div className="main__content flex flex-col justify-center items-center bg-orange-100 h-80 ">
            <h1 className="text-6xl mb-4 font-bold ">Pick a category</h1>
            <p className="text-xl mb-10">Get excellent wine recommendations based on the category you choose</p>
            <button className="uppercase font-medium bg-slate-900 w-52 px-1 py-3 text-center rounded-lg text-orange-100">Get Started</button>
          </div>
        </div>
      </main>

      {/* <ul>
        {wineCategories.wines.map((wine, idx) => {
          return <li key={idx} className="">{wine.name}</li>;
        })}
      </ul> */}
      <div className="pt-16">
        <div className="grid grid-flow-col auto-cols-max">
          {result.map((wine: Wine) => {
            return <ProductCard wine={wine} />
          })}
        </div>
      </div>
    </>
  );
}
