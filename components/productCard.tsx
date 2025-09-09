import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export default function ProductCard({
  id,
  title,
  description,
  image,
  category,
  tags,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
        <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
          <Image src={image} alt={title} fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute top-4 left-4 bg-eco-green-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            {category}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-eco-green-800 mb-2 group-hover:text-eco-green-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-eco-green-100 text-eco-green-800 px-2 py-1 rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-eco-green-600 font-medium text-sm group-hover:text-eco-green-700">
              View Details →
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://wa.me/918102294842", "_blank", "noopener,noreferrer");
              }}
              className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
