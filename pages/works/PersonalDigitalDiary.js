import { Container, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Calendar">
      <Container pt={7}>
        <Title>Personal Digital Diary</Title>
        <P>
          Events Calendar supporting Google Maps and Google Calendar, with the
          ability to add images and create shared calendars for different users.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <span>NDA</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web/iOS/Anroid</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>Quick back-end in Python, Proprietary E-mail server</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Django, Python, JS, Jinja, PostgreSQL, QT</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/Calendar-01.png" alt="Calendar" />
        <WorkImage src="/images/works/Calendar-02.png" alt="Calendar" />
        <WorkImage src="/images/works/Calendar-03.png" alt="Calendar" />
      </Container>
    </Layout>
  )
}

export default Work
