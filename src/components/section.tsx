import React from 'react'
import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import MyCard from "/src/components/my-card.tsx";

type SectionProps = {
  customProp?: string;
} & React.ComponentPropsWithRef<"section">;

const Section = ({ customProp, children, ...rest }: SectionProps) => {
  return (
    <section className="w-full my-8 px-8 sm:my-12 sm:px-12" {...rest}>
      {customProp} {children}
    </section>
  );
};


export default Section