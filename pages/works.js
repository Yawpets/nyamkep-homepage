import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbOmni from '../public/images/works/thumbOmni.png'
import thumbCalendar from '../public/images/works/thumbCalendar.png'
import thumbAtrix from '../public/images/works/thumbAtrix.png'
import thumbDem from '../public/images/works/thumbDem.png'
import thumbGerweissmotors from '../public/images/works/thumbGerweissmotors.png'
import thumbVaf from '../public/images/works/thumbVaf.png'
import thumbJoco from '../public/images/works/thumbJoco.png'

const Works = () => {
  return (
    <Layout>
      <Container pt={7}>
        <Heading as="h3" fontsize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="PersonalDigitalDiary"
              title="Personal Digital Diary"
              thumbnail={thumbCalendar}
            >
              Personal digital diary allowing you to add authorized users
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="Omni" title="Omni" thumbnail={thumbOmni}>
              Art marketplace
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="Atrix" title="Atrix" thumbnail={thumbAtrix}>
              Web3 Landing
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="DEM"
              title="Digital Edge Media"
              thumbnail={thumbDem}
            >
              Digital Signage Solution providers
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="Gerweissmotors"
              title="Gerweissmotors"
              thumbnail={thumbGerweissmotors}
            >
              GerWeiss Motors: Electrifying fleets in the Philippines
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="VAF" title="VAF" thumbnail={thumbVaf}>
              Web3 NFT game & marketplace
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="JOCO" title="JOCO cups" thumbnail={thumbJoco}>
              Online store for JOCO
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
