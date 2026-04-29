import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { SITE } from "@/data/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Gallery | ${SITE.name}`,
  description: "A look inside Canadian Pro Auto Workshop — our bays, equipment and team.",
};

const GALLERY_IMAGES = [
  { label: "Workshop Bay 1", src: "/images/gallery/shop-img1.webp" },
  { label: "Lift & Inspection", src: "/images/gallery/shop-img2.webp" },
  { label: "Diagnostic Tools", src: "/images/gallery/shop-img3.webp" },
  { label: "Engine Repair", src: "/images/gallery/shop-img4.webp" },
  { label: "Tool Wall", src: "/images/gallery/shop-img5.webp" },
  { label: "AC Service", src: "/images/gallery/shop-img6.webp" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] border-b-2 border-[#c0392b] py-16 px-6 md:px-9 text-center">
        <SectionLabel center>Our Workshop</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-3">Gallery</h1>
        <p className="text-gray-400 text-base">A look inside Canadian Pro Auto Workshop.</p>
      </section>

      <section className="py-20 px-6 md:px-9">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden aspect-[4/3] border border-gray-200 hover:border-[#c0392b] transition-colors"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}