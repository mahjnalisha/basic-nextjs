import { Metadata } from "next";


async function allfriends() {
    const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ name: "alisha" })
    });
    const data = await res.json();
    return { data }
}

// export default async function Friends() {
//     const [messge, setMessage] = useState("");

//     const onClick = async () => {
//         const { data } = await allfriends();
//         setMessage(data.message);
//     }
//     return <h1>All friends {messge} <button onClick={onClick}>Click here</button></h1>

// }


export const metadata: Metadata = {
    title: "Create Next App Friends Page",
    description: "Friends Page",
};


export default async function FriendServerside() {

    const { data } = await allfriends();
    return <h1>All friends {data.message} </h1>

}