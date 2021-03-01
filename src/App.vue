<template lang="pug">
#app
	NavigationMenu
	.ui.left.vertical.sidebar.menu.overlay.visible

		.ui.card
			.ui.medium.image
				img(src='../static/nyc-empireslate.jpg')

		a.active.item.
			
			Bass 
			
		a.item.
			
			Drums

		a.item.
			
			Guitar

		a.item.
			
			Piano

		a.item.
			
			Vibraphone

		.ui.bottom.dropdown.item
			i.dropdown.icon
			| Woodwinds

			.menu
				.header Saxophones
				a.item Alto 
				a.item Tenor
				a.item Baritone

		.ui.dropdown.item
			i.right.dropdown.icon
			| Brass	
			.menu
				a.item Trumpets
				a.item Trombones
				a.item French Horns
				a.item Tubas



	//- .ui.left.vertical.inverted.icon.sidebar.menu.overlay.visible
	//- 	a.item
	//- 		i.home.icon
	//- 		| Ummayads

	//- 	a.item
	//- 		i.block.layout.icon
	//- 		| Abbasids

	//- 	a.item
	//- 		i.smile.icon
	//- 		| Tulunids

	//- 	a.item
	//- 		i.calendar.icon
	//- 		| Tahirids

	//- 	a.item
	//- 		i.mail.icon
	//- 		| Samanids

	//- 	a.item
	//- 		i.chat.icon
	//- 		| Saffarids

	//- 	a.item
	//- 		i.trophy.icon
	//- 		| Buwaihids

	//- 	a.item
	//- 		i.shop.icon
	//- 		| Ghaznavids

	//- 	a.item
	//- 		i.settings.icon
	//- 		| Fatimids

	//- 	a.item
	//- 		i.sun.icon
	//- 		| Khawarizmids

	//- 	a.item
	//- 		i.mosque.icon
	//- 		| Seljuqs

	//- 	a.item
	//- 			i.build.icon
	//- 			| Ayyubids

	.pusher
		router-view

</template>

<script>

import NavigationMenu from './components/NavigationMenu.vue'

export default {
	components: {
		NavigationMenu
	},
	name: 'app',	
	data () {
		return {
			msg: 'Disorientation Station'
		}
	},
	mounted: function () {
		console.log("MOUNTED");
		this.initializeSemantic();
		this.setupLogoSidebarOpener();
	},
	ready: function () {
		console.log("READY");
		this.initializeSemantic();
		this.setupLogoSidebarOpener();
	},
	methods: {
		initializeSemantic: function () {
			console.log($(this.$el));
			$('#app .ui.sidebar').sidebar({context:$('#app')})
			.sidebar('setting', 'transition', 'overlay')
			.sidebar('toggle');
		},
		setupLogoSidebarOpener: function () {
			var swipeMenu = $('#app .ui.sidebar');
			$('.sidebar-opener').click(function () {
				swipeMenu.sidebar('toggle');
			})

		}
	}

}

</script>

<style>
			.ui, body, html, .ui, h1, h2, h3, h4, h5, h6 {
				font-family: 'News Cycle', sans-serif !important;
				font-weight: 300 !important;
				font-style: normal !important;
			}

			.ui.sidebar {
				overflow: visible !important;
			}

			.dignity, .button {
				font-family: 'News Cycle', sans-serif !important;
				font-weight: 300 !important;
				font-style: normal !important;

			}

			p {
				font-size: 15px;
			}

			h1, h2, h3, h4, h5, h6 {
				font-family: 'News Cycle', sans-serif;
				font-weight: 300;
			}

			.my-content .ui.segment {
				min-height:500px;
				height:100%;
			}

			.ui.grid {
				padding:0 !important;
			}

			.pushable.segment {
				margin:0 !important;
			}

			.text-left {
				text-align: left;
			}

			.text-center {
				text-align: center;
			}

			body, html {
				height: 100%;
			}

			i {
				vertical-align: middle;
			}

			.hero-image {
				background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../static/nyc-42nd.jpg");
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
			}


			.coward-image {
				/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("img/spidersfrommars.jpg"); */
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
			}


			.scarecrow-image {
				/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("img/yardbirds68.jpg"); */
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
			}

			.tinman-image {
				/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/bruegeltorre.jpg"); */
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
				filter: grayscale(100%);
			}

			.hero-text {
				text-align: center;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: white;
			}

			.material-icons.md-18 { font-size: 18px; }
			.material-icons.md-24 { font-size: 24px; }
			.material-icons.md-36 { font-size: 36px; }
			.material-icons.md-48 { font-size: 48px; }
			.material-icons.md-60 { font-size: 60px; }
			.material-icons.md-72 { font-size: 72px; }
			.material-icons.md-84 { font-size: 84px; }
			.material-icons.md-96 { font-size: 96px; }

			/* Rules for using icons as black on a light background. */
			.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
			.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

			/* Rules for using icons as white on a dark background. */
			.material-icons.md-light { color: rgba(255, 255, 255, 1); }
			.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

    </style>