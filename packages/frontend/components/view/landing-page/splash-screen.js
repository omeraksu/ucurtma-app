import React, { useRef } from 'react';
import { Navigation } from 'react-feather';
import NextLink from 'next/link';
import Head from 'next/head';
import {
  Flex,
  Link,
  Icon,
  Box,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/core';
import Container from '../../ui/container';
import Application from '../../../pages/application';

function SplashScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const application = useRef();
  return (
    <>
      <Head>
        <title>Uçurtma Projesi</title>
      </Head>
      <Box
        position="absolute"
        top="0"
        right="0"
        w={{ base: '100%', md: '50%' }}
        h={{ base: '250px', md: '100%' }}
        backgroundImage='url("/background.svg")'
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center center"
      />
      <Container
        height={{ base: 'auto', md: '100vh' }}
        m="0 auto"
        mt={0}
        overflow="hidden"
        p={{ base: '2rem', md: 0 }}
      >
        <Flex
          flexDir="column"
          justifyContent={{ base: 'flex-start', md: 'center' }}
          mt={{ base: '250px', md: 0 }}
          px="10px"
        >
          <NextLink href="/">
            <Link display="contents" id="logo">
              <Icon name="logo" size="4rem" />
            </Link>
          </NextLink>
          <Box
            zIndex="2"
            bg="white"
            maxW={{ base: '100%', md: '55%' }}
            borderRadius="3px"
            py={{ base: 4, md: 8 }}
            pr={{ md: 12 }}
            mt={{ base: '1rem' }}
          >
            <Heading size="2xl" maxW="380px" lineHeight="1.2" color="gray.600">
              Uçurtma Projesi Nedir?
            </Heading>
            <Text mt="2rem" color="gray.500">
              Öğrencilerin, hayallerini gerçekleştirebilmeleri için gereken
              finansal desteği bulmalarına yardım etmeyi amaçlayan bir
              platformdur.
            </Text>
            <Text mt="1rem" color="gray.500">
              Bunu öğrencilerle yardımseverleri buluşturarak burs
              alabilmelerinin garantisini merkeziyetsiz bir şekilde sunar.
            </Text>
            <Button
              variant="solid"
              mt="2rem"
              bg={{ base: 'gray.100', md: 'white' }}
              h={16}
              w={{ base: '100%', md: '115%' }}
              flexShrink="0"
              justifyContent="space-between"
              boxShadow="0 0 12px rgba(124, 124, 124, 0.16)"
              onClick={onOpen}
            >
              Başvuru Yap
              <Icon as={Navigation} size="28px" mr="0.5rem" />
            </Button>
          </Box>
        </Flex>
      </Container>
      <Modal size="5xl" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Flex ref={application} flexDir="column" backgroundColor="gray.700">
            <Application />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SplashScreen;