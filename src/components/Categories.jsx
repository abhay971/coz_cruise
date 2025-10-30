import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card from "./ui/color-change-card";

// Import category images
import RugsImg from "../assets/categories/Rugs.png";
import FabricsImg from "../assets/categories/Fabrics.png";
import FlooringImg from "../assets/categories/Flooring.png";
import LightingImg from "../assets/categories/Lighting.png";
import PlantersImg from "../assets/categories/Planters.png";
import FurnitureImg from "../assets/categories/Furniture.png";
import BedLinenImg from "../assets/categories/Bedlinen.png";
import BathwareImg from "../assets/categories/Bathware.png";
import KitchenwareImg from "../assets/categories/Kitchenware.png";
import BathFittingsImg from "../assets/categories/Bathfittings.png";
import WallCoveringsImg from "../assets/categories/WallCoverings.png";
import AntiquesImg from "../assets/categories/Antiques.png";

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      name: "Rugs",
      description:
        "Luxurious handcrafted rugs that elevate your yacht interiors",
      imgSrc: RugsImg,
    },
    {
      name: "Fabrics",
      description:
        "Premium marine-grade fabrics for sophisticated yacht living",
      imgSrc: FabricsImg,
    },
    {
      name: "Flooring",
      description:
        "Durable and elegant flooring solutions for marine environments",
      imgSrc: FlooringImg,
    },
    {
      name: "Lighting",
      description:
        "Sophisticated lighting systems for ambiance and functionality",
      imgSrc: LightingImg,
    },
    {
      name: "Planters",
      description: "Curated planters bringing natural elegance to your yacht",
      imgSrc: PlantersImg,
    },
    {
      name: "Furniture",
      description: "Bespoke furniture designed for luxury yacht interiors",
      imgSrc: FurnitureImg,
    },
    {
      name: "Bed Linen",
      description: "Premium bed linens for unparalleled comfort at sea",
      imgSrc: BedLinenImg,
    },
    {
      name: "Bathware",
      description: "Luxury bathware designed for yacht specifications",
      imgSrc: BathwareImg,
    },
    {
      name: "Kitchenware",
      description: "Elite kitchenware for onboard culinary excellence",
      imgSrc: KitchenwareImg,
    },
    {
      name: "Bath Fittings",
      description: "Premium marine-grade bath fittings and fixtures",
      imgSrc: BathFittingsImg,
    },
    {
      name: "Wall Coverings",
      description: "Exquisite wall coverings for refined yacht aesthetics",
      imgSrc: WallCoveringsImg,
    },
    {
      name: "Antiques & Artifacts",
      description: "Curated antiques and artifacts for distinctive interiors",
      imgSrc: AntiquesImg,
    },
  ];

  return (
    <section ref={ref} id="categories" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in sourcing and trading premium products across 12
            distinct categories, each carefully curated to meet the highest
            standards of luxury and quality.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card
                heading={category.name}
                description={category.description}
                imgSrc={category.imgSrc}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
