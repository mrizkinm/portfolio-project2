import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, University } from 'lucide-react'
import DevImg from './DevImg';

const info = [
  {
    icon: <User2 size={20} />,
    text: 'Muhammad Rizki'
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+62812345678'
  },
  {
    icon: <MailIcon size={20} />,
    text: 'email@email.com'
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 1 Jan, 1990'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'S.Kom'
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Jalan Sidoarjo'
  },
];

const qualification = [
  {
    title: 'education',
    data: [
      {
        university: 'University of Margorejo',
        qualification: 'S.Kom',
        years: '2018 - 2023'
      },
      {
        university: 'High Scholl of Suzuran',
        qualification: 'Lulus',
        years: '2014 - 2017'
      }
    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: 'PT Mencari Cinta Sejati',
        role: 'Engineer',
        years: '2018 - 2023'
      },
      {
        company: 'Bakul Sepatu',
        role: 'Jual sepatu',
        years: '2014 - 2017'
      }
    ]
  }
];

const skill = [
  {
    title: 'skills',
    data: [
      {
        name: 'Codeigniter, Laravel, Next.js'
      },
      {
        name: 'Full Stack Developer'
      },
      {
        name: 'HTML, CSS, Javascript'
      },
      {
        name: 'Front End Developer'
      },
      {
        name: 'Javascript, PHP, MySQL'
      },
      {
        name: 'Back End Developer'
      },
    ]
  }
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section id="about" className="xl:h-[860px] pb-12 xl:py-24 mt-8">
      <div className="px-5 container mx-auto">
        <h2 className="text-4xl font-bold mb-8 xl:mb-16 text-center mx-auto">About</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 justify-center items-center">
            <DevImg />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-8 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-justify">
                    <h3 className="h3 mb-8">I'm Full Stack Developer</h3>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {info.map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8">My Journey</h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualification, 'experience').title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualification, 'experience').data.map((item, index) => {
                            return (
                              <div key={index} className="flex gap-x-8 group">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold leading-none mb-2">{item.company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{item.role}</div>
                                  <div className="text-base font-medium">{item.years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualification, 'education').title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualification, 'education').data.map((item, index) => {
                            return (
                              <div key={index} className="flex gap-x-8 group">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold leading-none mb-2">{item.university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{item.qualification}</div>
                                  <div className="text-base font-medium">{item.years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-justify">
                    <h3 className="h3 mb-8">My Tools</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skill, 'skills').data.map((item, index) => {
                          return (
                            <div key={index}>
                              <div className="font-medium">{item.name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About