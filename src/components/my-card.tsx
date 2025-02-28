import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardImage,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Links {
  title: string,
  description:string,
  url: string,
  image: string,
}

interface MyCardProps {
  link: Links;
  className?: string;
}

const onButtonClick = (url: string) => {
  console.log('Open link:', url)
  window.open(url, '_blank');
}

const MyCard = ({ link }: MyCardProps) => {
  return (
    <Card>
      <CardImage src={link.image} />
      <CardContent>
        <CardTitle className="sm:text-2xl text-xl">{link.title}</CardTitle>
        <div className="mt-1 sm:mt-2 sm:text-base text-sm opacity-80">{link.description}</div>
      </CardContent>
      <CardFooter className=" justify-between" >
        <Badge variant="outline">Filckr</Badge>
        <Button variant="default" size="sm" onClick={() => onButtonClick(link.url)}>
          <ArrowRight/>
          去看看
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MyCard