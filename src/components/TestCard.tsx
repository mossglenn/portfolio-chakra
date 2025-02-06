'use client';

import { Card, Text } from '@chakra-ui/react';
console.log(Card); // Should log a function, NOT an object

const TestCard = () => {
  return (
    <Card.Root size="md" maxW="lg" shadow="md" p={5} borderRadius="lg">
      <Card.Header>Test Card</Card.Header>

      <Card.Body>
        <Text>This is a simple Chakra UI Card.</Text>
      </Card.Body>
    </Card.Root>
  );
};

export default TestCard;
