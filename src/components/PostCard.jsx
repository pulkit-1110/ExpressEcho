import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, $createdAt }) {
  const createdDate = new Date($createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-darkBlue rounded-xl p-1 text-white">
        <div className="mb-4 flex justify-center items-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
            style={{ height: "300px", width: "340px" }}
          />
        </div>
        <div className="mt-4 ml-4">
          <h5 className="text-sm text-lightWhite">{createdDate}</h5>
          <h2
            className="mt-2 text-xl font-bold text-white whitespace-normal break-words"
            style={{ width: "300px" }}
          >
            {title.length > 60 ? `${title.substring(0, 50)}...` : title}
          </h2>
          <h2 className="mt-4 mb-4 text-sm text-desaturatedBlue">
            Read full post {"->"}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
