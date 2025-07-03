export default async function users() {
    const res = await fetch("url");
    const users = await res.json();
    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map((user: { id: number; name: string }) => (
                    <li key={user.name}>
                        <h1> {user.name}</h1>
                    </li>
                )

                )}
            </ul>
        </>
    )
}