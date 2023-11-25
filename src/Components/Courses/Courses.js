import React from "react";
import Data from "../../Assets/Data/Data.json";
import "./Courses.css";

const Courses = () => {
  return (
    <>
      <div className="course-list" id="course-list">
        {Data &&
          Data.map((post) => {
            return (
              <>
                  <div className="course-card">
                    <div className="card-img">
                      <img src={post.image_src} alt="none" />
                    </div>
                    <div className="course-content">
                      <h2>{post.course_name}</h2>
                      <h3>&#x20B9; {post.retail_price}.00</h3>
                      <p>{post.description}</p>
                    </div>
                  </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Courses;
