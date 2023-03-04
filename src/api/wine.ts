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

//{{baseUrl}}/food/wine/recommendation?wine=merlot&maxPrice=50&minRating=0.7&number=3
export const useGetWineRecommendation = ({ wine, maxPrice, minRating, count }: WineRecommendationParams) => {
    // TODO Clean up URL
    const result = useSWR(`https://api.spoonacular.com/food/wine/recommendation?wine=${wine}&maxPrice=${maxPrice}&minRating=${minRating}&number=${count}`,
        (url) => fetcher(url));
    return result as SWRResponse<WineRecommendationData, WineRecommendationError>;
}
