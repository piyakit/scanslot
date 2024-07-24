import React from "react";
import './style.css'
import { cn } from "@/lib/utils";

type ArticleTitleProps = {
  title: string;
  className?: string
};

const ArticleTitle: React.FC<ArticleTitleProps> = ({ title, className }) => {
  return (
    <div className={cn("flex justify-center mb-4", className)}>
      <p className="text-[#fec100] py-2 mt-5 title w-full">{title}</p>
    </div>
  );
};

export default ArticleTitle;
