import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export default function ProductCard({
  title,
  description,
  image,
  category,
  tags,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
        <Image src={image} alt={title} fill className="object-contain" />
        <div className="absolute top-4 left-4 bg-eco-green-500 text-white px-2 py-1 rounded-md text-sm font-medium">
          {category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-eco-green-800 mb-2">
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
          <span className="text-lg italic font-medium text-eco-green-800">
            Exclusive Rates on Call
          </span>
        </div>
      </div>
    </div>
  );
}
