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
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const MyCard = ( {name} ) => {
  return (
    <Card>
      <CardImage src="public/2022_furmosa.jpg" alt="" />
      <CardContent>
        <CardTitle>2024 獸無限</CardTitle>
        <p>修完進軍營</p>
      </CardContent>
      <CardFooter className=" justify-between" >
        <Badge variant="outline">Filckr</Badge>
        <Button variant="secondary">
          <Icon icon="material-symbols-light:chevron-right-rounded" />
          去看看
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MyCard