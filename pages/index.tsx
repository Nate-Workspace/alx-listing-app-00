import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Mountain View",
  "Luxury",
];

const Pill = ({ label }: { label: string }) => (
  <button className="border rounded-full px-4 py-1 text-sm hover:bg-indigo-100">
    {label}
  </button>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-96 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg mt-2">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="px-6 py-4 flex flex-wrap gap-2 justify-center">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <div key={index} className="bg-white shadow rounded overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-500">
                {property.address.city}, {property.address.country}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-indigo-600 font-bold">
                  ${property.price}/night
                </span>
                <span className="text-yellow-500 font-semibold">
                  ⭐ {property.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
