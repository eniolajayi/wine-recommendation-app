import useSWR, { SWRResponse } from "swr";

export type WineRecommendationParams = {
    wine: string;
    maxPrice: number;
    minRating: number;
    count: number;
}

export type Wine = {
    id: number,
    title: string,
    description: string,
    price: string,
    imageUrl: string,
    averageRating: number,
    ratingCount: number,
    score: number,
    link: string
}

export type WineRecommendationData = {
    recommendedWines: Wine[],
    totalFound: number,
}

export type WineRecommendationError = {
    status: string,
    code: number,
    message: string,
}

async function fetcher(url: string) {
    // TODO Remove public api key
    const response = await fetch(url, {
        headers: {
            "x-api-key": import.meta.env.VITE_API_KEY ?? "",
        }
    });
    return response.json();
};

const API_BASE_URL = "https://api.spoonacular.com/";

//{{baseUrl}}/food/wine/recommendation?wine=merlot&maxPrice=50&minRating=0.7&number=3
export const useGetWineRecommendation = ({ wine, maxPrice, minRating, count }: WineRecommendationParams) => {
    // TODO Clean up URL
    const result = useSWR(`https://api.spoonacular.com/food/wine/recommendation?wine=${wine}&maxPrice=${maxPrice}&minRating=${minRating}&number=${count}`,
        (url) => fetcher(url));
    return result as SWRResponse<WineRecommendationData, WineRecommendationError>;
}
