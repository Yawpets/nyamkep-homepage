import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="DEM">
      <Container pt={7}>
        <Title>Digital Edge Media</Title>
        <P>
          Digital Edge Media is a full-service AV solutions provider for
          businesses, schools, churches, government agencies and more.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://digitaledgemedia.ca/">
              https://digitaledgemedia.ca/ <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>CMS</Meta>
            <span>Wordpress</span>
          </ListItem>
          <ListItem>
            <Meta>Plugins</Meta>
            <span>
              WooCommerce, Elementor, HubSpot Wordpress plugin, Crocoblock
              JetElements
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              PHP, MySQL, Apache, Google Analytics, Google Workspace, GSAP
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/Dem-01.png" alt="Dem" />
        <WorkImage src="/images/works/Dem-02.png" alt="Dem" />
        <WorkImage src="/images/works/Dem-03.png" alt="Dem" />
      </Container>
    </Layout>
  )
}

export default Work
