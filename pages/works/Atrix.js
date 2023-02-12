import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Atrix">
      <Container pt={7}>
        <Title>Atrix</Title>
        <P>
          Atrix is an AMM built on Solana which utilizes Serum’s order books and
          allows for permissionless liquidity pool and farm creation. Atrix will
          provide users and projects the best experience for swapping on and
          adding liquidity to Serum, and interacting with farms.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://atrix.finance/">
              https://atrix.finance/ <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Blockchain</Meta>
            <span>Web3</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Typescript, Documentation</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/Atrix-01.png" alt="Atrix" />
        <WorkImage src="/images/works/Atrix-02.png" alt="Atrix" />
        <WorkImage src="/images/works/Atrix-03.png" alt="Atrix" />
      </Container>
    </Layout>
  )
}

export default Work
