'use client';

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import ProjectHeader from '@/components/ProjectHeader';

const ProjectDetails = () => {
  return (
    <Box
      minH="100vh"
      bg="gray.50"
      py={12}
      px={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Project Header */}
      <ProjectHeader />

      {/* Context Section */}
      <Card.Root
        maxW="4xl"
        w="full"
        variant="elevated"
        shadow="lg"
        borderRadius="xl"
        mt={8}
      >
        <Card.Body>
          <Heading as="h2" size="lg" color="gray.900" mb={4}>
            Context
          </Heading>
          <Text color="gray.700">
            Details about the project&apos;s partners, clients, target audience,
            and constraints.
          </Text>
        </Card.Body>
      </Card.Root>
      {/* Design Process Section */}
      <Card.Root
        maxW="4xl"
        w="full"
        variant="elevated"
        shadow="lg"
        borderRadius="xl"
        mt={8}
      >
        <Card.Body>
          <Heading as="h2" size="lg" color="gray.900" mb={4}>
            Design Process
          </Heading>
          <Text color="gray.700">
            A narrative explaining the instructional design approach,
            challenges, and solutions.
          </Text>
        </Card.Body>
      </Card.Root>

      {/* Highlights Section */}
      <Card.Root
        maxW="4xl"
        w="full"
        variant="elevated"
        shadow="lg"
        borderRadius="xl"
        mt={8}
      >
        <Card.Body>
          <Heading as="h2" size="lg" color="gray.900" mb={4}>
            Highlights
          </Heading>
          <Text color="gray.700">
            Key decisions, learning theories, and instructional strategies that
            were applied.
          </Text>
        </Card.Body>
      </Card.Root>

      {/* Impact Section */}
      <Card.Root
        maxW="4xl"
        w="full"
        variant="elevated"
        shadow="lg"
        borderRadius="xl"
        mt={8}
      >
        <Card.Body>
          <Heading as="h2" size="lg" color="gray.900" mb={4}>
            Impact
          </Heading>
          <Text color="gray.700">
            Results, data analysis, learner feedback, and testimonials.
          </Text>
        </Card.Body>
      </Card.Root>

      {/* Reflection Section */}
      <Card.Root
        maxW="4xl"
        w="full"
        variant="elevated"
        shadow="lg"
        borderRadius="xl"
        mt={8}
        mb={12}
      >
        <Card.Body>
          <Heading as="h2" size="lg" color="gray.900" mb={4}>
            Reflection
          </Heading>
          <Text color="gray.700">
            Personal insights, skills gained, and lessons learned during the
            project.
          </Text>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default ProjectDetails;
