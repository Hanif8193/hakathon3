
import { createClient } from "next-sanity";

const client = createClient({
    projectId: "16fzsyg2",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10",
});

export async function sanityfetch({
    query,
    params = {},
}: {
    query: string;
    params?: Record<string, object>;
}) {
    return await client.fetch(query, params);
}
