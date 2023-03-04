type WineRecommendationParams = {
    wineName: string;
    maxPrice: number;
    minRating: number;
    count: number;
}

async function getWineRecommendation({ wineName, maxPrice, minRating, count }: WineRecommendationParams) {
    let options: RequestInit = {
        method: 'GET',
        headers: {
            "x-api-key": import.meta.env.API_KEY,
        },
        redirect: 'follow',
    };
    try {
        let response = await fetch(`https://api.spoonacular.com/food/wine/recommendation?wine=${wineName}&maxPrice=${maxPrice}&minRating=${minRating}&number=${count}`, options);
        return response.json();
// TODO Set env variable for base url
const BASE_URL = "https://api.spoonacular.com/";

}


export { getWineRecommendation }