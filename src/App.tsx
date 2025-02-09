import { Icon } from "@iconify/react";

import Section from '/src/components/section.tsx'
import { Separator } from '/src/components/ui/separator.tsx';
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import MyCard from "/src/components/my-card.tsx";

import data_links from "/src/data/links.json";


function App() {

  return (
    <div className="flex flex-col items-center">
      {/* 大頭照、名、自界、個是連結 */}
      <div className="w-full my-6">
        <div className="w-full px-10 flex gap-4">
          <img 
            src="src/assets/head-pic.jpg" 
            className="rounded-full w-32"
          />
          <div className="">
            <h1>晴海徹</h1>
            <p>這是一串自介的文字，現在還沒想好</p>
            {/* 社群連結 */}
            <div className="flex">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon icon="fa6-brands:x-twitter" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon icon="lucide:twitch" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon icon="si:youtube-line" height={29}/>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon icon="mingcute:discord-line" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon icon="mynaui:brand-github" />
              </Button>
            </div>
          </div>

        </div>
        <Separator className="w-full -mt-4  z-[-1]"/>
      </div>
      

      {/* Section 1: 設定圖 */}
      <div className="my-6 w-full overflow-hidden">
        <h2 className="mx-12 pb-3">設定圖/委託</h2>
        <Carousel className="mx-12">
          <CarouselContent>
            <CarouselItem className="flex items-center justify-center">
              <img src="/src/assets/chra-setting-1.jpg" alt="Image" className="rounded-md object-cover" />
            </CarouselItem>
            <CarouselItem>
              <img src="src/assets/chra-setting-2.png" alt="Image" className="rounded-md object-cover" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>


      {/* Section 2: 相簿連結  */}
      <section className="my-6 px-12">
        <div className="flex items-center pb-3">
          <h2 className="p-0">相簿連結</h2>
          <Button variant="ghost" size="icon" className="rounded-full p-0">
            <Icon icon="material-symbols:link-rounded" width="24px" />
          </Button>
        </div>
        {/* TODO: 做RWD */}
        <div className="flex gap-4">
          <MyCard/>
          {/* <MyCard/> */}
        </div>
      </section>

      {/* Section 3: UTAU */}
      <section className="my-6 px-12 w-full">
        <div className="flex items-center pb-3">
          <h2 className="p-0">UTAU</h2>
          <Button variant="ghost" size="icon" className="rounded-full p-0">
            <Icon icon="material-symbols:link-rounded" width="24px" />
          </Button>
        </div>
        {/* TODO: 做RWD */}
        <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/jNd10GluYZY?si=60QsYHWY2-jjRhlT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </AspectRatio>
      </section>
      
      {/* Section 4: 其他UTAU作品 */}
      {/* <Section/> */}

      {/* Footer */}

    </div>
  )
}

export default App
