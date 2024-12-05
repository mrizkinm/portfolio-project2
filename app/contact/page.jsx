import DevImg from '@/components/DevImg'
import Form from '@/components/Form'
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px]">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <div>Hello</div>
            </div>
            <h1 className="h1 max-w-md mb-8">Lets Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="hidden xl:flex justify-end items-center">
            <DevImg />
          </div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>email@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Jalan kemerdekaan</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+6285678765432</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact