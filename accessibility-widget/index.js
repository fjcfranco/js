/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
;(() => {
    'use strict'
    const t = {
        pt: {
            'Accessibility Menu': 'Menu de Acessibilidade',
            'Reset settings': 'Redefinir configurações',
            Close: 'Fechar',
            'Content Adjustments': 'Ajustes de conteúdo',
            'Adjust Font Size': 'Ajustar tamanho da fonte',
            Default: 'Padrão',
            'Highlight Title': 'Destacar títulos',
            'Highlight Links': 'Destacar links',
            'Readable Font': 'Fonte legível',
            'Color Adjustments': 'Ajustes de cor',
            'Dark Contrast': 'Contraste Escuro',
            'Light Contrast': 'Contraste de luz',
            'High Contrast': 'Alto Contraste',
            'High Saturation': 'Alta Saturação',
            'Low Saturation': 'Baixa Saturação',
            Monochrome: 'Monocromático',
            Tools: 'Ferramentas',
            'Reading Guide': 'Guia de Leitura',
            'Stop Animations': 'Parar animações',
            'Big Cursor': 'Grande Cursor',
            'Increase Font Size': 'Aumentar tamanho da fonte',
            'Decrease Font Size': 'Diminuir tamanho da fonte',
            'Letter Spacing': 'Espaçamento entre letras',
            'Line Height': 'Altura da linha',
            'Font Weight': 'Peso da fonte'
        },
        en: {
            'Accessibility Menu': 'Accessibility menu',
            'Reset settings': 'Reset settings',
            Close: 'Close',
            'Content Adjustments': 'Content Adjustments',
            'Adjust Font Size': 'Adjust Font Size',
            Default: 'Default',
            'Highlight Title': 'Highlight Title',
            'Highlight Links': 'Highlight Links',
            'Readable Font': 'Readable Font',
            'Color Adjustments': 'Color Adjustments',
            'Dark Contrast': 'Dark Contrast',
            'Light Contrast': 'Light Contrast',
            'High Contrast': 'High Contrast',
            'High Saturation': 'High Saturation',
            'Low Saturation': 'Low Saturation',
            Monochrome: 'Monochrome',
            Tools: 'Tools',
            'Reading Guide': 'Reading Guide',
            'Stop Animations': 'Stop Animations',
            'Big Cursor': 'Big Cursor',
            'Increase Font Size': 'Increase Font Size',
            'Decrease Font Size': 'Decrease Font Size',
            'Letter Spacing': 'Letter Spacing',
            'Line Height': 'Line Height',
            'Font Weight': 'Font Weight'
        },
        es: {
            'Accessibility Menu': 'Menú de accesibilidad',
            'Reset settings': 'Restablecer configuración',
            Close: 'Cerca',
            'Content Adjustments': 'Ajustes de contenido',
            'Adjust Font Size': 'Ajustar tamaño de fuente',
            Default: 'Predeterminado',
            'Highlight Title': 'Título destacado',
            'Highlight Links': 'Resaltar enlaces',
            'Readable Font': 'Fuente legible',
            'Color Adjustments': 'Ajustes de color',
            'Dark Contrast': 'Contraste oscuro',
            'Light Contrast': 'Contraste de luz',
            'High Contrast': 'Contraste alto',
            'High Saturation': 'Saturación alta',
            'Low Saturation': 'Baja Saturación',
            Monochrome: 'Monocromo',
            Tools: 'Herramientas',
            'Reading Guide': 'Guía de lectura',
            'Stop Animations': 'Detener animaciones',
            'Big Cursor': 'Gran Cursor',
            'Increase Font Size': 'Aumentar Tamaño de Fuente',
            'Decrease Font Size': 'Disminuir tamaño de fuente',
            'Letter Spacing': 'Espaciado entre letras',
            'Line Height': 'Altura de línea',
            'Font Weight': 'Peso de fuente'
        },
        fr: {
            'Accessibility Menu': 'Menu Accessibilité',
            'Reset settings': 'Réinitialiser les options',
            Close: 'Fermer',
            'Content Adjustments': 'Modifications du contenu',
            'Adjust Font Size': 'Modifier la taille de police',
            Default: 'Par défaut',
            'Highlight Title': 'Mettre en évidence le titre',
            'Highlight Links': 'Mettre en évidence les liens',
            'Readable Font': 'Police facile à lire',
            'Color Adjustments': 'Modifications de la couleur',
            'Dark Contrast': 'Contraste sombre',
            'Light Contrast': 'Contraste léger',
            'High Contrast': 'Contraste élevé',
            'High Saturation': 'Saturation élevée',
            'Low Saturation': 'Saturation faible',
            Monochrome: 'Monochrome',
            Tools: 'Outils',
            'Reading Guide': 'Guide de lecture',
            'Stop Animations': 'Arrêter les animations',
            'Big Cursor': 'Grand curseur',
            'Increase Font Size': 'Augmenter la taille de police',
            'Decrease Font Size': 'Réduire la taille de police',
            'Letter Spacing': 'Espacement des lettres',
            'Line Height': 'Hauteur de ligne',
            'Font Weight': 'Epaisseur de la police'
        }
    }
    const e = [
        { label: 'Monochrome', key: 'monochrome', icon: 'filter_b_and_w' },
        { label: 'Low Saturation', key: 'low-saturation', icon: 'gradient' },
        { label: 'High Saturation', key: 'high-saturation', icon: 'filter_vintage' },
        { label: 'High Contrast', key: 'high-contrast', icon: 'tonality' },
        { label: 'Light Contrast', key: 'light-contrast', icon: 'brightness_5' },
        { label: 'Dark Contrast', key: 'dark-contrast', icon: 'nightlight' }
    ]
    const i = [
        { label: 'Font Weight', key: 'font-weight', icon: 'format_bold' },
        { label: 'Line Height', key: 'line-height', icon: 'format_line_spacing' },
        { label: 'Letter Spacing', key: 'letter-spacing', icon: 'space_bar' },
        { label: 'Dyslexia Font', key: 'readable-font', icon: 'spellcheck' },
        { label: 'Highlight Links', key: 'highlight-links', icon: 'link' },
        { label: 'Highlight Title', key: 'highlight-title', icon: 'title' }
    ]
    const s = [
        { label: 'Big Cursor', key: 'big-cursor', icon: 'mouse' },
        { label: 'Stop Animations', key: 'stop-animations', icon: 'motion_photos_off' },
        { label: 'Reading Guide', key: 'readable-guide', icon: 'local_library' },
		{ label: 'Leitor de Textos', key: 'responsive_voice', icon: 'responsive_voice' }, 
		{ label: 'VLibras', key: 'vlibras', icon: 'vlibras' }
    ]
    class Widget {
        constructor(e) {
            ;(this.config = { ...e }),
                (this.rendered = !1),
                (this.settings = { states: {}, lang: 'pt', ...e?.settings })
            const i = document.documentElement.lang || 'pt'
            ;(this.locale = t.pt),
                t[i] && ((this.settings.lang = i), (this.locale = t[i])),
                this.settings?.states &&
                    (this.changeControls(),
                    this.settings.states.fontSize !== 1 && this.changeFont(null, this.settings.states.fontSize),
                    this.settings.states.contrast && this.changeFilter(this.settings.states.contrast))
        }

        close() {
            this.menu.style.display = 'none'
        }

        toggle() {
            this.rendered || this.render(),
                setTimeout(() => {
                    this.menu.style.display = this.menu.style.display === 'block' ? 'none' : 'block'
                }, 0)
        }

        saveSettings() {
            this.setCookie('asw', JSON.stringify({ ...this.settings, updatedAt: new Date() }))
        }

        setCookie(t, e, i) {
            const s = new Date()
            s.setTime(s.getTime() + 24 * i * 60 * 60 * 1e3)
            const n = 'expires=' + s.toUTCString()
            document.cookie = t + '=' + e + ';' + n + ';path=/'
        }

        render() {
            // const n = `https://accessibility-widget.pages.dev?d=${window.location.hostname || ''}`
            return (
                (this.menu = document.createElement('div')),
                (this.menu.innerHTML =
                    '<style>.asw-menu{position:fixed;left:20px;top:20px;border-radius:8px;box-shadow:0 0 20px #00000080;opacity:1;transition:.3s;z-index:500000;overflow:hidden;background:#f9f9f9;width:500px;line-height:1;font-size:16px;height:calc(100% - 40px - 75px);letter-spacing:.015em}.asw-menu-header{display:flex;align-items:center;justify-content:space-between;padding-left:18px;height:60px;font-size:18px;font-weight:700;border-bottom:1px solid #dedede}.asw-menu-header>div{display:flex}.asw-menu-header div[role=button]{padding:12px;cursor:pointer}.asw-menu-header div[role=button]:hover{opacity:.8}.asw-card{margin:0 15px 30px}.asw-card-title{font-size:20px;padding:15px 0;font-weight:700;color:#555}.asw-menu .asw-select{width:100%!important;padding:10px!important;font-size:16px!important;font-family:inherit!important;font-weight:400!important;border-radius:4px!important;background:#fff!important;border:none!important;border:1px solid #dedede!important;min-height:45px!important;max-height:45px!important;height:45px!important}.asw-items{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}.asw-btn{aspect-ratio:6/5;border-radius:4px;padding:0 15px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:#333;font-size:16px!important;background:#fff;border:1px solid #dedede;transition:all .3s ease;cursor:pointer;line-height:1.4}.asw-btn .asw-translate{font-size:15px!important}.asw-btn .material-icons{margin-bottom:16px}.asw-btn:hover{border-color:#0048ff}.asw-btn.asw-selected{background:#0048ff;color:#fff;border-color:#0048ff}.asw-footer{position:absolute;bottom:0;left:0;right:0;background:#fff;padding:16px;text-align:center;color:#333;border-top:1px solid #eee}.asw-footer a{display:none;font-size:14px!important;text-decoration:underline;color:#0648ff;background:0 0!important;font-weight:700}.asw-minus:hover,.asw-plus:hover{opacity:.8}.asw-menu-content{overflow:scroll;max-height:calc(100% - 80px);color:#333;padding:15px 0}.asw-adjust-font{background:#fff;box-shadow:0 0 10px #00000030;padding:20px;margin-bottom:16px}.asw-adjust-font .asw-label{display:flex;justify-content:flex-start}.asw-adjust-font>div{display:flex;justify-content:space-between;margin-top:20px;align-items:center;font-size:15px}.asw-adjust-font .asw-label div{font-size:15px!important}.asw-adjust-font div[role=button]{background:#0648ff;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;color:#fff;cursor:pointer}.asw-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000}@media only screen and (max-width:560px){.asw-menu{width:calc(100% - 20px);left:10px}}@media only screen and (max-width:420px){.asw-items{grid-template-columns:repeat(2,minmax(0,1fr));gap:.5rem}.asw-menu{width:calc(100% - 20px);left:10px}}</style> <div class="asw-menu"> <div class="asw-menu-header"> <div class="asw-translate"> Accessibility Menu </div> <div> <div role="button" class="asw-menu-reset" title="Reset settings"> <span class="material-icons"> restart_alt </span> </div> <div role="button" class="asw-menu-close" title="Close"> <span class="material-icons"> close </span> </div> </div> </div> <div class="asw-menu-content"> <div class="asw-card"> <select class="asw-select"> <option value="pt">Português</option><option value="en">English</option> <option value="fr">French</option> <option value="es">Spanish</option> </select> </div> <div class="asw-card"> <div class="asw-card-title"> Content Adjustments </div> <div class="asw-adjust-font"> <div class="asw-label" style="margin:0"> <span class="material-icons" style="margin-right:8px"> format_size </span> <div class="asw-translate"> Adjust Font Size </div> </div> <div> <div class="asw-minus" data-key="font-size" role="button" aria-pressed="false" title="Decrease Font Size"> <span class="material-icons"> remove </span> </div> <div class="asw-amount" style="font-weight:400"> Default </div> <div class="asw-plus" data-key="font-size" role="button" aria-pressed="false" title="Increase Font Size"> <span class="material-icons"> add </span> </div> </div> </div> <div class="asw-items content"> </div> </div> <div class="asw-card"> <div class="asw-card-title"> Color Adjustments </div> <div class="asw-items contrast"> </div> </div> <div class="asw-card"> <div class="asw-card-title"> Tools </div> <div class="asw-items tools"> </div> </div> </div> <div class="asw-footer"> <a href="#">Accessibility Widget</a> </div> </div> <div class="asw-overlay"> </div> <link href="https://fonts.googleapis.com/icon?family=Material+Icons&amp;text=format_size,add,remove,restart_alt,close,title,link,local_parking,nightlight,brightness_5,tonality,filter_vintage,gradient,filter_b_and_w,local_library,zoom_in,mouse,format_bold,format_line_spacing,space_bar,spellcheck" rel="stylesheet">'),
                (this.menu.querySelector('.content').innerHTML = this._createButtons(i)),
                (this.menu.querySelector('.tools').innerHTML = this._createButtons(s, 'asw-tools')),
                (this.menu.querySelector('.contrast').innerHTML = this._createButtons(e, 'asw-filter')),
                this.menu.querySelector('.asw-menu-close').addEventListener('click', () => {
                    this.close()
                }),
                this.menu.querySelector('.asw-overlay').addEventListener('click', () => {
                    this.close()
                }),
                this.menu.querySelectorAll('.asw-btn').forEach(t => {
                    t.addEventListener('click', () => {
                        this.clickItem(t)
                    })
                }),
                this.menu.querySelectorAll(".asw-adjust-font div[role='button']").forEach(t => {
                    t.addEventListener('click', () => {
                        this.changeFont(t), this.saveSettings()
                    })
                }),
                this.menu.querySelector('.asw-menu-reset').addEventListener('click', () => {
                    this.reset()
                }),
                (this.menu.querySelector('select').value = this.settings.lang),
                this.menu.querySelector('select').addEventListener('change', e => {
                    ;(this.settings.lang = e.target.value),
                        (this.locale = t[this.settings.lang] || t.en),
                        this.saveSettings(),
                        this.translate()
                }),
                // this.menu.querySelector('.asw-footer a').setAttribute('href', n),
                this.translate(),
                this.config.container.appendChild(this.menu),
                (this.rendered = !0),
                this
            )
        }

        reset() {
            ;(this.settings.states = {}),
              this.changeFilter(),
              this.changeControls(),
              // eslint-disable-next-line no-void
              this.changeFont(void 0, 1),
              this.saveSettings(),
              this.menu.querySelectorAll('.asw-btn').forEach(t => {
                  t.classList.remove('asw-selected')
              }),
              this.translate()
        }

        changeFont(t, e) {
            !e && t && ((e = parseFloat(this.settings.states.fontSize) || 1),
            t.classList.contains('asw-minus') ? (e -= 0.1) : (e += 0.1),
            (e = Math.max(e, 0.1)),
            (e = Math.min(e, 2)),
            (e = parseFloat(e.toFixed(2)))),
            document
                .querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.asw-text')
                .forEach(function (t) {
                    if (!t.classList.contains('material-icons')) {
                        let i = t.getAttribute('data-asw-orgFontSize')
                        i || ((i = parseInt(window.getComputedStyle(t, null).getPropertyValue('font-size'))),
                        t.setAttribute('data-asw-orgFontSize', i))
                        const s = i * e
                        t.style['font-size'] = s + 'px'
                    }
                }),
            (this.settings.states.fontSize = e),
            this.translate()
        }

        clickItem(t) {
			/**/
            var n, i, e = t.dataset.key;
			
			if( e == 'vlibras' ){
				
				var vwv = document.querySelector("div[vw]")
				vwv.style.display = 'block'
				var btvw = document.querySelector("div[vw-access-button]")
				btvw.click();
				return false;
			}
			
            t.classList.contains('asw-filter') ? (document.querySelectorAll('.asw-filter').forEach(function (t) {
                t.classList.remove('asw-selected')
            }),
            (this.settings.states.contrast = this.settings.states.contrast !== e && e),
            this.settings.states.contrast && t.classList.add('asw-selected'),
            this.changeFilter(this.settings.states.contrast)) : ((this.settings.states[e] = !this.settings.states[e]),
            t.classList.toggle('asw-selected', this.settings.states[e]),
            this.changeControls()),
            this.saveSettings()
        }

        changeControls() {
			
			if( this.settings.states.responsive_voice ){
				responsiveVoice.speechAllowedByUser = !0, 
				responsiveVoice.speak("Leitor de Textos habilitado", "Brazilian Portuguese Female")
				//this.settings.states.responsive_voice1 = 1
			}else{
				//if( this.settings.states.responsive_voice1 == 1 ){
					responsiveVoice.speak("Leitor de Textos desabilitado", "Brazilian Portuguese Female"), 
					responsiveVoice.speechAllowedByUser = !1
				//	this.settings.states.responsive_voice1 = 0
				//}
			}
			
            const t = [{
                id: 'highlight-title',
                childrenSelector: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
                css: 'outline: 2px solid #0048ff !important;outline-offset: 2px !important;'
            }, {
                id: 'highlight-links',
                childrenSelector: ['a[href]'],
                css: 'outline: 2px solid #0048ff !important;outline-offset: 2px !important;'
            }, {
                id: 'readable-font',
                childrenSelector: ['', '*:not(.material-icons)', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'p', 'i', 'svg', 'a', 'button', 'label', 'li', 'ol', '.wsite-headline', '.wsite-content-title'],
                css: 'font-family: OpenDyslexic3,Comic Sans MS,Arial,Helvetica,sans-serif !important;'
            }, {
                id: 'letter-spacing',
                childrenSelector: ['', '*:not(.material-icons)'],
                css: 'letter-spacing: 2px!important;'
            }, {
                id: 'line-height',
                childrenSelector: ['', '*:not(.material-icons)'],
                css: 'line-height: 3!important;'
            }, {
                id: 'font-weight',
                childrenSelector: ['', '*:not(.material-icons)'],
                css: 'font-weight: 700!important;'
            }]

            let e = ''
            for (let i = t.length; i--; ) {
                const n = t[i]
                if ((document.documentElement.classList.toggle(n.id, !!this.settings.states[n.id]), this.settings.states[n.id]))
                    for (let s = n.childrenSelector.length; s--; )
                        e += '.' + n.id + ' ' + n.childrenSelector[s] + '{' + n.css + '}'
            }
            const n = document.querySelector('.asw-rg-container')
            if (this.settings.states['readable-guide']) {
                if (!n) {
                    const a = document.createElement('div')
                    a.setAttribute('class', 'asw-rg-container'),
                        (a.innerHTML =
                            '\n<style>.asw-rg {position: fixed;top: 0;left: 0;right: 0;width: 100%;height: 0;pointer-events: none;background-color: rgba(0,0,0,.5);z-index: 1000000;}\n</style>\n<div class="asw-rg asw-rg-top"></div>\n<div class="asw-rg asw-rg-bottom" style="top: auto;bottom: 0;"></div>\n')
                    const t = a.querySelector('.asw-rg-top')
                    const e = a.querySelector('.asw-rg-bottom')
                    const i = 20
                    ;(window.onScrollReadableGuide = function (s) {
                        ;(t.style.height = s.clientY - i + 'px'),
                            (e.style.height = window.innerHeight - s.clientY - i - i + 'px')
                    }),
                        document.addEventListener('mousemove', window.onScrollReadableGuide, { passive: !1 }),
                        document.body.appendChild(a)
                }
            } else n && (n.remove(), document.removeEventListener('mousemove', window.onScrollReadableGuide))
            this.settings.states['stop-animations'] &&
                (e += `\nbody * {\n${this.getFilterCSS('none !important', 'transition')}\n${this.getFilterCSS(
                    'forwards !important',
                    'animation-fill-mode'
                )}\n${this.getFilterCSS('1 !important', ' animation-iteration-count')}\n${this.getFilterCSS(
                    '.01s !important',
                    'animation-duration'
                )}\n}\n`),
				this.settings.states['big-cursor'] && (e += "\nbody * {\ncursor: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 512 512'%3E%3Cpath  d='M429.742 319.31L82.49 0l-.231 471.744 105.375-100.826 61.89 141.083 96.559-42.358-61.89-141.083 145.549-9.25zM306.563 454.222l-41.62 18.259-67.066-152.879-85.589 81.894.164-333.193 245.264 225.529-118.219 7.512 67.066 152.878z' xmlns='http://www.w3.org/2000/svg'/%3E%3C/svg%3E\") ,default !important;\n}\n"),
				this.settings.states['readable-font'] && (e += '\n@font-face {\nfont-family: OpenDyslexic3;\nsrc: url("/fonts/OpenDyslexic3-Regular.woff") format("woff"), url("/fonts/OpenDyslexic3-Regular.ttf") format("truetype");\n}\n'),
                this.addStyleSheet(e, 'asw-content-style')
        }

        addStyleSheet(t, e) {
            const i = document.getElementById(e || '') || document.createElement('style');
            (i.innerHTML = t), i.id || ((i.id = e), document.head.appendChild(i))
        }

        getFilterCSS(t, e) {
            let i = ''
            const s = ['-o-', '-ms-', '-moz-', '-webkit', '']
            for (let n = s.length; n--; ) i += s[n] + (e || 'filter') + ':' + t + ';'
            return i
        }

        translate() {
            this.menu &&
                (this.menu.querySelectorAll('[title]').forEach(t => {
                    let e = t.getAttribute('data-translate')
                    e || ((e = t.getAttribute('title')), t.setAttribute('data-translate', e)),
                        (e = this.locale?.[e] || e),
                        t.setAttribute('title', e)
                }),
                (this.menu.querySelector('.asw-amount').innerHTML =
                    // eslint-disable-next-line eqeqeq
                    this.settings.states.fontSize && this.settings.states.fontSize != 1
                        ? `${parseInt(100 * this.settings.states.fontSize)}%`
                        : this.locale?.Default || 'Default'),
                this.menu.querySelectorAll('.asw-card-title, .asw-translate').forEach(t => {
                    let e = t.getAttribute('data-translate')
                    e || ((e = String(t.innerText || '').trim()), t.setAttribute('data-translate', e)),
                        (e = this.locale?.[e] || e),
                        (t.innerText = e)
                }))
        }

        changeFilter(t) {
            let e = ''
            if (t) {
                let s = ''
                t === 'dark-contrast'
                    ? (s = 'color: #fff !important;fill: #FFF !important;background-color: #000 !important;')
                    : t === 'light-contrast'
                    ? (s = ' color: #000 !important;fill: #000 !important;background-color: #FFF !important;')
                    : t === 'high-contrast'
                    ? (s += this.getFilterCSS('contrast(125%)'))
                    : t === 'high-saturation'
                    ? (s += this.getFilterCSS('saturate(200%)'))
                    : t === 'low-saturation'
                    ? (s += this.getFilterCSS('saturate(50%)'))
                    : t === 'monochrome' && (s += this.getFilterCSS('grayscale(100%)'))
                let n = ['']
                ;(t !== 'dark-contrast' && t !== 'light-contrast') ||
                    (n = [
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'img',
                        'p',
                        'i',
                        'svg',
                        'a',
                        'button',
                        'label',
                        'li',
                        'ol'
                    ])
                for (let i = n.length; i--; ) e += '[data-asw-filter="' + t + '"] ' + n[i] + '{' + s + '}'
            }
            this.addStyleSheet(e, 'asw-filter-style'),
                t
                    ? document.documentElement.setAttribute('data-asw-filter', t)
                    : document.documentElement.removeAttribute('data-asw-filter', t)
        }

        _createButtons(t, e) {
            let i = ''
			
            for (let s = t.length; s--; ) {
                const n = t[s]
				if( n.icon == 'responsive_voice' ){
					n.icon = '<img src="'.concat("../lib/accessibility-widget/images/responsive_voice.png", '" height="24" width="24" style="margin-bottom:16px;filter: grayscale(1);" />') 
				}
				if( n.icon == 'vlibras' ){
					n.icon = '<img src="'.concat("../lib/accessibility-widget/images/component-ac.png", '" height="24" width="24" style="margin-bottom:16px;filter: grayscale(1);" />') 
				}				
                let a = this.settings.states[n.key]
                e === 'asw-filter' && this.settings.states.contrast === n.key && (a = !0),
                    (i += `\n<button class="asw-btn ${e || ''} ${a ? 'asw-selected' : ''}" type="button" data-key="${
                        n.key
                    }" title="${n.label}">\n<span class="material-icons">${
                        n.icon
                    }</span>\n<span class="asw-translate">${n.label}</span>\n</button>\n`)
            }
            return i
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
		responsiveVoice.speechAllowedByUser = !1;
        let t
        const e = document.createElement('div')
		e.innerHTML = '<style>.asw-menu,.asw-widget{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:400;-webkit-font-smoothing:antialiased}.asw-menu *,.asw-widget *{box-sizing:border-box}.asw-menu-btn{position:fixed;z-index:500000;left:10px;bottom:40%;background:#0048ff!important;box-shadow:0 5px 15px 0 rgb(37 44 97 / 15%),0 2px 4px 0 rgb(93 100 148 / 20%);transition:.3s;border-radius:50%;align-items:center;justify-content:center;transform:scale(1);width:54px;height:54px;display:flex;cursor:pointer;border:4px solid #fff!important;outline:4px solid #0048ff!important}.asw-menu-btn svg{width:30px;height:30px;min-height:30px;min-width:30px;max-width:30px;max-height:30px;background:0 0!important}.asw-menu-btn:hover{transform:scale(1.1)}@media only screen and (max-width:560px){.asw-menu-btn{width:38px;height:38px}.asw-menu-btn svg{width:24px;height:24px;min-height:24px;min-width:24px;max-width:24px;max-height:24px}}</style> <div class="asw-widget"> <a href="#" target="_blank" class="asw-menu-btn" title="Open Accessibility Menu" role="button" aria-expanded="false" data-asw-orgfontsize="14"> <svg xmlns="http://www.w3.org/2000/svg" style="fill:white" viewBox="0 0 24 24" width="30px" height="30px"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg> </a> </div>'

        let i = (function () {
            const e = 'asw='
            const i = decodeURIComponent(document.cookie).split(';')
            for (let t = 0; t < i.length; t++) {
                let s = i[t]
                for (; s.charAt(0) === ' '; ) s = s.substring(1)
                if (s.indexOf(e) === 0) return s.substring(e.length, s.length)
            }
            return ''
        })()
        if (i)
            try {
                i = JSON.parse(i)
            } catch (t) {}
        i?.states && (t = new Widget({ container: e, settings: i })),
            e.querySelector('.asw-menu-btn').addEventListener('click', i => {
                i.preventDefault(), t ? t.toggle() : (t = new Widget({ container: e }).render())
            }),
            document.body.appendChild(e)
    })
})()
