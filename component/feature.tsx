import React from "react";
import {HStack, Icon, Text, StackProps, Box, Flex} from "@chakra-ui/react"
import { MoneyBackGuaranteeIcon, NoFee, MonthlySubscription } from "@/icons/icon";

interface FeatureProps extends StackProps{
    icon: any;
}

function Feature(props: FeatureProps){
    const {icon, children, ...rest} = props;
    return(
        <HStack {...rest} spacing="24px">
            <Icon as={icon} boxSize="48px"/>
            <Text textAlign="left" fontSize="18px" fontWeight="700">{children}</Text>
        </HStack>
    );
}

export function Features(){
    return (
        <>
        
        <Box maxW="1024px" m="auto" pt="60px" pb="32px">
        
            <HStack px="48px" spacing="20px">
            <Flex direction={["column", "column", "row"]} >
            <Feature m="15px" icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>
            <Feature m="15px" icon={NoFee}>No setup fees 100% hassle-free</Feature>
            <Feature m="15px" icon={MonthlySubscription}>No monthly subscription Pay once and for all</Feature>
            </Flex>
        </HStack>
        
        </Box>
        
        </>
    )
}