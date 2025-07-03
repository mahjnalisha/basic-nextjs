This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Next js is file based routing 
Create first next.js app for begineers
Create folder
Run npx create-next-app
typescript >yes
eslink >yes
tailiwnd >> yes
src > no
app router >> yes
turbopack ?? yes
import alias >> no


All the routers are in app folders
App folder basic concept


globals.css is the main css
tailwind css so needed to add @import "tailwindcss"
layout.tsc  is the actual component of the page
build the actual html document of the application and insert the different components of next react applications
children depends on the route. All the componenets are rendered inside the children. It depends on which page you are in. It is initially in the main page.
"localhost://3000".
every change you keep in the main layout will display in all the pages


define fonts
and also the title and meta data
improve the seo by server side rendering and adding the metadata for the page

page.tsx
is the main route
component >> home

name also doesnot matter as it basically work on file based component

for example create the folder name  >> about   and create the fileanme page.tsx
New route is creating the new folder and create the file name page.tsx

and create the react component like 
export default function About(){
    return (
        '<div>About Page</div>'
    )
}
each of them is renndered in the main page layout called  "children"

if the navbar is to be displayed in the every page then go to the layout.tsx and added the element before the children and will display in the every page

For the next js html 
a link is displayed as  <Link href ="#">
image link is displayed as  <Image src="#">
image in next js does the lazy loading so the webpage reloads extremely fast
when you are using the image component the url source cannot be kept directly to the source tag in image link as it has the hostname so it requires the setting of the hostname in the next.config.ts like below

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "uplaod.wikimedia.org" }
    ]
  }
};



all the public images like favicon are inside the public folder

Important topic of next.js
creating the component in react were originally by class component but it is now worked on component called functional component

the new type of component is called server component. and react is adapting for the use of server component
server component is essentially for next js 
client and server component
they are distinguish 
Client 
- Runs on the browser
- Adding the "use client" on the page change the default server component into the server component
How to distinguish  this on 
in the react component if you console the message will show up on the browser console file
- react hooks, react browser activities is in the client  by importing useState from react

Server
Runs on the server
-By default is the server component

How to know it is the server component
 - if you console the output in the react function component, rather the output showing in the browser console, it will display in the server v8 engine.
 - it will rendered at the server and never executed in the client 
 - react hooks, react browser activities will not be actually executed in the server component.

benefits
-prerenders the html - it will load the pages fast load as it wont have javascript and server component are rendered in the server and downloaded in the server and sends it and the webscrawlers without havign to rely on the javascript so it will insignificantly increase the seo rating. 
-server components uses the aysnc component meaning that when you are fetching the data from api, directly can be accessed through the components.


Scenario if you have the server component has the client component
then break down the sevrer component with the client component 
and use the client component the different page  and make the component using the "use client"

and render the client component in the server component 


Complicated routing 

For example 
create the folder name app>> users >> page.tsx
in the users components 
export default async function users() {
    const res = await fetch("url");
    const users = await res.json();
    return (
        <>
            <h1>Users List</h1>
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

how to access the url with the parameters "localhost://3000/users/uid"
go to the project >>users  and make the another folder name userId and keep the square bracket like [userId] and create the page.tsx file
typescript >> automatically through the props  >> will have the promise with the params
javascript >> destruct your params
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

Triggering the 404 page 
if(!user){
    notFound();
}


not Found page
create not-found.tsx

while the data is fetching show a loading state for the specific route
create the loading.tsx file inside the folder


How to structure the next.js projects

- main page.tsx >> app
- different routes  inside the app
- other folders outside the app  >> for example if it is not sevrer component  >> using the client component >> outside the app like ui folder
- lib folder used for external libraries, storing the utilty file, shared logic

Ideas for layout 
Layout basically is the component what ui goes around 
- layout implement in individual segement of route for example user >> layout.tsx . This can be different from main Layout

- separate backend logic inside next.js projects using api routes
> create folder name called api folder
> create the route name and inside it create the route.ts file. this has to be typescript or javascript file, not the component.

Defining the endpoint for the file
for example post,get, put,delet
export async function GET(){
    return NextResponse.json({message:"hello from api"})
}
export async function POST(req: Request) {
    return NextResponse.json({ message: "hello from api" })
}
call that response using localhost:3000//api/hello

When calling the api from the client component 
async function allfriends() {
    const res = await fetch(`/api/hello`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ name: "alisha" })
    });
    const data = await res.json();
    return { data }
}


for the same post request if you are making the server component, make sure you added the full url 

The url is defined in the .env file for production and .env.local file for development like below 
NEXT_URL ="http://localhost:3000"


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


Metadata and title in Next.js Ranking high in search engine
Setting up the metadata 
> declarative way 

add this to the server component for each page.
export const metadata: Metadata = {
    title: "Create Next App Friends Page",
    description: "Friends Page",
    keywords: "friends, tag",
    twitter: {
        card:"summary_large_image",
        title:"test"
    }
};


global metadata is defined in the layout.tsx



