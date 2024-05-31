import { Box, Heading, Progress, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Dashboard = () => {
  // Sample data for lessons and progress
  const [lessons, setLessons] = useState([
    { id: 1, title: "Lesson 1: Basics", completed: true },
    { id: 2, title: "Lesson 2: Intermediate", completed: false },
    { id: 3, title: "Lesson 3: Advanced", completed: false },
  ]);

  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <Box p={10}>
      <Heading mb={6}>Your Progress</Heading>
      <Progress value={progress} size="lg" colorScheme="teal" mb={6} />
      <VStack spacing={4} align="start">
        {lessons.map(lesson => (
          <Box key={lesson.id} p={4} bg={lesson.completed ? "green.100" : "red.100"} w="100%" borderRadius="md">
            <Text>{lesson.title}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Dashboard;