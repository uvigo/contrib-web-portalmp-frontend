import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * UVigoweb (v1.0.0): footer.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const Footer = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  // const NAME                = 'footer'
  const VERSION             = '1.0.0'
  const DATA_KEY            = 'uv.footer'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  // const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Default = {
    toggle   : true,
    duration : 300
  }

  // const DefaultType = {
  //   toggle   : 'boolean',
  //   duration : '(number|boolean)'
  // }

  const Event = {
    SLIDEDOWN      : `slidedown${EVENT_KEY}`,
    SLIDEUP        : `slideup${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  // const ClassName = {
  //   OPEN      : 'open',
  //   CLOSED    : 'closed'
  // }

  const Selector = {
    FOOTER       : '.uvigo-footer',
    TOGGLE_OPEN  : '.toggle-open',
    TOGGLE_CLOSE : '.toggle-close',
    LAYER_TOGGLE : '.expanded-footer'
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Footer {
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

    static start() {
      $(Selector.FOOTER).on(Event.CLICK_DATA_API, Selector.TOGGLE_OPEN, (event) => {
        event.preventDefault()

        const $footer = $(event.currentTarget).closest(Selector.FOOTER)

        $(Selector.LAYER_TOGGLE, $footer).slideDown(() => {
          $(Selector.TOGGLE_OPEN, $footer).hide()
          $(Selector.TOGGLE_CLOSE, $footer).show()

          $('html, body').animate({
            scrollTop: $footer.position().top
          }, Default.duration)

          this.addAria()
        })
      }).on(Event.CLICK_DATA_API, Selector.TOGGLE_CLOSE, (event) => {
        event.preventDefault()

        const $footer = $(event.currentTarget).closest(Selector.FOOTER)

        $(Selector.LAYER_TOGGLE, $footer).slideUp(() => {
          $(Selector.TOGGLE_CLOSE, $footer).hide()
          $(Selector.TOGGLE_OPEN, $footer).show()

          this.addAria()
        })
      })
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

  // $.fn[NAME] = Footer._jQueryInterface
  // $.fn[NAME].Constructor = Footer
  // $.fn[NAME].noConflict = function () {
  //   $.fn[NAME] = JQUERY_NO_CONFLICT
  //   return Footer._jQueryInterface
  // }

  $(document).ready(() => {
    Footer.start()
  })

  return Footer
})($)

export default Footer
