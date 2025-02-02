import PropertyCard from "../components/common/PropertyCard";
import { HERO_BG_IMAGE } from "../constants/images";
import React from "react";
import { FILTERS } from "../constants/filters";
import { PROPERTYLISTINGSAMPLE } from "../constants";
import Pill  from "../components/common/Pill";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
        
            <div className="relative h-screen flex items-center justify-center text-center text-white"
                style = {{
                    backgroundImage: `url(${HERO_BG_IMAGE})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                <div className="bg-white bg-opacity-20 p-8 rounded-md">
                    <h1 className="text-4xl lg:text-6xl font-bold">Find your favorite place here!</h1>
                    <p className="mt-4 text-xl lg:text-2xl">
                        The best prices for over 2 million properties worldwide.
                    </p>
                </div>
            </div>
            {/* Filter Section */}
            <div className="flex flex-wrap justify-center py-8">
                {FILTERS.map((filter) => (
                    <Pill key={filter} label={filter} />
                ))}
            </div>
            {/* Property Listing Section */}
            <div className="flex flex-wrap gap-4 px-4 justify-center">
                {PROPERTYLISTINGSAMPLE.map((property) => (
                    <PropertyCard key={property.name} property={property} />
                ))}
            </div>
        </div>
    
    )
}