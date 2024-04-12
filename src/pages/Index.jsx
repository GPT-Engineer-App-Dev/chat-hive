// Complete the Index page component here
// Use chakra-ui and react-icons for UI components
import { Box, Flex, Input, Button, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh" p={4} bg="gray.100">
      {/* Contacts List */}
      <VStack width="30%" bg="white" p={4} spacing={4} borderRight="1px" borderColor="gray.200">
        <Text fontSize="2xl" fontWeight="bold">
          Contacts
        </Text>
        <Divider />
        {["Alice", "Bob", "Charlie", "Diana"].map((contact, index) => (
          <Button key={index} variant="ghost" justifyContent="flex-start" width="100%">
            {contact}
          </Button>
        ))}
      </VStack>

      {/* Chat Area */}
      <VStack flex="1" p={4}>
        <Box flex="1" bg="white" width="100%" p={4} overflowY="auto">
          <VStack spacing={4} align="start">
            <HStack alignSelf="flex-start">
              <Text fontSize="md" bg="blue.100" p={2} borderRadius="lg">
                Hello, how are you?
              </Text>
            </HStack>
            <HStack alignSelf="flex-end">
              <Text fontSize="md" bg="green.100" p={2} borderRadius="lg">
                I'm fine, thanks! And you?
              </Text>
            </HStack>
            {/* Add more messages here */}
          </VStack>
        </Box>
        <HStack width="100%">
          <Input placeholder="Type a message..." />
          <Button colorScheme="blue">
            <FaPaperPlane />
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Index;
