import React from "react";

function LoadingAnimation() {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-60">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  );
}

export default LoadingAnimation;
