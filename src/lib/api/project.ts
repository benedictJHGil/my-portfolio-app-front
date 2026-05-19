import { notFound } from "next/navigation"
import { MainPageResponse } from "@/types/api/project"

export async function fetchMain(): Promise<MainPageResponse> {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
    if (!BASE_URL) throw new Error("BASE_URL is not set");

    try {
        const response = await fetch(`${BASE_URL}/api/main/full`, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            console.log(`${response.status} ${response.statusText}`)
            notFound()
        }

        return response.json()
    } catch (error) {
        console.log(error)
        notFound()
    }
}