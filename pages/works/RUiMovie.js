import { Container, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="RUiMovie">
      <Container pt={7}>
        <Title>RUiMovie</Title>
        <P>
          Service for viewing together any video files, from the local located
          on your computer, to any video content posted on the Internet. SPA
          with a separate database and server for viewing, voice communication
          and chat.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <span>NDA</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>No delay, Proprietary server, Voice chat</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue, JS, NuxtJS, Sass</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/RUiMovie-01.png" alt="RUiMovie" />
        <WorkImage src="/images/works/RUiMovie-02.png" alt="RUiMovie" />
        <WorkImage src="/images/works/RUiMovie-03.png" alt="RUiMovie" />
      </Container>
    </Layout>
  )
}

export default Work
