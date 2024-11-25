"use client"

import ProjectCard from '@/components/ProjectCard'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'

const project = [
  {
    image: '/project1.jpg',
    category: 'React JS',
    name: 'Website bagus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '/',
    github: '/'
  },
  {
    image: '/project2.jpg',
    category: 'Laravel',
    name: 'Another Website bagus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '/',
    github: '/'
  },
  {
    image: '/project3.jpg',
    category: 'React JS',
    name: 'Website bagus lagi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '/',
    github: '/'
  },
  {
    image: '/project4.jpg',
    category: 'Next JS',
    name: 'Website lagi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '/',
    github: '/'
  },
  {
    image: '/project1.jpg',
    category: 'Codeigniter',
    name: 'Code web',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '/',
    github: '/'
  },
  {
    image: '/project2.jpg',
    category: 'Next JS',
    name: 'Portofolio',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '/',
    github: '/'
  }
];

const uniqueCat = ['all projects', ...new Set(project.map((item) => item.category))];


const Projects = () => {
  const [categoryList, setCategoryList] = useState(uniqueCat)
  const [category, setCategory] = useState('all projects')
  const filteredProjects = project.filter((item) => {
    return category === 'all projects'
    ? item
    : item.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-8 xl:mb-16 text-center mx-auto">Projects</h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categoryList.map((item, index) => (
              <TabsTrigger onClick={() => setCategory(item)} value={item} key={index} className="capitalize w-[162px] md:w-auto">{item}</TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((item, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={item} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects