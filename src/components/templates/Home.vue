<template lang="pug">
  #wrapper
    #main
      section-container(id="one")
        header.major
          h2 { JS Ladies }
          p JavaScript de mulheres para mulheres

      section-container(id="two")
        h3 O que é o JS Ladies?
        p Nós somos o primeiro grupo nacional e exclusivamente feminino focado em ensinar e ajudar mais mulheres a programarem em JavaScript. Nossa iniciativa nasceu da necessidade de promover um ambiente seguro, agradável e produtivo para qualquer pessoa cis, trans, binária ou não-binária que se identifique com o gênero feminino e que se interessa por computação.
        
      section-container(id="three")
        h3 A few Accomplisments
        p Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non.
        .features
          article-container(url="#", title="Possibly broke spacetime", resume="Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.")
          article-container(url="#", title="Possibly broke spacetime", resume="Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.")
          article-container(url="#", title="Possibly broke spacetime", resume="Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.")

      section-container(id="four")
        h3 Contact Me
        p Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.
        form
          .row.uniform
            input-container(span="6u 12u(xsmall)")
              input(type="text", name="name", id="name", placeholder="Name")
            input-container(span="6u 12u(xsmall)")
              input(type="email", name="email", id="email", placeholder="Email")

          .row.uniform
            input-container(span="12u")
              input(type="text", name="subject", id="subject", placeholder="Subject")

          .row.uniform
            input-container(span="12u")
              textarea(name="message", id="message", placeholder="Message", row="6")

          .row.uniform
            input-container(span="12u")
              ul.actions
                li: input(type="submit", class="special", value="Send Message")
                li: input(type="reset", value="Reset form")
</template>

<script>
import InputContainer from '@/components/molecules/boxes/InputContainer'
import ArticleContainer from '@/components/molecules/boxes/ArticleContainer'
import SectionContainer from '@/components/molecules/boxes/SectionContainer'
import Navigation from '@/components/organisms/navigation/Navigation'
export default {
  components: {
    navigation: Navigation,
    sectionContainer: SectionContainer,
    articleContainer: ArticleContainer,
    inputContainer: InputContainer
  }
}
</script>
