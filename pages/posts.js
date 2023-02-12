import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbWaiting from '../public/images/content/thumbWaiting.jpg'
const Posts = () => {
  return (
    <Layout title="Posts">
      <Container pt={7}>
        <Heading as="h4" fontSize={20} mb={4}>
          Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="I'll write something here soon."
              thumbnail={thumbWaiting}
            ></GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
