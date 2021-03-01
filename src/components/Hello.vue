  <template lang="pug">

.ui.container.fluid
	.hero-image(style="height: 95vh;")
		.hero-text
			i.material-icons.md-96.mb-0 all_inclusive
			h1.ui.huge.white.inverted.header.mb-5(style="font-size:34px;") {{ msg }} 
			h1.ui.huge.header.mb-10(style="color: white; font-size:27px;") Boiling and Bowling
			h1.ui.huge.header.mt-0.mb-30(style="color: white; font-size:21px;") Scientology Phrenology
			button#boing.ui.huge.primary.button.ml-15.sidebar-opener(style="font-weight: 300;") Click

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Morphology Ecology'
    }
  }
}
</script>


<style scoped>

.itemize div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.containment {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

html, body {
  height: 100%;
  margin: 0px;
}
</style>
