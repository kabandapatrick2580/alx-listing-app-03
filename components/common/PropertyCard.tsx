import Image from 'next/image';

const PropertyCard: React.FC <{property:any}> = ({property}) => (
    <div className="border rounded-lg overflow-hidden shadow-lg w-full md:w-1/3 lg:w-1/4 p-4">
        <Image
            src={property.image}
            alt={property.name}
            width={400}
            height={300}
            className="object-cover w-full h-48"
        />
        <div className="p-4">
            <h3 className="text-lg font-bold">{property.name}</h3>
            <p className="text-sm text-gray-600">
                ${property.price} / night - ⭐ {property.rating}
            </p>
        </div>
    </div>
    );
export default PropertyCard;