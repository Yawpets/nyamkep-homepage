import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Joco">
      <Container pt={7}>
        <Title>JOCO cups</Title>
        <P>JOCO cups online store.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://jococups.com/">
              https://jococups.com/ <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>CMS</Meta>
            <span>Wordpress</span>
          </ListItem>
          <ListItem>
            <Meta>Plugins</Meta>
            <span>
              WooCommerce, MailChimp for WooCommerce, Smash Baloon Instagram
              Feed, Jetpack
            </span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>Cart Functionality</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              PHP, MySQL, Apache, Amazon Web Services, Google Analytics, Amazon
              S3, MailChimp
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/Joco-01.png" alt="Joco" />
        <WorkImage src="/images/works/Joco-02.png" alt="Joco" />
        <WorkImage src="/images/works/Joco-03.png" alt="Joco" />
      </Container>
    </Layout>
  )
}

export default Work
