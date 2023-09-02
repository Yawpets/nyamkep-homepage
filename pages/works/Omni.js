import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Omni">
      <Container pt={7}>
        <Title>Omni art central</Title>
        <P>Omni art central: Art gallery & marketplace.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://omnipresenti.com/">
              https://omnipresenti.com/ <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>
              Reporting and Analytics System, Discount Application Capability,
              Integration with Payment Systems
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              NextJS, React, Node.js, Cloudflare, Stripe SDK, Redux Google
              Workspace
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/Omni-01.png" alt="Omni" />
        <WorkImage src="/images/works/Omni-02.png" alt="Omni" />
        <WorkImage src="/images/works/Omni-03.png" alt="Omni" />
      </Container>
    </Layout>
  )
}

export default Work
