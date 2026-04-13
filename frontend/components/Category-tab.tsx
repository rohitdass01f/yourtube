"use client" ;
import React, { useState } from "react";
import { Button } from "./ui/button";

const categories = [
  "All",
  "Music",
  "Gaming",
  "Movies",
  "News",
  "Sports",
  "Technology",
  "Comedy",
  "Education",
  "Science",
  "Travel",
  "Food",
  "Fashion",
];
const Categorytab = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="flex gap-2 mb-4 overflow-x-auto scroll-smooth pb-2 px-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "secondary"}
          className="whitespace-nowrap"
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Categorytab;
