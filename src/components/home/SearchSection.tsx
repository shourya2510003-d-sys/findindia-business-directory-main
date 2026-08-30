"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const [location, setLocation] = useState("Delhi");
  const [search, setSearch] = useState("");

  const router = useRouter();
  function handleSearch() {
    if (!search.trim()) return;
    router.push(`/businesses?search=${encodeURIComponent(search)}`);
  }
  return (
    <section className="heroSection">
      <div className="heroContent">

        <h1>
          Search Across <span>Millions of Businesses</span>
        </h1>

        <p>
          Restaurants • Hotels • Doctors • Education • Services
        </p>

        <form
          className="searchWrapper"
          onSubmit={(event) => {
            event.preventDefault();
            handleSearch();
          }}
        >

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Lucknow</option>
          </select>

          <input
            type="text"
            aria-label="Search businesses"
            placeholder="Search for Restaurants, Doctors, Hotels..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit">Search</button>

        </form>

      </div>
    </section>
  );
}
