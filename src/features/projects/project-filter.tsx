// Project filtering component
'use client'

import {useState} from 'react'

import {ProjectCategory} from './project-card'

interface ProjectFilterProps {
  categories: ProjectCategory[]
  onFilterChange: (selectedCategory: ProjectCategory | null) => void
}

export function ProjectFilter({
  categories,
  onFilterChange,
}: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | null>(null)

  const handleFilterChange = (category: ProjectCategory | null) => {
    const newFilter = activeFilter === category ? null : category
    setActiveFilter(newFilter)
    onFilterChange(newFilter)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleFilterChange(null)}
          className={`rounded-md px-4 py-2 text-[14px] font-medium transition-colors ${
            activeFilter === null
              ? 'bg-verus-blue text-white dark:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          All Projects
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`rounded-md px-4 py-2 text-[14px] font-medium transition-colors ${
              activeFilter === category
                ? 'bg-verus-blue text-white dark:bg-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
