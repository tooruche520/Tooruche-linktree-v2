import { Icon } from "@iconify/react";
import { Twitch, Github } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import MyCard from "@/components/my-card.tsx";
import Section from '@/components/section.tsx'
import { ModeToggle } from "@/components/mode-toggle.tsx"
import { ThemeProvider  } from "@/components/theme-provider"

import headPic from "@/assets/head-pic.jpg";
import chraSetting1 from "@/assets/chra-setting-1.jpg";
import chraSetting2 from "@/assets/chra-setting-2.png";
import albumsLink from "@/data/albums-links.json";


interface Links {
  title: string,
  description:string,
  url: string,
  image: string,
}

function App() {
  const albumsData: Links[] = albumsLink;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center overflow-hidden">
        <div className="justify-center w-full lg:w-[1024px]">
          {/* 大頭照、名、自界、個是連結 */}
          <div className="w-full my-10 relative">
            <div className="w-full px-4 sm:px-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className=" m-auto">
                <img 
                  src={headPic}
                  className="rounded-full w-40 min-w-40 lg:w-40"
                />
              </div>
              <div className="flex flex-col justify-center grow sm:justify-start text-center sm:text-left gap-2">
                <h1>晴海徹</h1> 
                <p>你好，我叫小徹，一隻憨到發二的哈士奇。會拍一些照片跟UTAU。</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                  <Badge variant="default">Vtuber</Badge>
                  <Badge variant="outline">攝影</Badge>
                  <Badge variant="outline">UTAU</Badge>
                </div>
                {/* 社群連結 */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <Button variant="ghost" size="roundedIcon" className=""
                    onClick={() => window.open("https://twitter.com/tooruche", '_blank')}
                  >
                    <Icon icon="fa6-brands:x-twitter" />
                  </Button>
                  <Button variant="ghost" size="roundedIcon" className=""
                    onClick={() => window.open("https://www.twitch.tv/tooruche520", '_blank')}
                  >
                    <Twitch />
                  </Button>
                  <Button variant="ghost" size="roundedIcon" className="[&_svg]:size-6"
                    onClick={() => window.open("https://www.youtube.com/@tooruche/featured", '_blank')}
                  >
                    <Icon icon="si:youtube-line" />
                  </Button>
                  <Button variant="ghost" size="roundedIcon" className="[&_svg]:size-6"
                    onClick={() => window.open("https://discord.gg/HeywMdKNf5", '_blank')}
                  >
                    <Icon icon="mingcute:discord-line" />
                  </Button>
                  <Button variant="ghost" size="roundedIcon" className=""
                    onClick={() => window.open("https://github.com/tooruche520", '_blank')}
                  >
                    <Github />
                  </Button>
                  
                </div>
              </div>

            </div>
            <ModeToggle className="absolute right-10 top-0"/>
          </div>
          

          {/* Section 1: 設定圖 */}
          <Section>
            <h2 className="pb-3">設定圖/委託</h2>
            <Carousel>
              <CarouselContent>
                <CarouselItem className="flex items-center justify-center">
                  <img src={chraSetting1} alt="Image" className="rounded-md object-cover" />
                </CarouselItem>
                <CarouselItem>
                  <img src={chraSetting2} alt="Image" className="rounded-md object-cover" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </Section>


          {/* Section 2: 相簿連結  */}
          <Section>
            <div className="flex items-center pb-3">
              <h2 className="p-0">相簿連結</h2>
              <Button variant="ghost" size="roundedIcon" className="ml-1"
                onClick={() => window.open("https://www.flickr.com/people/tooruche520/", '_blank')}
              >
                <Icon icon="material-symbols:link-rounded" width="24px" />
              </Button>
            </div>
            {/* TODO: 做RWD */}
            <Carousel className="w-full sm:hidden">
              <CarouselContent>
                {albumsData.map((link, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                    <MyCard link={link}/>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {albumsData.map((link, index) => (
                <MyCard key={index} link={link} className="sm:basis-1/2 lg:basis-1/3"/>
              ))}
            </div>
          </Section>

          {/* Section 3: UTAU */}
          <Section>
            <div className="flex items-center pb-3">
              <h2 className="p-0">UTAU</h2>
              <Button variant="ghost" size="roundedIcon" className="ml-1"
                onClick={() => window.open("https://youtube.com/playlist?list=PLbt8MdrgHfj3AqM5CDq9nL7LeMsoDpm4J", '_blank')}
              >
                <Icon icon="material-symbols:link-rounded" width="24px" />
              </Button>
            </div>
            {/* TODO: 做RWD */}
            <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/jNd10GluYZY?si=60QsYHWY2-jjRhlT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </AspectRatio>
            <div className="flex mt-4">
              <Button 
                variant="link" 
                className="ml-auto" 
                onClick={() => window.open("https://youtube.com/playlist?list=PLbt8MdrgHfj3AqM5CDq9nL7LeMsoDpm4J", '_blank')}
              >
              <Icon icon="si:youtube-line" />
                點我看播放清單
              </Button>
            </div>
          </Section>
          
          {/* Section 4: 其他UTAU作品 */}
          {/* <Section/> */}

          
        </div>
        {/* Footer */}
        <footer className="flex justify-center w-full border-grid border-t py-2 md:py-0">
          <div className="w-full lg:w-[1024px] py-4 px-12 ">
            <div className="text-balance text-center text-xs leading-loose text-muted-foreground md:text-left">
              Made by{" "}
              <a href="https://github.com/tooruche520" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Tooruche</a>
              {" "}in 2025.
              View the source code on{" "}
              <a href="https://github.com/tooruche520" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Github</a>.
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
