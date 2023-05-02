const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true
  // items: 4,
  // slideBy: 'page',
});

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  gutter: 4,
  controls: false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  navAsThumbnails: true,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  gutter: 6,
  controls: true,
  controlsContainer: '.user-gallery-controls.is-desktop',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  navAsThumbnails: true,
  edgePadding: 75,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
