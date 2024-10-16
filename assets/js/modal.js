import { get, hide, show, toggle } from '@webarthur/kingdom'

function open(id, cb) {
  const modal = get('#' + id)
  if (!modal) {
    console.warn('Modal not found', id)
    return
  }
  modal.style.display = 'block'
  setTimeout(() => {
    cb && cb(modal)
    modal.classList.add('show')
  })

  showBackgrop(modal, true)
}

function minimize(id, cb) {
  window.closeModal(id)
  show('#' + id + '-minimized')
  cb && cb()
}

function maximize(id, cb) {
  window.openModal(id)
  hide('#' + id + '-minimized')
  cb && cb()
}

function close(el) {
  const modal = typeof el === 'string' ? get('#' + el) : el
  modal.classList.remove('show')
  showBackgrop(modal, false)
  setTimeout(() => {
    modal.classList.remove('d-block')
    modal.style.display = 'none'

    const form = modal.querySelector('form')
    if (form) {
      form.reset()
      if (typeof form.id === 'object') {
        form.id.value = ''
      }
    }
  }, 250)
}

function showBackgrop(modal, status = true) {
  const backdrop = get('#' + modal.id + '-backdrop')
  if (!backdrop || !backdrop.classList.contains('modal-backdrop')) {
    console.warn('Modal backdrop not found for', modal.id)
    return
  }

  if (status) backdrop.style.display = 'block'
  toggle(backdrop, 'd-none', !status)

  setTimeout(() => {
    if (!status) backdrop.style.display = 'none'
    toggle(backdrop, 'show', status)
  })
}

window.openModal = open
window.minimizeModal = minimize
window.maximizeModal = maximize
window.closeModal = close

const modal = {
  open,
  minimize,
  maximize,
  close,
}

// Precisa disso para comunicar o iframe com parent
window.modal = modal

export { open, minimize, maximize, close }

export default modal
