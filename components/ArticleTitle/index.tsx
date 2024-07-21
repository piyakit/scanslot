import React from "react";

type ArticleTitleProps = {
  title: string;
};

const ArticleTitle: React.FC<ArticleTitleProps> = ({ title }) => {
  return (
    <div className="flex justify-center">
      <p className="text-[#fec100] py-2 mt-5">{title}</p>
    </div>
  );
};

export default ArticleTitle;
