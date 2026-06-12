import {
  Link,
  Box,
  Button,
  Heading,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

import Layout from '../components/layouts/article'
import { Experience } from '../components/experience'
import Projects from '../components/projects'
import { Skills } from '../components/skills'
import { useTranslation } from '../libs/i18n'

const SCRATCH_URL = 'https://scratch.mit.edu/projects/79776564/embed'

const IndexPage = () => {
  const { t } = useTranslation()
  const dividerColor = useColorModeValue('#779ECB', '#f3a269')
  const accent = useColorModeValue('#5A82B8', '#f3a269')

  return (
    <Box>
      <Layout>
        <Section delay={0.1} id="sobre-mi">
          <Heading as="h2" variant="section-title">
            {t.about.title}
          </Heading>
          <Divider borderColor={dividerColor} />
          {t.about.paragraphs.map(paragraph => (
            <Paragraph key={paragraph.slice(0, 24)}>{paragraph}</Paragraph>
          ))}
          {t.about.bio.map(entry => (
            <BioSection m={6} key={entry.year}>
              <BioYear>{entry.year}</BioYear>
              {entry.text}
              {entry.linkLabel && (
                <>
                  {' '}
                  <Link
                    href={SCRATCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    textDecoration="underline"
                  >
                    {entry.linkLabel}
                  </Link>
                </>
              )}
            </BioSection>
          ))}
        </Section>

        <Section delay={0.2} id="experiencia">
          <Heading as="h2" variant="section-title">
            {t.experience.title}
          </Heading>
          <Divider borderColor={dividerColor} />
          {t.experience.entries.map(entry => (
            <Experience
              key={`${entry.company}-${entry.position}`}
              company={entry.company}
              position={entry.position}
              starttime={entry.starttime}
              endtime={entry.endtime}
              summary={entry.summary}
            />
          ))}
        </Section>

        <Section delay={0.3} id="educacion">
          <Heading as="h2" variant="section-title">
            {t.education.title}
          </Heading>
          <Divider borderColor={dividerColor} />
          {t.education.entries.map(entry => (
            <Experience
              key={`${entry.company}-${entry.position}`}
              company={entry.company}
              position={entry.position}
              starttime={entry.starttime}
              endtime={entry.endtime}
              summary={entry.summary}
            />
          ))}
        </Section>

        <Section delay={0.4} id="proyectos">
          <Projects />
        </Section>

        <Section delay={0.5} id="habilidades">
          <Heading as="h2" variant="section-title">
            {t.skills.title}
          </Heading>
          <Divider borderColor={dividerColor} />
          <Paragraph>{t.skills.paragraph}</Paragraph>
          <Heading as="h3" variant="skills" align="center">
            {t.skills.subtitle}
          </Heading>
          <br />
          <Skills />
        </Section>

        <Section delay={0.6} id="contacto">
          <Heading as="h2" variant="section-title">
            {t.contact.title}
          </Heading>
          <Divider borderColor={dividerColor} />
          <Paragraph>{t.contact.text}</Paragraph>
          <Box textAlign="center" my={6}>
            <Button
              as="a"
              href="mailto:diego171200@gmail.com"
              leftIcon={<EmailIcon />}
              bg={accent}
              color={useColorModeValue('white', '#18181a')}
              _hover={{ opacity: 0.85, transform: 'translateY(-2px)' }}
              mr={4}>
              {t.contact.ctaMail}
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/diego-mu%C3%B1oz-herranz-b03a42182/"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<ExternalLinkIcon />}
              variant="outline"
              borderColor={accent}
              color={accent}
              _hover={{ bg: useColorModeValue('#5A82B815', '#f3a26915'), transform: 'translateY(-2px)' }}>
              {t.contact.ctaLinkedIn}
            </Button>
          </Box>
        </Section>
      </Layout>
    </Box>
  )
}

export default IndexPage
