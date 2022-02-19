import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Stack,
  Table,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

export default function ServerViewPage() {
  return (
    <Box minHeight='100vh'>
      <Center pt={10}>
        <Heading>Customer Events</Heading>
      </Center>
      <Center pt={10}>
        <Accordion
          defaultIndex={[0]}
          minWidth='80vw'
          maxWidth='80vw'
          allowToggle
          bg='white'
        >
          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                <Stack direction='row' spacing={7}>
                  <Avatar
                    name='Dan Abrahmov'
                    src='https://bit.ly/dan-abramov'
                    size='lg'
                  >
                    <AvatarBadge
                      borderColor='papayawhip'
                      bg='tomato'
                      boxSize='1.25em'
                      p={2}
                    >
                      <Text fontSize='1rem'>1</Text>
                    </AvatarBadge>
                  </Avatar>
                  <Center>
                    <Box flexDirection='column' textAlign='left'>
                      <Heading as='h6' size='md'>
                        Customer
                      </Heading>
                      <Text size='md'>Impairments</Text>
                    </Box>
                  </Center>
                </Stack>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Timestamp</Th>
                    <Th>Event</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                  </Tr>
                </Tbody>
              </Table>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </Box>
  );
}
