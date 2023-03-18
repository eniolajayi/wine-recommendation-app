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
        <nav className="navbar bg-slate-900 text-white">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Winezill
          </a>
        <a href="#">About</a>
        </nav>
      </header>
      <main>
        <div className="wrapper">
          <div className="main__content flex flex-col justify-center bg-orange-100 h-80 ">
            <h1 className="text-6xl mb-8 mx-auto font-bold ">Pick a category</h1>
            <p className="text-xl mx-auto">Get excellent wine recommendations based on the category you choose</p>
          </div>
        </div>
      </main>

      <ul>
        {wineCategories.wines.map((wine, idx) => {
          return <li key={idx} className="">{wine.name}</li>;
        })}
      </ul>
      <div>
        <div>
          {result.map((wine: Wine) => {
            return <ProductCard wine={wine}/>
          })}
        </div>
      </div>

      <button className="btn btn-primary w-64 rounded-full">Get Started</button>
    </>
  );
}
