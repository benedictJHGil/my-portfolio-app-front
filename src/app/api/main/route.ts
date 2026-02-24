export async function GET() {
    const BASE_URL = process.env.API_INTERNAL_BASE_URL;

    if (!BASE_URL) {
        return new Response("Missing API url", { status: 500 });
    }

    try {
        const res = await fetch(`${BASE_URL}/api/main/full`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return new Response("Backend error", { status: res.status });
        }

        const data = await res.json();

        return Response.json(data);
    } catch (e) {
        console.error(e);
        return new Response("Main Fetch failed", { status: 500 });
    }
}