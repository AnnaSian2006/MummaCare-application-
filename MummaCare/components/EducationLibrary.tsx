import React from "react"

const resources = [
  {
    title: "Nutrition during pregnancy",
    type: "Article",
    link: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/nutrition-during-pregnancy",
  },
  {
    title: "Preparing for childbirth",
    type: "Video",
    link: "https://www.youtube.com/playlist?list=PLYMcLHAKovpHHEstDn745tjOpDy3yLU8I",
  },
  {
    title: "Breastfeeding basics",
    type: "Article",
    link: "https://www.who.int/tools/your-life-your-health/life-phase/newborns-and-children-under-5-years/caring-for-newborns",
  },
  { title: "Newborn care tips", type: "Video", link: "https://youtu.be/_wgHB0dh3uI?si=-zB43urqUF8w70Po" },
]

export function EducationLibrary() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Education Library</h2>
      <ul className="space-y-4">
        {resources.map((resource, index) => (
          <li key={index} className="border-b border-pink-100 pb-2">
            <a
              href={resource.link}
              className="text-pink-600 hover:text-pink-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {resource.title} <span className="text-sm text-pink-400">({resource.type})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

