import wineCategories from "./wine-categories";

export default function App() {
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
      
      <button className="btn btn-primary w-64 rounded-full">Get Started</button>
    </>
  );
}
