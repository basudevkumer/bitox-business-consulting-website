"use client";

import Image from "next/image";
import Link from "next/link";
import allImages from "../helper/imageProvider";
import Container from "../ui/Container";
import { Grid } from "../ui/Responsive";

const blogPosts = [
  {
    id: 1,
    img: null, // allImages.home2blog[0].img — circle clip
    clipShape: "circle",
    readTime: "6 min read",
    date: "Mar 12, 2026",
    title: "5 smart ways to improve your business cash flow",
    excerpt:
      "Enterprise partnerships, built on clarity craft, are the foundation of sustainable and long-term success.",
    isUnderlined: false,
  },
  {
    id: 2,
    img: null, // allImages.home2blog[1].img — triangle clip
    clipShape: "triangle",
    readTime: "6 min read",
    date: "Mar 12, 2026",
    title: "Smart strategies to grow your business faster",
    excerpt:
      "Enterprise partnerships, built on clarity craft, are the foundation of sustainable and long-term success.",
    isUnderlined: false,
  },
  {
    id: 3,
    img: null, // allImages.home2blog[2].img — rectangle (no clip)
    clipShape: "rectangle",
    readTime: "6 min read",
    date: "Mar 12, 2026",
    title: "Simple ways to improve your business cash flow",
    excerpt:
      "Enterprise partnerships, built on clarity craft, are the foundation of sustainable and long-term success.",
    isUnderlined: true,
  },
  {
    id: 4,
    img: null, // allImages.home2blog[3].img — star clip
    clipShape: "star",
    readTime: "6 min read",
    date: "Mar 12, 2026",
    title: "Building a strong financial foundation for business",
    excerpt:
      "Enterprise partnerships, built on clarity craft, are the foundation of sustainable and long-term success.",
    isUnderlined: false,
  },
];

const clipStyles = {
  circle: {
    
    width: "160px",
    height: "160px",
    objectFit: "cover",
  },
  triangle: {
    
    width: "160px",
    height: "160px",
    objectFit: "cover",
  },
  rectangle: {
    borderRadius: "6px",
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  star: {
    width: "160px",
    height: "160px",
    objectFit: "cover",
  },
};

const BlogInsight = () => {
  return (
    <section className="py-10 lg:py-[100px] bg-[#F5F0E8]">
      <Container size="lg">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-4">
          <div>
            <span className="inline-block border border-black text-[11px] font-semibold tracking-widest uppercase px-3 py-1 mb-4">
              Blog Insight
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold underline underline-offset-4 leading-tight max-w-xl">
              Valuable insights to change your startup idea
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium whitespace-nowrap hover:opacity-70 transition-opacity"
          >
            Read all blog posts <span>&#9658;</span>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap="md">
          {blogPosts.map((post, index) => {
            const imgSrc = allImages.home2blog[index]?.img;
            const isRectangle = post.clipShape === "rectangle";

            return (
              <div
                key={post.id}
                className="bg-white rounded-sm p-5 flex flex-col items-center text-center gap-3"
              >
                {/* Image with clip shape */}
                <div
                  className="flex items-center justify-center w-full overflow-hidden"
                  style={{ minHeight: "180px" }}
                >
                  {imgSrc && (
                    <Image
                      src={imgSrc}
                      alt={post.title}
                      width={isRectangle ? 400 : 160}
                      height={isRectangle ? 180 : 160}
                      style={clipStyles[post.clipShape]}
                    />
                  )}
                </div>

                {/* Meta */}
                <p className="text-xs text-gray-400">
                  {post.readTime} &bull; {post.date}
                </p>

                {/* Title */}
                <h3
                  className={`text-[15px] font-bold leading-snug ${
                    post.isUnderlined ? "underline underline-offset-2" : ""
                  }`}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default BlogInsight;