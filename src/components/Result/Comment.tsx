import React from "react";
import Disqus from "disqus-react";

type CommentProps = {
  identifier: string;
};

const Comment: React.FC<CommentProps> = ({ identifier }) => {
  const disqusShortname = "tarot-amanda";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier,
  };
  return (
    <div className="article-container">
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Comment;
