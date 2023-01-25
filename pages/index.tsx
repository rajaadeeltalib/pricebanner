import React from 'react'
import{Box, Heading, Text, Flex, Button} from "@chakra-ui/react"

import Pricing from '../component/pricing'
import { Features } from '@/component/feature'


export  default function Home() {
  return (
    
    <>
    <Box pb="28" as="section">

    
    <Box color="gray.50" bg="purple.600" pt="90px" pb="198px" px="8" textAlign={["left", "left", "center"]}
    >
        <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]} >
            Simple Pricing for your business
            </Heading>
        <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="4" >
            Plans that are carefully crafted to suit your business.
            </Text>
            
    </Box>
    </Box>
    <Pricing />
    <Features />
    </>
    
  )
};




   
