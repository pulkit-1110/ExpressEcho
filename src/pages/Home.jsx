import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, LoadingAnimation, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
          setLoading(false);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8 mt-4">
        <Container>
          <LoadingAnimation />
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full min-h-60">
              <h1 className="text-2xl font-bold text-white text-center">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-4">
      <div className="p-2 w-full mb-10">
        <h1 className="text-5xl font-bold text-white text-center">
          Read the Blogs
        </h1>
      </div>
      <Container>
        <div className="flex flex-wrap justify-center items-center">
          {posts.map((post) => (
            <div key={post.$id} className="p-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
