import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, LoadingAnimation } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
          setLoading(false);
        } else {
          setLoading(false);
          navigate("/");
        }
      });
    } else {
      setLoading(false);
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return loading ? (
    <LoadingAnimation /> // Show loading animation while fetching post
  ) : post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex flex-col justify-center items-center mb-4 relative border rounded-xl p-2 bg-white">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
            style={{ height: "300px", width: "340px" }}
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="bg-green-500 hover:bg-green-400 mr-3">
                  Edit
                </Button>
              </Link>
              <Button
                className="bg-red-500 hover:bg-red-400"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
          <div className="mt-8 w-full mb-6">
            <h1 className="text-2xl font-bold text-center">{post.title}</h1>
          </div>
          <div className="browser-css">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : null;
}
