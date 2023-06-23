import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="about"/>
    <Wrapper className='pag section-center section'>
      <img src={aboutImg} alt='imagen-about' />
      <article>
        <div className='title'>
          <h2>our story</h2>
          <div className='underline'></div>
        </div>
        <p>
        LanaRosa es un emprendimiento colombiano dedicado al mundo del crochet, creado por amantes de las manualidades y el arte de tejer a mano. Con una pasión por las fibras naturales y los diseños únicos, LanaRosa ofrece productos de crochet de alta calidad y confeccionados con cuidado.
La marca LanaRosa se destaca por su compromiso con la artesanía tradicional y su enfoque en la sostenibilidad. Utilizando hilos de lana y algodón de origen local, LanaRosa se asegura de apoyar a los productores locales y fomentar el comercio justo. Además, se esfuerzan por utilizar prácticas respetuosas con el medio ambiente en todo el proceso de producción, minimizando los residuos y promoviendo el consumo responsable.
El catálogo de LanaRosa incluye una amplia variedad de productos tejidos a mano, desde accesorios como bufandas, gorros y guantes, hasta prendas de vestir como suéteres, chalecos y ponchos. Cada pieza se crea con atención a los detalles y se diseñan teniendo en cuenta las últimas tendencias de la moda.
Además de su línea de productos, LanaRosa también ofrece talleres y clases de crochet para aquellos que deseen aprender esta técnica artesanal. Estas clases son impartidas por expertos en crochet, quienes comparten sus conocimientos y técnicas con entusiasmo, fomentando la creatividad y el amor por el tejido a mano.
LanaRosa se enorgullece de ser una marca que promueve el valor de lo hecho a mano y la conexión entre las personas a través de sus productos. Cada artículo de LanaRosa cuenta una historia única y lleva consigo el cariño y la dedicación de los artesanos que lo crearon.
En resumen, LanaRosa es un emprendimiento colombiano de crochet que se destaca por su compromiso con la artesanía tradicional, la sostenibilidad y la calidad. A través de sus productos y clases, LanaRosa busca difundir la belleza del crochet y promover el valor de lo hecho a mano en la sociedad actual.
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
