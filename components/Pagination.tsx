"use client";

import Link from "next/link";
import { useState } from "react";

interface PaginationTypeProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
}: PaginationTypeProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);
  return (
    <ul className="flex gap-[10px]">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className="text-primary font-medium text-[1rem] cursor-pointer"
          onClick={() => {
            paginate(number);
            setActivePage(number);
          }}
        >
          <a href="!#">{number}</a>
        </li>
      ))}
    </ul>
  );
}
