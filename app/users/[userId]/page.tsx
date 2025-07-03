export default async function userPage({ params }:
    {
        params: Promise<{ userId: string }>;
    }) {
    const { userId } = await params;
    return (
        <>
            <h1>{userId}</h1>

        </>
    )
}