"use client";

import React, { useState } from "react";
import Image from "next/image";

import Hero from "../components/BlogHero";
import BlogSearch from "../components/BlogSearch";
import bloggersImage from "../data/bloggersImage";
import BlogPost from "../components/BlogMain";

import prev from "../assets/pagination/prev.svg";
import next from "../assets/pagination/next.svg";

const BlogPage = () => {
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage + 1;
  const currentPosts = bloggersImage.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = bloggersImage.length / 9;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const goToPrev = () => {
    if (currentPage != 1) {
      setCurrentPage((prev) => prev - 1 )
    }
  }

  const goToNext = () => {
    if (currentPage != bloggersImage.length) {
      setCurrentPage((prev) => prev + 1 )
    }
  }

  return (
    <section >
      <Hero />
      <BlogSearch />

      <div
        className="px-36 mx-auto
          max-medium:px-10
          max-small:px-[10px]"
      >
        {currentPosts.map((user) => (
          <BlogPost
            key={user.id}
            id={user.id}
            header={user.header}
            description={user.description}
            image={user.image}
            date={user.date}
          />
        ))}
      </div>

      {/* Pagination */}

      <div className="flex justify-center items-center mb-40 mt-20">
        <div className="flex gap-2 cursor-pointer"
        onClick={goToPrev}
        >
          <div className="flex">
            <Image src={prev} alt="previous page" />
            <Image src={prev} alt="previous page" />
          </div>
          <Image src={prev} alt="previous page" />
        </div>

        <div className="w-10"></div>

        <div className="flex gap-1">
          {Array(totalPages)
            .fill(null)
            .map((_, index) => (
              <p
                className={`flex justify-center items-center cursor-pointer text-[12px]  w-[22px] h-[22px] rounded-full font-poppins
                ${currentPage == index + 1 ? "bg-[#A3A6AB] text-white" : "bg-[#f1f3f6] text-[#4B505D]"}
                `}
                key={index}
                onClick={() => setCurrentPage(index+1)}
              >
                {index + 1}
              </p>
            ))}
        </div>

        <div className="w-10"></div>

        <div className="flex gap-2 cursor-pointer"
        onClick={goToNext}
        >
          <Image src={next} alt="next page" />
          <div className="flex">
            <Image src={next} alt="next page" />
            <Image src={next} alt="next page" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
