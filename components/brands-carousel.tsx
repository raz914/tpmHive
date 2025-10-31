"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface Brand {
  name: string
  logo: string
  category: "beauty" | "healthcare"
}

const brands: Brand[] = [
  // Beauty & Skincare
  { name: "Aveeno", logo: "/beauty/aveeno.svg", category: "beauty" },
  { name: "Batiste", logo: "/beauty/Batiste.svg", category: "beauty" },
  { name: "Bioderma", logo: "/beauty/Bioderma.svg", category: "beauty" },
  { name: "Cerave", logo: "/beauty/Cerave.svg", category: "beauty" },
  { name: "Elizabeth Arden", logo: "/beauty/Elizabeth-Arden.svg", category: "beauty" },
  { name: "Embryolisse", logo: "/beauty/Embryolisse.svg", category: "beauty" },
  { name: "La Roche-Posay", logo: "/beauty/La-Roche-posay.svg", category: "beauty" },
  { name: "Living Proof", logo: "/beauty/Living-Proof.svg", category: "beauty" },
  { name: "L'Oreal", logo: "/beauty/loreal.svg", category: "beauty" },
  { name: "Neutrogena", logo: "/beauty/Neutrogena.svg", category: "beauty" },
  // { name: "Olaplex", logo: "/beauty/olaplex.svg", category: "beauty" },
  { name: "Schwarzkopf", logo: "/beauty/Schwarzkopf.svg", category: "beauty" },
  { name: "Vaseline", logo: "/beauty/vaseline.svg", category: "beauty" },
  { name: "Nivea", logo: "/beauty/nivea.svg", category: "beauty" },


  
  // { name: "The Body Shop", logo: "/beauty/The-Body-Shop.svg", category: "beauty" },
  { name: "The Ordinary", logo: "/beauty/the-ordinary.svg", category: "beauty" },
  { name: "Unilever", logo: "/beauty/Unilever.svg", category: "beauty" },

  // Healthcare & Wellness
  { name: "3M", logo: "/health/3M.svg", category: "healthcare" },
  { name: "Abbott", logo: "/health/Abbott.svg", category: "healthcare" },
  { name: "Oral B", logo: "/health/OralB.svg", category: "healthcare" },

  // { name: "Accu-Chek", logo: "/health/accu-chek.svg", category: "healthcare" },
  // { name: "Braun", logo: "/health/Braun.svg", category: "healthcare" },
  { name: "Centrum", logo: "/health/Centrum.svg", category: "healthcare" },
  // { name: "Compeed", logo: "/health/compeed.svg", category: "healthcare" },
  { name: "Driclor", logo: "/health/Driclor.svg", category: "healthcare" },
  { name: "Durex", logo: "/health/durex.svg", category: "healthcare" },
  { name: "Flexitol", logo: "/health/Felxitol.svg", category: "healthcare" },
  { name: "GSK", logo: "/health/GSK.svg", category: "healthcare" },
  { name: "Omron", logo: "/health/omron.svg", category: "healthcare" },
  { name: "Smith & Nephew", logo: "/health/Smith-Nephew.svg", category: "healthcare" },
  { name: "Vitabiotics", logo: "/health/Vitabiotics.svg", category: "healthcare" },
]

function BrandRow({ category, title, direction }: { category: "beauty" | "healthcare"; title: string; direction: "left" | "right" }) {
  const filteredBrands = brands.filter((brand) => brand.category === category)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Initialize scroll position for left-scrolling carousel
    if (direction === "left") {
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth
      container.scrollLeft = scrollWidth - clientWidth
    }

    const scroll = () => {
      if (!container) return

      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth
      const maxScroll = scrollWidth - clientWidth

      if (direction === "right") {
        // Scroll to the right
        container.scrollLeft += 2

        // When reaching near the end, smoothly reset to beginning
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollLeft = 0
        }
      } else {
        // Scroll to the left
        container.scrollLeft -= 2

        // When reaching near the beginning, smoothly reset to end
        if (container.scrollLeft <= 10) {
          container.scrollLeft = maxScroll
        }
      }
    }

    scrollIntervalRef.current = setInterval(scroll, 30)

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current)
      }
    }
  }, [direction])

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto"
        style={{
          scrollBehavior: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Hide scrollbar for webkit browsers */}
        <style>{`
          #brands-scroll-${category}::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {[...filteredBrands, ...filteredBrands].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 w-56 h-40 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 flex items-center justify-center p-6 hover:scale-105"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={150}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function BrandsCarousel() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Popular <span className="text-amber-600">Brands</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We partner with the world's most trusted beauty and healthcare brands to bring you premium products
          </p>
        </div>

        <BrandRow category="beauty" title="Beauty & Skincare" direction="right" />
        <BrandRow category="healthcare" title="Healthcare & Wellness" direction="left" />
      </div>
    </section>
  )
}
