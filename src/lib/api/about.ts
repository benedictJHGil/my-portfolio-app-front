import { notFound } from "next/navigation"
import { AboutPageResponse } from "@/types/api/about"

export async function fetchAbout(): Promise<AboutPageResponse> {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
    if (!BASE_URL) throw new Error("BASE_URL is not set")

    try {
        const response = await fetch(`${BASE_URL}/api/about/full`, {
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