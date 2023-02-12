import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="RUiMWheel">
      <Container pt={7}>
        <Title>RUiMWheel</Title>
        <P>
          Wheel of fortune made for a small group of friends with the ability to
          customize presets, add funny videos and your own music while
          scrolling, SPA With Discord authentication.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <span>NDA</span>
          </ListItem>
          <ListItem>
            <ListItem>
              <Meta>Features</Meta>
              <span>Discord authentication, User-friendly ORM</span>
            </ListItem>
            <Meta>Stack</Meta>
            <span>
              T3, NextJS, Typescript, React, tRPC, prisma ORM, Discord API
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/RUiMWheel-01.png" alt="RUiMWheel" />
        <WorkImage src="/images/works/RUiMWheel-02.png" alt="RUiMWheel" />
        <WorkImage src="/images/works/RUiMWheel-03.png" alt="RUiMWheel" />
      </Container>
    </Layout>
  )
}

export default Work
