import React, { useState, useEffect } from "react";
import { Container, LoadingAnimation, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function ExploreYourPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwriteService
      .getUserPosts(userData?.$id)
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
          <div className="flex flex-wrap min-h-60">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold text-white text-center">
                You haven't created any posts yet. Create one using the Add Post
                button!
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
        <h1 className="text-5xl font-bold text-white text-center">My Posts</h1>
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

export default ExploreYourPosts;
