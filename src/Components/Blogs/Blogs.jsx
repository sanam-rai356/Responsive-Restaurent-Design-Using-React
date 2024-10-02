import React from "react";
import "./Blogs.css";
import { BlogInfo } from "./../../Data.js";

const Blogs = () => {
  return (
    <>
      <section className="blogsection" id="blog">
        <h3 className="heading">
          OUR <span>BLOGS</span>
        </h3>

        <div className="blogDetail">
          {BlogInfo.map((blogdetail, index) => {
            return (
              <>
                <div className="innerblog" key={index}>
                  <div className="blog_img">
                    <img src={blogdetail.img} />
                  </div>

                  <div className="blog_detail">
                    <h4>tasty and refreshing spices</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non, dicta.
                    </p>
                    <button className="mainBTN">Read More</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blogs;
