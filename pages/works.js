import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbRUiMWheel from '../public/images/works/thumbRUiMWheel.png'
import thumbCalendar from '../public/images/works/thumbCalendar.png'
import thumbAtrix from '../public/images/works/thumbAtrix.png'
import thumbRUiMovie from '../public/images/works/thumbRUiMovie.png'
import thumbGerweissmotors from '../public/images/works/thumbGerweissmotors.png'

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
              id="Calendar"
              title="Calendar"
              thumbnail={thumbCalendar}
            >
              Events calendar
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="RUiMWheel"
              title="RUiMWheel"
              thumbnail={thumbRUiMWheel}
            >
              Wheel of Fortune with custom presets and funny videos
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="Atrix" title="Atrix" thumbnail={thumbAtrix}>
              Web3 Landing
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="RUiMovie"
              title="RUiMovie"
              thumbnail={thumbRUiMovie}
            >
              A platform for watching video content together
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
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
