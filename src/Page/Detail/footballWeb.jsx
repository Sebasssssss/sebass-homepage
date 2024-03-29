import React from 'react'
import Layout from '../../components/layouts/article'
import { Link as ReactLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Highlight,
  SimpleGrid,
  Text,
  useColorModeValue,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Dot from '../../components/Dots'
import DetailImage from '../../components/BlurImage'
import thumbnail from '/footballcard.webp'
import thumbnail1 from '/football.webp'
import thumbnail2 from '/football2.webp'
import thumbnail3 from '/football3.webp'
import thumbnail4 from '/football4.webp'
import thumbnail5 from '/football5.webp'
import thumbnail6 from '/football6.webp'

export default function FootballWeb() {
  return (
    <Layout delay="0.2">
      <Box my="6">
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.300" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink
                  as={ReactLink}
                  to="/works"
                  fontWeight="semibold"
                  color={useColorModeValue('#ff6d28', '#ea047e')}
                >
                  Works
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <Text fontSize="lg" fontWeight="bold" className="font-mplus">
                  Football web
                </Text>
              </BreadcrumbItem>
            </Breadcrumb>
            <Text
              fontSize="xs"
              fontWeight="bold"
              w="max"
              px="1"
              mx="2"
              rounded="sm"
              bg={useColorModeValue('#ff6d2850', '#00f5ff30')}
              color={useColorModeValue('#ff6d28', '#00f5ff50')}
            >
              2022
            </Text>
          </Flex>
          <Box textAlign="right">
            <Dot to="https://github.com/Sebasssssss/Football-Wbsite-Frontend-Backend" />
          </Box>
        </Flex>
        <Text textAlign="justify" py="4" textIndent="1em">
          <Highlight
            query={['php', 'backend', 'cron']}
            styles={{ color: useColorModeValue('#ff6d28', '#ea047e') }}
          >
            Manchester United website concept with backend included! This is my
            first full website in PHP. It includes a cron which purpose is to
            automatically install the database with simple example information
            and make the website ready to use!
          </Highlight>
        </Text>
        <SimpleGrid row="2" gap="2" px="4" py="1">
          <Flex alignItems="center" gap="2">
            <Badge>Stack</Badge>
            <Text>PHP / MySQL / JavaScript</Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>libraries</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              Materialize CSS
            </Text>
          </Flex>
          <Flex alignItems="flex-start">
            <Text>
              <Badge>learning</Badge>
            </Text>
            <Text textAlign="left" textIndent="1em">
              <Highlight
                query={['backend']}
                styles={{ color: useColorModeValue('black', '#ea047e') }}
              >
                On this website, I learned a lot in terms of how the backend
                works, how to use databases, how to retrieve data from a
                database and display it on the web, and much more!
              </Highlight>
            </Text>
          </Flex>
        </SimpleGrid>
        <SimpleGrid gap="8" py="6">
          <DetailImage
            hash="LwI#ZDoz~ps:xtt7RkWVxuofM{WA"
            src={thumbnail}
            alt="MainImage"
          />
          <DetailImage
            hash="L35qCd}sRP0}5+1cn,$j#8S4xuSz"
            src={thumbnail1}
            alt="secondImage"
          />
          <DetailImage
            hash="L16tgy%g0N~C}@5kIVtk009@$|0y"
            src={thumbnail2}
            alt="thirdImage"
          />
          <DetailImage
            hash="L26*Ez~V0g0#009ZE1NG.TJ7=e-p"
            src={thumbnail3}
            alt="fourthImage"
          />

          <DetailImage
            hash="L26aq^x]R6M_~qtSxtRj4oxu-:kC"
            src={thumbnail4}
            alt="fifthImage"
          />
          <DetailImage
            hash="LpF}~9j[jZj[DifQf6fQ~qfkbHj["
            src={thumbnail5}
            alt="sixthImage"
          />
          <DetailImage
            hash="LiGRbvayjFayDijsjZf6_NoJfRo0"
            src={thumbnail6}
            alt="MainImage"
          />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}
