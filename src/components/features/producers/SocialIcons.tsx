"use client";

import { SocialMediaProps } from "@/types/social-media-props";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
  website: FaLink,
  site: FaLink,
};

const colorMap: Record<string, string> = {
  facebook: "hover:text-[#1877f2]",
  instagram: "hover:text-[#e4405f]",
  twitter: "hover:text-[#1da1f2]",
  youtube: "hover:text-[#ff0000]",
  linkedin: "hover:text-[#0077b5]",
  tiktok: "hover:text-[#000000]",
  whatsapp: "hover:text-[#25d366]",
  website: "hover:text-primary",
  site: "hover:text-primary",
};

export default function SocialIcons({
  socialMedia,
  producerName,
}: SocialMediaProps) {
  if (!socialMedia || Object.keys(socialMedia).length === 0) {
    return null;
  }

  return (
    <div className="flex flex-row flex-wrap gap-4">
      {Object.entries(socialMedia).map(([platform, data]) => {
        const Icon = iconMap[platform.toLowerCase()] || FaLink;
        const hoverColor =
          colorMap[platform.toLowerCase()] || "hover:text-primary";

        return (
          <a
            key={platform}
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-600 transition-colors ${hoverColor}`}
            aria-label={`${platform} de ${producerName}`} // Se tiveres producerName
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
