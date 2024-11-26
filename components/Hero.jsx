import React from 'react'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import { RiBriefcaseFill, RiTeamFill, RiTodoFill, RiArrowDownLine } from 'react-icons/ri'
import DevImg from './DevImg'
import Socials from './Socials'
import Link from 'next/link'
import Badge from './Badge'

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-green-50 dark:bg-transparent">
      <div className="container px-5 mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
            <h1 className="h1">Hello, My Name is Rizki</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="rounded-full">
                  Contact me <Send size={18}/>
                </Button>
              </Link>
              <Button variant="secondary" className="rounded-full">
                Download CV <Download size={18}/>
              </Button>
            </div>
            <Socials styles="flex gap-x-6 mx-auto xl:mx-0" iconStyles="text-foreground text-[22px] hover:text-primary transition-all" />
          </div>
          <div className="hidden xl:flex relative">
            <Badge icon={<RiBriefcaseFill />} endCountNum={7} text="Years of Experience" styles="absolute top-[24%] left-[-20%]" />
            <Badge icon={<RiTodoFill />} endCountNum={15} text="Finished Projects" styles="absolute top-[70%] left-[-10%]" />
            <Badge icon={<RiTeamFill />} endCountNum={10} text="Happy Clients" styles="absolute top-[40%] right-[1%]" />
            <DevImg />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="absolute bottom-20 xl:bottom-25 animate-bounce">
            <Link href="/#about">
              <RiArrowDownLine className="text-3xl text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero