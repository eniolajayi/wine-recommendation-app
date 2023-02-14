type WineRecommendationParams = {
    wineName: string;
    maxPrice: number;
    minRating: number;
    count: number;
  }
  
  async function getWineRecommendation({wineName, maxPrice, minRating, count}:WineRecommendationParams ){
    let response =  await fetch(`https://api.spoonacular.com/food/wine/recommendation?wine=${wineName}&maxPrice=${maxPrice}&minRating=${minRating}&number=${count}`);
  
    return response.json();
  
  }

export {getWineRecommendation}