import $ from 'jquery'
import Util from 'bootstrap/js/src/util'

/**
 * --------------------------------------------------------------------------
 * NavPrimary (v1.0.0): nav-primary.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const NavPrimary = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'navprimary'
  const VERSION             = '1.0.0'
  const DATA_KEY            = 'uv.navprimary'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    ACTIVE : 'active',
    BUTTON : 'toggle-button',
    ACTIVE_NAVIGATION : 'activenavigation',
    MENU_ACTIVE: 'active',
    MENU_ITEM: 'nav-item',
    MENU_LINK: 'nav-link'
  }

  const Selector = {
    DATA_TOGGLE        : '[data-toggle="togglenav"]',
    ACTIVE             : '.active',
    BUTTON             : '.toggle-button',
    FIRST_LEVEL_MENU   : 'ul.nav > li.nav-item > a.nav-link',
    FIRST_LEVEL        : 'ul.nav > li.nav-item',
    MENU_ITEM          : '.nav-item',
    MENU_LINK          : '.nav-link',
    SUBMENU            : 'ul.sub-menu'
  }

  const Event = {
    CLICK       : `click${EVENT_KEY}${DATA_API_KEY}`,
    MOUSEENTER  : `mouseenter${EVENT_KEY}${DATA_API_KEY}`,
    MOUSELEAVE  : `mouseleave${EVENT_KEY}${DATA_API_KEY}`
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class NavPrimary {
    constructor(element, button) {
      // console.log('Call constructor')
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
      // console.log('Toggle responsive menu')
      const triggerChangeEvent = true
      const addAriaPressed = true

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE))
      }

      if (triggerChangeEvent) {
        $(this._button).toggleClass(ClassName.ACTIVE)
        $('body').toggleClass(ClassName.ACTIVE_NAVIGATION)
      }
    }

    toggleLevelMenu(linkItem) {
      // console.log('toggle first level menu')

      let $menu
      if (!$(linkItem).hasClass(ClassName.MENU_ITEM)) {
        $menu = $(linkItem).closest(Selector.MENU_ITEM)
      } else {
        $menu = $(linkItem)
      }
      // console.log($menu)
      if ($menu.find(Selector.SUBMENU).length > 0) {
        if (!$menu.hasClass(ClassName.ACTIVE)) {
          const activeMenus = $.makeArray($(this._element).find(Selector.ACTIVE))
          for (let i = 0; i < activeMenus.length; i++) {
            if ($(activeMenus).hasClass(ClassName.ACTIVE)) {
              $(activeMenus).removeClass(ClassName.ACTIVE)
            }
          }
        }
        $menu.toggleClass(ClassName.MENU_ACTIVE)
      } else {
        const href = $menu.find('.nav-link').first().attr('href')
        document.location.href = href
      }
    }

    openLevelMenu(linkItem) {
      this.closeAllLevelMenu()
      let $menu
      if (!$(linkItem).hasClass(ClassName.MENU_ITEM)) {
        $menu = $(linkItem).closest(Selector.MENU_ITEM)
      } else {
        $menu = $(linkItem)
      }

      $menu.addClass(ClassName.MENU_ACTIVE)
    }

    closeLevelMenu(linkItem) {
      let $menu
      if (!$(linkItem).hasClass(ClassName.MENU_ITEM)) {
        $menu = $(linkItem).closest(Selector.MENU_ITEM)
      } else {
        $menu = $(linkItem)
      }

      $menu.removeClass(ClassName.MENU_ACTIVE)
    }

    closeAllLevelMenu() {
      const activeMenus = $(this._element).find(Selector.MENU_ITEM + Selector.ACTIVE)
      if (activeMenus.length > 0) {
        activeMenus.removeClass(ClassName.MENU_ACTIVE)
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
      this._button  = null
    }

    // Private

    _addEventListeners() {
      $(this._button).on(Event.CLICK, (event) => {
        event.preventDefault()
        event.stopPropagation()
        this.toggle()
      })
      // console.log(Selector.FIRST_LEVEL_MENU)

      $(this._element).on(Event.CLICK, Selector.FIRST_LEVEL_MENU, (event) => {
        event.preventDefault()
        event.stopPropagation()
        this.toggleLevelMenu(event.target)
      })

      $(this._element).on(Event.MOUSEENTER, Selector.FIRST_LEVEL, (event) => {
        event.preventDefault()
        event.stopPropagation()
        this.openLevelMenu(event.target)
      })

      $(this._element).on(Event.MOUSELEAVE, Selector.FIRST_LEVEL, (event) => {
        event.preventDefault()
        event.stopPropagation()
        this.closeLevelMenu(event.target)
      })

      $(document).on(Event.CLICK, (event) => {
        if (event && !$.contains(this._element, event.target)) {
          this.closeAllLevelMenu()
        }
      })
    }

    // Static

    static _jQueryInterface(config, relatedTarget, menuItem) {
      // console.log('Load jQueryInteface')
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new NavPrimary(this, relatedTarget)
          $(this).data(DATA_KEY, data)
        }

        if (config === 'toggle') {
          data[config]()
        }

        if (config === 'toggleLevelMenu') {
          data[config](menuItem)
        }

        if (config === 'openLevelMenu') {
          data[config](menuItem)
        }
      })
    }

    static _closeNavigation(event) {
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

        if (!$('body').hasClass(ClassName.ACTIVE_NAVIGATION)) {
          continue
        }

        const searchBlock = context._element
        if (event && $.contains(searchBlock, event.target)) {
          continue
        }

        target.setAttribute('aria-expanded', 'false')

        $(context._button).removeClass(ClassName.ACTIVE)
        $('body').removeClass(ClassName.ACTIVE_NAVIGATION)
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

      // console.log('click on ', Selector.DATA_TOGGLE)

      let target
      let button = event.target
      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON)[0]
      }
      const selector = Util.getSelectorFromElement(button)

      if (selector) {
        target = $(selector)[0]
      }

      NavPrimary._jQueryInterface.call($(target), 'toggle', button)
    })
    .on(Event.CLICK, NavPrimary._closeNavigation)
    .on(Event.CLICK, Selector.FIRST_LEVEL_MENU, (event) => {
      event.preventDefault()
      event.stopPropagation()

      // console.log('click on ', Selector.FIRST_LEVEL_MENU)

      const button = $(document).find('[data-target="#nav-container"]')
      const $target = $('#nav-container')
      if ($target.length > 0) {
        if (button.length > 0) {
          NavPrimary._jQueryInterface.call($target, 'toggleLevelMenu', button[0], event.target)
        }
      }
    })
    .on(Event.MOUSEENTER, Selector.FIRST_LEVEL, (event) => {
      event.preventDefault()
      event.stopPropagation()

      const button = $(document).find('[data-target="#nav-container"]')
      const $target = $('#nav-container')
      if ($target.length > 0) {
        if (button.length > 0) {
          NavPrimary._jQueryInterface.call($target, 'openLevelMenu', button[0], event.target)
        }
      }
    })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = NavPrimary._jQueryInterface
  $.fn[NAME].Constructor = NavPrimary
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return NavPrimary._jQueryInterface
  }

  return NavPrimary
})($)

export default NavPrimary
