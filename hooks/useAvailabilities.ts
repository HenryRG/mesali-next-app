import { useState } from "react";
import axios from "axios";

export default function useAvailabilities(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState<{time: string, available: boolean}[] | null>(null)

    const fetchAvailabilities = async (
        {slug, day, partySize, time}: {
            slug: string, day: string, partySize: string, time: string
    }) => {
        setLoading(true);

        try {
            const response = await axios.get(`http://localhost:3000/api/restaurant/${slug}/availability`,{
                params: {
                    day, 
                    time, 
                    partySize
                }
            })
            setLoading(false);
            setData(response.data)
        } catch (error: any) {
            setLoading(false);
            setError(error.response.data.errorMessage)
        }
    }
    return {loading, error, data, fetchAvailabilities}
}