import { ProducerType } from "@/types/producers-props";
import { BiGlobe, BiPhone } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import SocialIcons from "./SocialIcons";

export default function ContactInfo({ producer }: { producer: ProducerType }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <BiPhone className="w-5 h-5 text-primary" />
        Contactos
      </h2>
      <div className="space-y-3">
        {producer.phone && (
          <p className="flex items-center gap-2 text-gray-600">
            <BiPhone className="w-4 h-4" />
            <a href={`tel:${producer.phone}`} className="hover:text-primary">
              {producer.phone}
            </a>
          </p>
        )}
        {producer.email && (
          <p className="flex items-center gap-2 text-gray-600">
            <MdOutlineMailOutline className="w-4 h-4" />
            <a href={`mailto:${producer.email}`} className="hover:text-primary">
              {producer.email}
            </a>
          </p>
        )}
        {producer.website && (
          <p className="flex items-center gap-2 text-gray-600">
            <BiGlobe className="w-4 h-4" />
            <a
              href={producer.website}
              target="_blank"
              rel="noopener"
              className="hover:text-primary"
            >
              {producer.website.replace("https://", "")}
            </a>
          </p>
        )}
        <div className="flex flex-row flex-wrap gap-2">
          {producer.socialMedia && (
            <SocialIcons
              socialMedia={producer.socialMedia}
              producerName={producer.name}
            />
          )}
        </div>
      </div>
    </div>
  );
}
