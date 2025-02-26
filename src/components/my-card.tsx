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
        <CardTitle>{link.title}</CardTitle>
        <p>{link.description}</p>
      </CardContent>
      <CardFooter className=" justify-between" >
        <Badge variant="outline">Filckr</Badge>
        <Button variant="default" onClick={() => onButtonClick(link.url)}>
          <ArrowRight/>
          去看看
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MyCard