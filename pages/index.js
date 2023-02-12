import NextLink from 'next/link'
import {
  Link,
  Button,
  Container,
  Box,
  Heading,
  Image,
  List,
  Icon,
  useColorModeValue,
  ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTelegram
} from 'react-icons/io5'
import { FaTelegramPlane } from 'react-icons/fa'

const Page = () => {
  return (
    <Layout>
      <Container pt={7}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Mexico!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" size="lg" variant="page-title">
              Danil Lotfrakhmanov
            </Heading>
            <p>Digital creator ( Developer / Designer / Architect ) </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/Danil.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            My main activity is freelancing and full-stack development. The
            place of residence is Mexico. I have a strong passion for building
            IT products, exploring new technologies and developing the digital
            space. Everything you need to launch products, from planning and
            designing to solving real problems with code in one person.
            Strengths - high productivity, ability to learn quickly, creativity,
            stamina (I can work 16 hours on an interesting project), stress
            tolerance and broad knowledge of IT. Weaknesses - addiction to
            coffee.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="telegram">
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Magnitogorsk, Russia.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            First steps in programming.
          </BioSection>
          <BioSection>
            <BioYear>2018-2023</BioYear>
            Worked at "Gazprombank", Russia.
          </BioSection>
          <BioSection>
            <BioYear>2019-2023</BioYear>
            Studied at the ITMO National Research University.
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Working as a freelancer.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            <Link href="https://holding.formula1.com/">Formula 1</Link>,{' '}
            <Link href="https://www.chess.com/member/nyamkep">Chess</Link>,
            Artificial Intelligence,{' '}
            <Link href="https://www.torproject.org/">Ethical Hacking</Link>,
            Language Learning
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Yawpets" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @nyamkep
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.t.me/YawpetS/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<Icon as={FaTelegramPlane} />}
                >
                  @YawpetS
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/danil-lotfrakhmanov-8080ab212/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Danil Lotfrakhmanov
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/_danya_1st/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @_danya_1st
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
