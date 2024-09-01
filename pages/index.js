import {
  Link,
  Box,
  Heading,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

import Layout from '../components/layouts/article'
import { Experience } from '../components/experience'
import Projects from '../components/projects'
import { Skills } from '../components/skills'

const IndexPage = () => {
  return (
    <Box>
      <Layout title="Sobre Mí">
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Sobre Mí
          </Heading>
          <Divider
            borderColor={useColorModeValue('#779ECB', '#f3a269')}
          />
          <Paragraph>
            ¡Hola! Soy Diego, un apasionado desarrollador de software y
            entusiasta de la tecnología. Desde que comencé en 2014,
            he acumulado una sólida formación, incluyendo un Grado Superior en Desarrollo de Aplicaciones Multiplataforma y
            un Máster en Inteligencia Artificial y Data Science.
          </Paragraph>
          <Paragraph>
            He trabajado en empresas como Deloitte y KPMG, desempeñándo análisis
            de datos y auditoría IT, y siempre buscando nuevos retos y oportunidades
            para contribuir al avance tecnológico.
          </Paragraph>
          <Paragraph>
            Me caracterizo por ser responsable, dinámico y adaptable,
            disfrutando de la colaboración en equipo y la resolución creativa de problemas.
            Mi objetivo es desarrollar soluciones innovadoras que tengan un impacto positivo en la sociedad.
          </Paragraph>
          <BioSection m={6}>
            <BioYear>2000</BioYear>
            Nacido en Madrid, España
          </BioSection>
          <BioSection m={6}>
            <BioYear>2014</BioYear>
            Empiezo mis andaduras en la informática y la programación y realizo
            mi primer juego en Scratch{' '}
            <Link
              href="https://scratch.mit.edu/projects/79776564/embed"
              target="_blank"
              textDecoration="underline"
            >
              Ver
            </Link>
          </BioSection>
          <BioSection m={6}>
            <BioYear>2020</BioYear>
            Finalizo el Grado Medio de Sistemas Microinformáticos y Redes y
            empiezo a desarrollar mis primeros proyectos.
          </BioSection>
          <BioSection m={6}>
            <BioYear>2022</BioYear>
            Finalizo el Grado Superior en Desarrollo de Aplicaciones
            Multiplataforma junto al Higher Nacional Diploma in Computing y
            comienzo a trabajar como analista de datos en Deloitte.
          </BioSection>
          <BioSection m={6}>
            <BioYear>2022 - Sep</BioYear>
            Con la idea de avanzar en mi carrera profesional dejo la anterior empresa y
            comienzo a trabajar como Junior IT Audit en KPMG, también empiezo a introducirme en el
            Data Science y Estudio un Máster en Inteligencia Artificial y Data Science en la
            Universidad Europea de Madrid.
          </BioSection>
          <BioSection m={6}>
            <BioYear>2023</BioYear>
            Continúo mis andaduras en KPMG continuando con mi ambición y formandome en nuevas tecnologías.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experiencia Laboral
          </Heading>
          <Divider
            borderColor={useColorModeValue('#779ECB', '#f3a269')}
          />
          <Experience
            company={"KPMG"}
            position={"Data Analyst Staff II"}
            starttime={"Sep 2023"}
            endtime={"Actualidad"}
            summary={
              `En mi rol actual, lidero la migración a Azure Databricks y 
              el desarrollo de aplicaciones estratégicas para el departamento 
              de auditoría, optimizando procesos con Python y PySpark, y gestionando 
              datos clave para Data Analytics y Auditoría Financiera en SQL Server 
              y Alteryx. Además, me encargo de la comunicación y gestión de datos 
              con los clientes.`
            } />
          <Experience
            company={"KPMG"}
            position={"Data Analyst Staff I"}
            starttime={"Sep 2022"}
            endtime={"Sep 2023"}
            summary={
              `Migración de sistemas desde SQL Server hacia Azure Databricks utilizando Python y PySpark, optimizo datos con Alteryx y desarrollo 
              aplicaciones web con Python y Django. Además, proceso datos para análisis y 
              auditoría financiera, contribuyendo al éxito empresarial mediante la toma 
              de decisiones informadas y la mejora de la eficiencia y escalabilidad.`
            } />
          <Experience
            company={"Deloitte"}
            position={"Junior Delivery Analyst"}
            starttime={"Abr 2022"}
            endtime={"Aug 2023"}
            summary={
              `Analista de Datos y Experto en Python en una entidad 
              financiera de España, me encargaba del análisis estratégico 
              de datos para la toma de decisiones. Utilizaba herramientas como 
              PySpark y HUE en entornos Big Data y espacios cloud para extraer y 
              analizar grandes volúmenes de información. Mi trabajo incluía crear informes 
              detallados para respaldar decisiones clave, optimizando procesos y generando 
              valor para la entidad financiera y sus clientes.`
            } />
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Educación
          </Heading>
          <Divider
            borderColor={useColorModeValue('#779ECB', '#f3a269')}
          />
          <Experience
            company={"Universidad Europea"}
            position={"Master en Inteligencia Artifiial"}
            starttime={"2022"}
            endtime={"2023"}
            summary={
              `Machine Learning
                · Data Science
                · Python/R
                · Pytorch
                · RapidMiner Studio
                · Redes Neuronales y Redes Convolucionales
                · Deep Learning
                · Cognitive Computing
                · Reconocimiento de voz y asistentes virtuales
                · Despliegue de modelos en producción.
                · IBM Cloud
                · Microsoft Azure
                · TensorFlow/Keras
                · Computación Cuántica Qiskit Framework`
            } />
          <Experience
            company={"CEV. Escuela Superior de Comunicación, Imagen y Sonido"}
            position={"Grado Superior en Desarrollo de Aplicaciones Multiplataforma"}
            starttime={"2020"}
            endtime={"2022"}
            summary={
              `Bases de Datos
                · Entornos de Desarrollo
                · Formación y Orientación Laboral
                · Lenguaje de Marcas y Sistemas de Gestión de Información
                · Programación
                · Sistemas Informáticos
                · Diseño, Modelado y Animación 3D
                · Gamificación y Diseño de Juegos
                · Acceso a Datos
                · Desarrollo de Interfaces
                · Empresa e Iniciativa Emprendedora
                · Inglés
                · Programación de Servicios y Procesos
                · Programación Multimedia y Dispositivos Móviles
                · Sistemas de Gestión Empresarial
                · Trabajo Fin de Grado
                · Formación en Centros de Trabajo`
            } />
          <Experience
            company={"Pearson College London"}
            position={"Pearson BTEC Level 5 Higher National Diploma in Computing"}
            starttime={"2020"}
            endtime={"2022"}
            summary={
              `Programming
                · Networking
                · Profesional Practice
                · Database Design & Development
                · Security
                · Managing a successful computing project
                · Computing Research Project
                · Business Intelligence
                · Prototyping
                · Application Program Interfaces (APIs)
                · Application Development
                · Software Development Lifeycles
                · Website Design & Development
                · Virtual & Augmented Reality Development
                · Games Development`
            } />
          <Experience
            company={"Centro de Estudios Superiores Fuencarral"}
            position={"Grado Medio de Técnico en Sistemas Microinformáticos y Redes"}
            starttime={"2018"}
            endtime={"2020"}
            summary={
              `Linux · Django · Administración de sistemas · MySQL · VirtualBox · XAMPP · Microsoft Office · CSS · Linux Server · Reparación de equipos informáticos · Microsoft Exchange · JavaScript · Packet Tracer · Directorio activo · HTML`
            } />
        </Section>

        <Section delay={0.4}>
          <Projects />
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Habilidades
          </Heading>
          <Divider
            borderColor={useColorModeValue('#779ECB', '#f3a269')}
          />
          <Paragraph>
            Como profesional, he desarrollado aplicaciones multiplataforma, creando soluciones que funcionan en diversas plataformas para adaptarse
            a las demandas del mercado. Además, tengo experiencia en diseñar y construir sistemas BackEnd robustos para aplicaciones y servicios web.
            También soy competente en la planificación y configuración de infraestructuras de servidor,
            asegurando un rendimiento óptimo en todas las etapas de desarrollo.
          </Paragraph>
          <Heading as="h3" variant="skills" align="center">
            Software y Lenguajes
          </Heading>
          <br />
          <Skills />
        </Section>
      </Layout>
    </Box>
  )
}

export default IndexPage