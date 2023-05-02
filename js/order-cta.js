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


// 북마크 부분 -----------------------------------------------------------------
orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)

function toggleOrderCtaBookmark() {

  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count

  // 활성화가 된 상태이니 -> 비활성화 (ic-bookmark)
  if (this.classList.contains('is-active')) {
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
  // 비활성화가 된 상태이니 -> 활성화 (ic-bookmark-filled)
  icon.classList.add('ic-bookmark-filled')
  icon.classList.remove('ic-bookmark')
  newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  // countSpan.setAtrribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  
  this.classList.toggle('is-active')

}

