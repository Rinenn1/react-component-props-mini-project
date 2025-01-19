import Article from "./Article";

export default function ArticleList({ posts }){

    const postsComponents = [];

    return (
        <main>

            postsComponents = [
                <Article 
                    key={posts.id}
                    title={posts.title}
                    preview={posts.preview}
                />
                <Article 
                    key={posts.id}
                    title={posts.title}
                    preview={posts.preview}
                />
                <Article 
                    key={posts.id}
                    title={posts.title}
                    preview={posts.preview}
                />
            ]

        </main>
    )
}