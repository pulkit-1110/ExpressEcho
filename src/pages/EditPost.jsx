import React, { useEffect, useState } from "react";
import { Container, LoadingAnimation, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
          setLoading(false);
        }
      });
    } else {
      setLoading(false);
      navigate("/");
    }
  }, [slug, navigate]);
  return loading ? (
    <LoadingAnimation /> // Show loading animation while fetching post
  ) : post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
