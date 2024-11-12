"use client";

import Filter from "../assets/Filter";

import { useState } from "react";

type DataItem = {
  name: string;
  tags: string[];
};

const data: DataItem[] = [
  { name: "Men’s Shirt", tags: ["Men", "Casual"] },
  { name: "Women’s Dress", tags: ["Women", "Formal"] },
  { name: "Kids’ Jacket", tags: ["Kids", "Outerwear"] },
  { name: "Unisex Hoodie", tags: ["Men", "Women", "Casual"] },
  // Add more items as needed
];

const FilterTest = () => {
  const [activeTag, setActiveTag] = useState<string>("All");
  const tagList = ["All", "Design", "Engineering", "Product", "Tools", "Books"];

  const handleTag = (tag: string) => setActiveTag(tag);

  const filterTags = (array: DataItem[]) => {
    if (activeTag === "All") return array;
    return array.filter((item) => item.tags.includes(activeTag));
  };

  const filteredList = filterTags(data);

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-white">
      <p className="text-[2rem] underline underline-offset-2 my-4">
        Tag Filter in Next.js
      </p>
      <Filter tagList={tagList} activeTag={activeTag} handleTag={handleTag} />
      <div className="w-full flex flex-col gap-2 py-4">
        {filteredList.map((item, index) => (
          <div
            key={index}
            className="w-full border-[1px] border-gray-500 px-2 rounded-xl py-4"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FilterTest;
