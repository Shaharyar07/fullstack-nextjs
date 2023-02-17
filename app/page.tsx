"use client";
const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/post");
  const posts = await res.json();
  return posts;
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </>
  );
}
