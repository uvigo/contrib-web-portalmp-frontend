import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * UVigoweb (v1.0.0): slider.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const Slider = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  // const NAME                = 'footer'
  const VERSION             = '1.0.0'
  // const DATA_KEY            = 'uv.slider'
  // const EVENT_KEY           = `.${DATA_KEY}`
  // const DATA_API_KEY        = '.data-api'
  // const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Default = {
    toggle   : true,
    duration : 300
  }

  // const DefaultType = {
  //   toggle   : 'boolean',
  //   duration : '(number|boolean)'
  // }

  // const Event = {
  //   SLIDEDOWN      : `slidedown${EVENT_KEY}`,
  //   SLIDEUP        : `slideup${EVENT_KEY}`,
  //   CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  // }

  // const ClassName = {
  //   OPEN      : 'open',
  //   CLOSED    : 'closed'
  // }

  // const Selector = {
  //   FOOTER       : '.uvigo-footer',
  //   TOGGLE_OPEN  : '.toggle-open',
  //   TOGGLE_CLOSE : '.toggle-close',
  //   LAYER_TOGGLE : '.expanded-footer'
  // }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Slider {
    // Getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    // Public

    // Private

    // Static

    static addAria() {
      // .attr('aria-expanded', isOpen)
    }

    static initHomeSlider() {
      $('.sliderbehaviour').slick({
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        infinite: true
        // cssEase: 'linear',
        // variableWidth: true,
        // variableHeight: true,
        // rows: 0
      })
    }

    static initGallery() {
      const $slickGallery = $('.gallery.gallery-columns-1')

      $slickGallery.on('init reInit afterChange', function (event, slick, currentSlide) {
        const i = (currentSlide ? currentSlide : 0) + 1
        $(this).find('.gallery-item-slider-counter span').text(`${i}/${slick.slideCount}`)
      })

      $slickGallery.on('setPosition', function (event, slick) {
        const height = slick.$slider.find('.slick-current .gallery-icon').height()
        slick.$slider.find('.gallery-item-slider-controls').css('top', height)
        $(this).find('.gallery-item-slider-controls').css('top', $(this).find('.slick-current .gallery-icon').height())
      })


      $slickGallery.each(function () {
        const slider = $(this)
        slider.slick({
          slide: '.gallery-item',
          appendArrows: slider.find('.gallery-item-slider-arrows'),
          rows: 0
        })
      })


      $('.gallery.gallery-columns-1').on('click', '.gallery-icon a', (event) => {
        event.preventDefault()
      })

      $slickGallery.each(function () {
        const $currentSlider = $(this)

        $currentSlider.on('click', '.gallery-icon', (event) => {
          const targetModalId = $(event.currentTarget).attr('target')
          const $modalLayer = $(`#${targetModalId}`)

          $modalLayer.modal()

          const $slickGalleryModal = $(`#${targetModalId} .gallery-modal`)

          $modalLayer.on('shown.bs.modal', () => {
            const currentSlide = $currentSlider.slick('slickCurrentSlide')

            $slickGalleryModal.on('afterChange', () => {
              $slickGalleryModal.addClass('gallery-loaded')
            })

            if (!$slickGalleryModal.hasClass('slick-initialized')) {
              $slickGalleryModal.on('init reInit afterChange', function (event, slick, currentSlide) {
                const i = (currentSlide ? currentSlide : 0) + 1
                $(this).find('.gallery-item-slider-counter span').text(`${i}/${slick.slideCount}`)
              })

              $slickGalleryModal.on('setPosition', function (event, slick) {
                const height = slick.$slider.find('.slick-current .gallery-icon').height()
                slick.$slider.find('.gallery-item-slider-controls').css('top', height)
                $(this).find('.gallery-item-slider-controls').css('top', $(this).find('.slick-current .gallery-icon').height())
              })

              $slickGalleryModal.slick({
                slide: '.gallery-item',
                appendArrows: $(`#${targetModalId} .gallery-item-slider-arrows`),
                rows: 0
              })

              $slickGalleryModal.slick('slickGoTo', currentSlide)
            } else {
              $slickGalleryModal.slick('slickGoTo', currentSlide)
            }
          })

          $modalLayer.on('hidden.bs.modal', () => {
            $slickGalleryModal.removeClass('gallery-loaded')
          })
        })
      })

      // $('.gallery.gallery-columns-1').on('click', '.gallery-icon', () => {

      //   $('#galleryModal').modal()

      //   const $slickGalleryModal = $('#galleryModal .gallery-modal')

      //   $('#galleryModal').on('shown.bs.modal', () => {
      //     const currentSlide = $slickGallery.slick('slickCurrentSlide')

      //     $slickGalleryModal.on('afterChange', () => {
      //       $slickGalleryModal.addClass('gallery-loaded')
      //     })

      //     if (!$slickGalleryModal.hasClass('slick-initialized')) {
      //       $slickGalleryModal.on('init reInit afterChange', function (event, slick, currentSlide) {
      //         const i = (currentSlide ? currentSlide : 0) + 1
      //         $(this).find('.gallery-item-slider-counter span').text(`${i}/${slick.slideCount}`)
      //       })

      //       $slickGalleryModal.on('setPosition', function (event, slick) {
      //         const height = slick.$slider.find('.slick-current .gallery-icon').height()
      //         slick.$slider.find('.gallery-item-slider-controls').css('top', height)
      //         $(this).find('.gallery-item-slider-controls').css('top', $(this).find('.slick-current .gallery-icon').height())
      //       })

      //       $slickGalleryModal.slick({
      //         slide: '.gallery-item',
      //         appendArrows: $('#galleryModal .gallery-item-slider-arrows'),
      //         rows: 0
      //       })

      //       $slickGalleryModal.slick('slickGoTo', currentSlide)

      //     } else {

      //       $slickGalleryModal.slick('slickGoTo', currentSlide)

      //     }
      //   })

      //   $('#galleryModal').on('hidden.bs.modal', () => {
      //     $slickGalleryModal.removeClass('gallery-loaded')
      //   })
      // })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  // $.fn[NAME] = Slider._jQueryInterface
  // $.fn[NAME].Constructor = Slider
  // $.fn[NAME].noConflict = function () {
  //   $.fn[NAME] = JQUERY_NO_CONFLICT
  //   return Slider._jQueryInterface
  // }

  $(document).ready(() => {
    Slider.initHomeSlider()
    Slider.initGallery()
  })

  return Slider
})($)

export default Slider
