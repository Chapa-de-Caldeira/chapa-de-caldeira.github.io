<template lang="pug">

div
	.ui.huge.fixed.borderless.menu
		a.active.item(style="font-size: 23px")
			i.fas.fa-sun.fa-2x.mr-10
			| Quinquilharia com Desarmonia


		.ui.dropdown.item
			|  Semitic
			i.material-icons keyboard_arrow_down
			.menu
				a.item Arabic
				a.item Hebrew
				a.item Aramaic
				a.item Syriac
				a.item Phoenician

		.ui.dropdown.item
			|  Indo-European
			i.material-icons keyboard_arrow_down
			.menu
				a.item Parsi
				a.item Farsi
				a.item Dari
				a.item Pashto
				a.item Urdu
		
		.ui.dropdown.item
			|  Others
			i.material-icons keyboard_arrow_down
			.menu
				a.item Altaic
				a.item Chagatai
				a.item Bantu
				a.item Swahili
				a.item English



		.right.menu.mr-10
			.item.mr-20
				i.material-icons.sidebar-opener menu
				| Menu

</template>


<style>
	  html, body {
		font-family: "News Cycle", sans-serif !important;
		font-weight: 300 !important;
		font-style:normal !important;
	  }
	  h1, h2, h3, h4, h5, h6, mu-button {
		font-family: "News Cycle", sans-serif !important;
		font-weight: 300 !important;
		font-style:normal !important;
	  }

	  .dignity {
		font-family: "News Cycle", sans-serif !important;
		font-weight: 300 !important;
		font-style:normal !important;
	  }

	  i, .material-icons {
		vertical-align: middle;
	  }

	  .material-icons.md-18 { font-size: 18px; }
	  .material-icons.md-24 { font-size: 24px; }
	  .material-icons.md-36 { font-size: 36px; }
	  .material-icons.md-48 { font-size: 48px; }
	  .material-icons.md-56 { font-size: 56px; }
	  .material-icons.md-64 { font-size: 64px; }
	  .material-icons.md-72 { font-size: 72px; }

	  /* Rules for using icons as black on a light background. */
	  .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
	  .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

	  /* Rules for using icons as white on a dark background. */
	  .material-icons.md-light { color: rgba(255, 255, 255, 1); }
	  .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

	</style>

<script> 
     $(document).ready(function(){
          $('.ui.dropdown') .dropdown();
    });
    </script>