"use client"

import { Flex, Card, Box, Text, Avatar } from '@radix-ui/themes';

// const cardsData: Cards[] = [
//     {
//         id: 0,
//         title: "Component Librarys",
//         components: [
//             {
//                 id: 100,
//                 name: "material ui"
//             },
//             {
//                 id: 200,
//                 name: "bootstrap"
//             },
//         ]
//     },
//     {
//         id: 1,
//         title: "Javascript Librarys",
//         components: [
//             {
//                 id: 300,
//                 name: "react"
//             },
//             {
//                 id: 400,
//                 name: "node"
//             },
//         ]
//     },
//     {
//         id: 2,
//         title: "react helping Librarys",
//         components: [
//             {
//                 id: 500,
//                 name: "redux"
//             },
//             {
//                 id: 600,
//                 name: "recoil"
//             },
//         ]
//     },
//     {
//         id: 3,
//         title: "react helping Librarys",
//         components: [
//             {
//                 id: 700,
//                 name: "Fluter"
//             },
//             {
//                 id: 800,
//                 name: "react beautyful dnd"
//             },
//         ]
//     }
// ]

const DndExampleComponent = () => (
    <Card style={{ maxWidth: 240 }}>
      <Flex gap="3" align="center">
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="2" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="2" color="gray">
            Engineering
          </Text>
        </Box>
      </Flex>
    </Card>
)

export default DndExampleComponent;