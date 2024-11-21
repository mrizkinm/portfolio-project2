"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import ProjectCard from './ProjectCard'

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
  }
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto px-5">
        <div className="max-w-[400px] mx-auto xl:mx-0 mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="text-4xl font-bold mb-8 text-center xl:text-start">My Projects</h2>
          <p className="subtitle mb-8 text-center xl:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
            640:{
              slidesPerView:2
            }
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{clickable: true}}
          >
            {project.slice(0,4).map((item, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work