import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      spacing={4}
      align="start"
      bg="white"
      p={4}
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="md"
        boxSize="100%"
        objectFit="cover"
      />
      <VStack align="start" spacing={2} width="100%">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack spacing={2} justify="end" width="100%">
        <Text color="blue.500" fontWeight="bold">
          Learn More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
