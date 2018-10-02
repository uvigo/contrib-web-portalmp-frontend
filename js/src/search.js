import $ from 'jquery'
import Util from 'bootstrap/js/src/util'

/**
 * --------------------------------------------------------------------------
 * Search (v1.0.0): search.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const Search = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'search'
  const VERSION             = '1.0.0'
  const DATA_KEY            = 'uv.search'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    ACTIVE : 'active',
    BUTTON : 'btn'
  }

  const Selector = {
    DATA_TOGGLE        : '[data-toggle="search"]',
    ACTIVE             : '.active',
    BUTTON             : '.btn'
  }

  const Event = {
    CLICK       : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Search {
    constructor(element, button) {
      this._element = element
      this._button = button
      this._addEventListeners()
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    // Public

    toggle() {
      const triggerChangeEvent = true
      const addAriaPressed = true

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed',
          !$(this._element).hasClass(ClassName.ACTIVE))
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE)
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }

    // Private

    _addEventListeners() {
      $(this._button).on('click', (event) => {
        event.preventDefault()
        event.stopPropagation()
        this.toggle()
      })
    }

    // Static

    static _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new Search(this, relatedTarget)
          $(this).data(DATA_KEY, data)
        }

        if (config === 'toggle') {
          data[config]()
        }
      })
    }

    static _closeSearch(event) {
      const toggles = $.makeArray($(Selector.DATA_TOGGLE))
      for (let i = 0; i < toggles.length; i++) {
        let target
        let button = toggles[i]
        if (!$(button).hasClass(ClassName.BUTTON)) {
          button = $(button).closest(Selector.BUTTON)
        }
        const selector = Util.getSelectorFromElement(button)

        if (selector) {
          target = $(selector)[0]
        }
        const context = $(target).data(DATA_KEY)

        if (!context) {
          continue
        }

        const searchBlock = context._element
        if (!$(target).hasClass(ClassName.ACTIVE)) {
          continue
        }

        if (event && $.contains(searchBlock, event.target)) {
          continue
        }

        target.setAttribute('aria-expanded', 'false')

        $(searchBlock).removeClass(ClassName.ACTIVE)
        // $(target).trigger($.Event(Event.HIDDEN, target))
      }
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK, Selector.DATA_TOGGLE, (event) => {
      event.preventDefault()
      event.stopPropagation()

      let target
      let button = event.target
      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON)
      }
      const selector = Util.getSelectorFromElement(button)

      if (selector) {
        target = $(selector)[0]
      }

      Search._jQueryInterface.call($(target), 'toggle', button)
    })
    .on(Event.CLICK, Search._closeSearch)

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Search._jQueryInterface
  $.fn[NAME].Constructor = Search
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Search._jQueryInterface
  }

  return Search
})($)

export default Search
