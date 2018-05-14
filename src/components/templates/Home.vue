<template lang="pug">
  #wrapper
    #main
      section-container(id="one")
        header.major
          h2 { JS Ladies }
          p JavaScript de mulheres para mulheres

      section(id="two", class="with-background with-jsladies")
        .overlay
          .container
            h3.js-title O que é o { JS Ladies }?
            p Nós somos o primeiro grupo nacional e exclusivamente feminino focado em ensinar e ajudar mais mulheres a programarem em JavaScript. Nossa iniciativa nasceu da necessidade de promover um ambiente seguro, agradável e produtivo para qualquer pessoa cis, trans, binária ou não-binária que se identifique com o gênero feminino e que se interessa por computação.
          
      section-container(id="three")
        h3.js-title Próximos eventos
        p Escrever alguma descricao aqui sobre os eventos
      article-container(url="https://goo.gl/oMC6yV", cidade="with-rio", title="Rio de Janeiro", horario="9h as 17h", local="Instituto INFNET", organizacao="Raysa Dutra, Ingrid Tartaglia, Ju Dantas")
      // article-container(url="#", cidade="with-saopaulo", title="São Paulo", horario="definir", local="Em breve", organizacao="Ana Bastos")
      // article-container(url="#", cidade="with-portoalegre", title="Porto Alegre", horario="definir", local="Em breve", organizacao="Ju Dantas")

      section-container(id="four")
        h3.js-title Nossas treinadoras
        treinadoras

      section-container(id="five")
        h3.js-title Parceiros
        p Nosso projeto conta com a ajuda e apoio de empresas e pessoas incriveis! Estamos em busca de Parceiros 
          | que possam ajudar nosso evento seja com doações de recursos, tempo ou conhecimento para tornar 
          | o { JS Ladies } um evento especial!
          br
          br
          | Se você deseja contribuir, por gentileza entre em contato com a gente: 
          a(href="mail:contato@jsladies.org") contato@jsladies.org

</template>

<script>
import Treinadoras from '@/components/molecules/Treinadoras'
import InputContainer from '@/components/molecules/boxes/InputContainer'
import ArticleContainer from '@/components/molecules/boxes/ArticleContainer'
import SectionContainer from '@/components/molecules/boxes/SectionContainer'
import Navigation from '@/components/organisms/navigation/Navigation'
export default {
  components: {
    navigation: Navigation,
    sectionContainer: SectionContainer,
    articleContainer: ArticleContainer,
    inputContainer: InputContainer,
    treinadoras: Treinadoras
  }
}
</script>
