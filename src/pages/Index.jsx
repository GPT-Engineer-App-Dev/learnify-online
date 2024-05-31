import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Stack, Text, VStack, Select } from "@chakra-ui/react";
import { FaRocket, FaStar, FaUser } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">LangLearn</Heading>
        <HStack spacing={4}>
          <Select
            value={language}
            onChange={handleLanguageChange}
            variant="outline"
            bg="white"
            color="black"
            size="sm"
            width="150px"
            mr={4}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </Select>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Features</Button>
          <Button variant="link" color="white">Testimonials</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        bg="blue.500"
        color="white"
        p={10}
        minH="60vh"
      >
        <VStack align="start" spacing={4} maxW="lg">
          <Heading size="2xl">Learn a New Language Today!</Heading>
          <Text fontSize="lg">Join millions of learners worldwide and start your language journey with LangLearn.</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
        <Image src="/images/hero-image.png" alt="Language Learning" boxSize="300px" />
      </Flex>

      {/* Features Section */}
      <Box p={10} bg="gray.100">
        <Heading textAlign="center" mb={6}>Features</Heading>
        <HStack spacing={8} justify="center">
          <VStack>
            <IconButton aria-label="Interactive Lessons" icon={<FaRocket />} size="lg" isRound />
            <Text>Interactive Lessons</Text>
          </VStack>
          <VStack>
            <IconButton aria-label="Expert Tutors" icon={<FaUser />} size="lg" isRound />
            <Text>Expert Tutors</Text>
          </VStack>
          <VStack>
            <IconButton aria-label="Gamified Learning" icon={<FaStar />} size="lg" isRound />
            <Text>Gamified Learning</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Testimonials Section */}
      <Box p={10}>
        <Heading textAlign="center" mb={6}>What Our Users Say</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={8} justify="center">
          <Box bg="white" p={6} shadow="md" borderRadius="md">
            <Text>"LangLearn has transformed the way I learn languages. The interactive lessons are so engaging!"</Text>
            <Text mt={4} fontWeight="bold">- Jane Doe</Text>
          </Box>
          <Box bg="white" p={6} shadow="md" borderRadius="md">
            <Text>"The expert tutors are fantastic. I've made so much progress in just a few months."</Text>
            <Text mt={4} fontWeight="bold">- John Smith</Text>
          </Box>
          <Box bg="white" p={6} shadow="md" borderRadius="md">
            <Text>"I love the gamified learning experience. It makes studying so much fun!"</Text>
            <Text mt={4} fontWeight="bold">- Emily Johnson</Text>
          </Box>
        </Stack>
      </Box>

      {/* Footer */}
      <Box bg="blue.600" color="white" p={4} textAlign="center">
        <Text>&copy; 2023 LangLearn. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;