import { useGetWineRecommendation, Wine, WineRecommendationParams } from "./api/wine";
import wineCategories from "./wine-categories";


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

  // TODO Build proper UI and components
  return (
    <>
      <div className="navbar bg-base-100">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Winezill
        </a>
      </div>
      <ul>
        {wineCategories.wines.map((wine, idx) => {
          return <li key={idx} className="">{wine.name}</li>;
        })}
      </ul>
      <div>
        <div>
          {result.map((wine: Wine) => {
            return <div key={wine.id}>
              <img src={wine.imageUrl} alt="" />
              <h2>{wine.title}</h2>
              <p>{wine.description}</p>
              <div>
                <span>{wine.averageRating}</span><span>{wine.ratingCount}</span>
              </div>
              <div>{wine.price}</div>


              <a href={wine.link}>Get</a>
            </div>
          })}
        </div>
      </div>

      <button className="btn btn-primary w-64 rounded-full">Get Started</button>
    </>
  );
}
