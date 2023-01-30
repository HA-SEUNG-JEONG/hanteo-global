import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState(Array.from({ length: 3 }));
  const fetchData = () => {
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 3 })));
    }, 1000);
  };
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={true}
      loader={
        <h4 className="font-bold mt-3 text-xl text-teal-500 flex justify-center items-center">
          Loading....
        </h4>
      }>
      {items.map((_, index) => (
        <section key={index} className="w-96 h-20 my-3 rounded-lg bg-white">
          <div className="bg-gray-600 w-10 h-20 rounded-md"></div>
        </section>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
