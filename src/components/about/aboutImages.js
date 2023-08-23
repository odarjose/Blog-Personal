/*function AboutImages() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 px-16 gap-12">
        <img
          className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  );
}

export default AboutImages;*/
import React from "react";

function AboutImages() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <img
          className="object-cover w-full h-56 rounded shadow-lg md:h-auto lg:h-auto xl:h-auto"
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg md:h-auto lg:h-auto xl:h-auto"
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  );
}

export default AboutImages;

