import React from "react";
import Container from "../ui/Container";
import BlogCard from "../ui/BlogCard";
import Responsive from "../ui/Responsive";
import Link from "next/link";
import { allBlogData } from "../helper/blogpagehelper";

const BlogSectionHO = () => {
  return (
    <section className=" py-[70px] lg:py-[120px]">
      <Container size={"lg"}>
        <h2 className="max-w-[800px] text-center mx-auto font-bold text-primary headingTwo">
          Insights & Updates: Driving Your Success
        </h2>
        <div className="py-[60px]">
          <Responsive.Grid cols={{ base: 1, lg: 3 }} gap="lg">
            {allBlogData.slice(0, 3).map((item) => {
              return (
                <BlogCard
                  batchName={item.batchName}
                  description={item.description}
                  dateText={item.dateText}
                  image={item.image}
                  itmeText={item.itmeText}
                  slug={item.slug}
                  key={item.id}
                />
              );
            })}
          </Responsive.Grid>
        </div>
        <div className=" mt-[20px] md:mt-[30px] lg::mt-[60px]">
          <Link href={"/blog"}>
            <button className="w-full cursor-pointer text-center py-5  text-primary font-medium text-base border border-[#0000001a] rounded-[6px]">
              See all case studies
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogSectionHO;
