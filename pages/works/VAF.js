import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="VAF">
      <Container pt={7}>
        <Title>VAF</Title>
        <P>Web3 NFT game & marketplace</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://vaffacosmo.io/">
              https://vaffacosmo.io/ <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Blockchain</Meta>
            <span>Ethereum</span>
          </ListItem>
          <ListItem>
            <Meta>Smart contracts</Meta>
            <span>Solidity</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NextJS, Web3.js, MongoDB</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/Vaf-01.png" alt="VAF" />
        <WorkImage src="/images/works/Vaf-02.png" alt="VAF" />
        <WorkImage src="/images/works/Vaf-03.png" alt="VAF" />
      </Container>
    </Layout>
  )
}

export default Work
