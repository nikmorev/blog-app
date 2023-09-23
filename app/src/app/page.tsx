import { databaseClient } from '@/lib'

type Feed = Array<{id: number, title: string}>

const getFeed = async (): Promise<Feed>  => {
    const feed = await databaseClient.post.findMany({
        where: { published: false },
        include: {
            author: {
                select: { name: true },
            },
        },
    })

    return feed
}


export default async function Home() {

    const feed = await getFeed()

    console.log(feed)

    return (
        <main>
            <h1>Blog</h1>
            {feed.map(item => (
                <article key={item.id}>
                    {item.title}
                </article>
            ))}
        </main>
    )
}
