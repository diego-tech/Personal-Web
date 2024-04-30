import {
    Badge,
    Link,
    List,
    ListItem,
    useColorModeValue,
    Heading,
    Divider,
    UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta, UnderlinedText } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="breastCancerTFM">
            <Title>
                Breast Cancer TFM
                <Badge
                    bgColor={useColorModeValue('#779ECB', '#f3a269')}
                    color={useColorModeValue('white', 'black')}
                    ml={2}
                    mb={1}
                >
                    {' '}
                    2023{' '}
                </Badge>
            </Title>
            <P>
                Este proyecto tiene como objetivo desarrollar un mnodelo de inteligencia artifical capaz
                de identificar la malignidad de las masas tumorales en imágenes médicas de cáncer de mama.
            </P>
            <P>
                Los principales hitos incluyen:
            </P>
            <UnorderedList>
                <ListItem>
                    <UnderlinedText>Recopilación y Preparación de Datos</UnderlinedText>: Se recolectó y preparó un dataset de imágenes médicas etiquetadas con casos positivos y negativos de cáncer de mama.
                </ListItem>
                <ListItem>
                    <UnderlinedText>Reducción de Datos</UnderlinedText>: Se utilizó el aprendizaje transferido para reducir el tamaño del dataset inicial, aprovechando modelos preentrenados.
                </ListItem>
                <ListItem>
                    <UnderlinedText>Análisis Exploratorio de Datos</UnderlinedText>: Se realizó un análisis exploratorio para comprender las características del dataset.
                </ListItem>
                <ListItem>
                    <UnderlinedText>Modelos de Redes Convolucionales (CNN)</UnderlinedText>: Se construyeron modelos basados en CNN para la detección de cáncer de mama en imágenes médicas, extrayendo características relevantes.
                </ListItem>
                <ListItem>
                    <UnderlinedText>Entrenamiento y Ajuste de Parámetros</UnderlinedText>: Se entrenó el modelo con los datos preparados y se ajustaron los parámetros de la red convolucional. La precisión se midió en el conjunto de entrenamiento.
                </ListItem>
                <ListItem>
                    <UnderlinedText>Optimización de Hiperparámetros</UnderlinedText>: Se buscó la configuración óptima de hiperparámetros, como el número de neuronas, capas y iteraciones, para las imágenes.
                </ListItem>
                <ListItem>
                    <UnderlinedText>Validación de Resultados</UnderlinedText>: Se validaron los resultados utilizando un conjunto de datos separado para pruebas.
                </ListItem>
            </UnorderedList>
            <List my={4}>
                <ListItem>
                    <Meta>Memoria Trabajo Fin de Master</Meta>
                    <Link
                        href="/files/TFM_Memoria_Deteccion_Cancer_de_Mama_IDC.pdf"
                        alt="TFMBreastCancer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    Descargar PDF Aquí
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Código</Meta>
                    <Link
                        href="https://github.com/diego-tech/TFM_Breast_Cancer_Classification"
                        target="_blank"
                    >
                        Models Code
                        <ExternalLinkIcon mx="2px" mb="4px" />
                    </Link>
                    ,
                    <Link
                        href="https://github.com/diego-tech/TFM_Breast_Cancer_Classification_App"
                        target="_blank"
                        ml={4}
                    >
                        Web APP
                        <ExternalLinkIcon mx="2px" mb="4px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Plataforma</Meta>
                    <span>Web, Jupyter Notebook</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        Python, ML Libraries (PyTorch, Keras, TensorFlow, Scikit-Learn), Flask
                    </span>
                </ListItem>
            </List>
            <Heading as="h3" variant="section-title">
                Multimedia
            </Heading>
            <Divider borderColor={useColorModeValue('#779ECB', '#f3a269')} my={6} />
            <ProjectImage
                src="/images/projects/breastcancertfm/thumbbreastcancer.png"
                alt="TFMBreastCancer"
            />
            <ProjectImage
                src="/images/projects/breastcancertfm/Predict_1.png"
                alt="TFMBreastCancer"
            />
            <ProjectImage
                src="/images/projects/breastcancertfm/Predict_2.png"
                alt="TFMBreastCancer"
            />
        </Layout>
    )
}

export default Work