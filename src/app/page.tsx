import { Flex } from '@chakra-ui/react';

import { CTASection } from '@/components/layout/cta-section';
import { SomeImage } from '@/components/layout/some-image';
import { SomeText } from '@/components/layout/some-text';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <SomeText />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};
export default Home;
