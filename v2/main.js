// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// import { get, hide, show, toggle } from '@webarthur/kingdom'
import { each, hide, on, show, toggle, update } from '@webarthur/kingdom'
import { open } from './assets/js/modal.js'

each('.play-btn', link => {
  const previewEl = link.parentNode.querySelector('.video-preview')

  // Toca o vídeo ao passar o mouse
  on(link, 'mouseover', e => {
    hide(link)
    show(previewEl)
    previewEl.querySelector('video').play()
  })
  
  // Pára o vídeo ao perder foco do mouse
  if (previewEl) {
    on(previewEl, 'mouseout', e => {
      hide(previewEl)
      show(link)
      previewEl.querySelector('video').stop()
    })
  }
})

// Abre modal ao clicar na thumb
each('.video-popup', link => {
  on(link, 'click', e => {
    e.preventDefault()
    open('modal-video')
    update('#video', `
      <div class="text-center">
        <div class="video-popup ratio ratio-16x9">
          <iframe class="mfp-iframe" src="${link.href}?autoplay=1" frameborder="0" allowfullscreen=""></iframe>
        </div>
      </div>
    `)
  })
})

// Pára vídeo ao fechar modal
on('.modal-close', 'click', e => {
  update('#video', '')
})
