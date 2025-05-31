"use client"
import projects from '@/data/projects'
import { usePathname, useRouter } from 'next/navigation'

const Filter = () => {
    const router = useRouter()
    const pathname = usePathname()

    const onChangeFilter = (e:string)=>{
        router.push(`${pathname}?filter=${e.split(" ").join("-")}`)
    }
    const allTags = Array.from(
      new Set(projects.flatMap((project) => project.tags))
    );
  return (
    <div className="relative">
          <select 
            name="project" 
            id="project" 
            className='
              appearance-none
              bg-dark-Background/80 
              dark:bg-dark-Background 
              text-light-Text 
              dark:text-dark-Text
              px-6 
              py-3 
              pr-12
              border-2 
              border-dark-accent/30 
              rounded-lg
              focus:outline-none 
              focus:border-dark-accent
              hover:border-dark-accent/50
              cursor-pointer
              transition-all 
              duration-200
              text-base
              backdrop-blur-sm
            '
            onChange={(e)=> onChangeFilter(e.target.value)}
          >
            <option  value="" disabled selected>Filter by tag</option>
            {allTags.map((t) => (
              <option 
                value={t} 
                key={t.trim()}
                className='
                  bg-dark-Background 
                  dark:bg-gray-800 
                  text-light-Text 
                  dark:text-dark-Text
                  py-2
                  hover:bg-dark-accent/20
                '
              >
                {t}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg 
              className="w-5 h-5 text-dark-accent" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </div>
  )
}

export default Filter