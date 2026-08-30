"use client";

import BusinessCard from "../business/BusinessCard";
import Link from "next/link";

const businesses = [
  {
    id: 1,
    name: "ABC Restaurant",
    category: "Restaurant",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  },
  {
    id: 2,
    name: "Grand Hotel",
    category: "Hotel",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
  {
    id: 3,
    name: "Star Salon",
    category: "Salon",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800",
  },
  {
    id: 4,
    name: "Fitness Hub",
    category: "Gym",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
  },
];

export default function FeaturedBusinesses() {
  return (
    <section className="featuredSection">
      <div className="featuredContainer">
        <div className="featuredHeader">
          <div>
            <h2>
              Featured Businesses
            </h2>

            <p>
              Discover top-rated businesses trusted by customers
            </p>
          </div>

          <Link
            href="/businesses"
            className="featuredLink"
          >
            View All
          </Link>
        </div>

        <div className="featured-grid">
          {businesses.map((business) => (
            <BusinessCard
              key={business.id}
              name={business.name}
              category={business.category}
              rating={business.rating}
              image={business.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
