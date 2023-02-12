import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Gerweissmotors">
      <Container pt={7}>
        <Title>Gerweissmotors</Title>
        <P>GerWeiss Motors: Electrifying fleets in the Philippines.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.gerweissmotors.com/">
              https://www.gerweissmotors.com/ <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, React, JS</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/Gerweissmotors-01.png"
          alt="Gerweissmotors"
        />
        <WorkImage
          src="/images/works/Gerweissmotors-02.png"
          alt="Gerweissmotors"
        />
        <WorkImage
          src="/images/works/Gerweissmotors-03.png"
          alt="Gerweissmotors"
        />
      </Container>
    </Layout>
  )
}

export default Work
