const orderCta = document.querySelector('.order-cta')
const orderCtaBuyButton = orderCta.querySelector('.btn-primary')
const orderCtaBookmarkButton = orderCta.querySelector('.btn-ghost') 
const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function OpenOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', OpenOrderModal)

function CloseOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', CloseOrderModal)