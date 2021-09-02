/*!
  * UVIGOWEB v1.2.2 (undefined)
  * Copyright 2018-2021 [object Object]
  * Licensed under MIT (https://github.com/uvigo/contrib-web-portalmp-frontend/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('slick-carousel'), require('jquery'), require('bootstrap/js/src/alert'), require('bootstrap/js/src/button'), require('bootstrap/js/src/carousel'), require('bootstrap/js/src/collapse'), require('bootstrap/js/src/dropdown'), require('bootstrap/js/src/modal'), require('bootstrap/js/src/util'), require('bootstrap/js/src/popover'), require('bootstrap/js/src/scrollspy'), require('bootstrap/js/src/tab'), require('bootstrap/js/src/tooltip')) :
  typeof define === 'function' && define.amd ? define(['exports', 'slick-carousel', 'jquery', 'bootstrap/js/src/alert', 'bootstrap/js/src/button', 'bootstrap/js/src/carousel', 'bootstrap/js/src/collapse', 'bootstrap/js/src/dropdown', 'bootstrap/js/src/modal', 'bootstrap/js/src/util', 'bootstrap/js/src/popover', 'bootstrap/js/src/scrollspy', 'bootstrap/js/src/tab', 'bootstrap/js/src/tooltip'], factory) :
  (global = global || self, factory(global.uvigoweb = {}, global.Slick, global.jQuery, global.alert, global.button, global.carousel, global.collapse, global.dropdown, global.modal, global.Util, global.popover, global.scrollspy, global.tab, global.tooltip));
}(this, (function (exports, slickCarousel, $, alert, button, carousel, collapse, dropdown, modal, Util, popover, scrollspy, tab, tooltip) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  alert = alert && Object.prototype.hasOwnProperty.call(alert, 'default') ? alert['default'] : alert;
  button = button && Object.prototype.hasOwnProperty.call(button, 'default') ? button['default'] : button;
  carousel = carousel && Object.prototype.hasOwnProperty.call(carousel, 'default') ? carousel['default'] : carousel;
  collapse = collapse && Object.prototype.hasOwnProperty.call(collapse, 'default') ? collapse['default'] : collapse;
  dropdown = dropdown && Object.prototype.hasOwnProperty.call(dropdown, 'default') ? dropdown['default'] : dropdown;
  modal = modal && Object.prototype.hasOwnProperty.call(modal, 'default') ? modal['default'] : modal;
  Util = Util && Object.prototype.hasOwnProperty.call(Util, 'default') ? Util['default'] : Util;
  popover = popover && Object.prototype.hasOwnProperty.call(popover, 'default') ? popover['default'] : popover;
  scrollspy = scrollspy && Object.prototype.hasOwnProperty.call(scrollspy, 'default') ? scrollspy['default'] : scrollspy;
  tab = tab && Object.prototype.hasOwnProperty.call(tab, 'default') ? tab['default'] : tab;
  tooltip = tooltip && Object.prototype.hasOwnProperty.call(tooltip, 'default') ? tooltip['default'] : tooltip;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  /**
   * --------------------------------------------------------------------------
   * UVigoweb (v1.0.0): footer.js
   * Licensed under MIT
   * --------------------------------------------------------------------------
   */

  var Footer = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    // const NAME                = 'footer'
    var VERSION = '1.0.0';
    var DATA_KEY = 'uv.footer';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api'; // const JQUERY_NO_CONFLICT  = $.fn[NAME]

    var Default = {
      toggle: true,
      duration: 300
    }; // const DefaultType = {
    //   toggle   : 'boolean',
    //   duration : '(number|boolean)'
    // }

    var Event = {
      SLIDEDOWN: "slidedown" + EVENT_KEY,
      SLIDEUP: "slideup" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    }; // const ClassName = {
    //   OPEN      : 'open',
    //   CLOSED    : 'closed'
    // }

    var Selector = {
      FOOTER: '.uvigo-footer',
      TOGGLE_OPEN: '.toggle-open',
      TOGGLE_CLOSE: '.toggle-close',
      LAYER_TOGGLE: '.expanded-footer'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Footer = /*#__PURE__*/function () {
      function Footer() {}

      // Public
      // Private
      // Static
      Footer.addAria = function addAria() {// .attr('aria-expanded', isOpen)
      };

      Footer.start = function start() {
        var _this = this;

        $(Selector.FOOTER).on(Event.CLICK_DATA_API, Selector.TOGGLE_OPEN, function (event) {
          event.preventDefault();
          var $footer = $(event.currentTarget).closest(Selector.FOOTER);
          $(Selector.LAYER_TOGGLE, $footer).slideDown(function () {
            $(Selector.TOGGLE_OPEN, $footer).hide();
            $(Selector.TOGGLE_CLOSE, $footer).show();
            $('html, body').animate({
              scrollTop: $footer.position().top
            }, Default.duration);

            _this.addAria();
          });
        }).on(Event.CLICK_DATA_API, Selector.TOGGLE_CLOSE, function (event) {
          event.preventDefault();
          var $footer = $(event.currentTarget).closest(Selector.FOOTER);
          $(Selector.LAYER_TOGGLE, $footer).slideUp(function () {
            $(Selector.TOGGLE_CLOSE, $footer).hide();
            $(Selector.TOGGLE_OPEN, $footer).show();

            _this.addAria();
          });
        });
      };

      _createClass(Footer, null, [{
        key: "VERSION",
        get: // Getters
        function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Footer;
    }();
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


    $(document).ready(function () {
      Footer.start();
    });
    return Footer;
  }($);

  /**
   * --------------------------------------------------------------------------
   * NavPrimary (v1.0.0): nav-primary.js
   * Licensed under MIT
   * --------------------------------------------------------------------------
   */

  var NavPrimary = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'navprimary';
    var VERSION = '1.0.0';
    var DATA_KEY = 'uv.navprimary';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      BUTTON: 'toggle-button',
      ACTIVE_NAVIGATION: 'activenavigation',
      MENU_ACTIVE: 'active',
      MENU_ITEM: 'nav-item'
    };
    var Selector = {
      DATA_TOGGLE: '[data-toggle="togglenav"]',
      ACTIVE: '.active',
      BUTTON: '.toggle-button',
      FIRST_LEVEL_MENU: 'ul.nav > li.menu-item > a.nav-link',
      FIRST_LEVEL: 'ul.nav > li.menu-item',
      MENU_ITEM: '.menu-item',
      // antes .nav-item
      SUBMENU: 'ul.sub-menu'
    };
    var Event = {
      CLICK: "click" + EVENT_KEY + DATA_API_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY + DATA_API_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY + DATA_API_KEY
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var NavPrimary = /*#__PURE__*/function () {
      function NavPrimary(element, button) {
        // console.log('Call constructor')
        this._element = element;
        this._button = button;

        this._addEventListeners();
      } // Getters


      var _proto = NavPrimary.prototype;

      // Public
      _proto.toggle = function toggle() {

        {
          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
        }

        {
          $(this._button).toggleClass(ClassName.ACTIVE);
          $('body').toggleClass(ClassName.ACTIVE_NAVIGATION);
        }
      };

      _proto.toggleLevelMenu = function toggleLevelMenu(linkItem) {
        // console.log('toggle first level menu')
        var $menu;

        if (!$(linkItem).hasClass(ClassName.MENU_ITEM)) {
          $menu = $(linkItem).closest(Selector.MENU_ITEM);
        } else {
          $menu = $(linkItem);
        } // console.log($menu)


        if ($menu.find(Selector.SUBMENU).length > 0) {
          if (!$menu.hasClass(ClassName.ACTIVE)) {
            var activeMenus = $.makeArray($(this._element).find(Selector.ACTIVE));

            for (var i = 0; i < activeMenus.length; i++) {
              if ($(activeMenus).hasClass(ClassName.ACTIVE)) {
                $(activeMenus).removeClass(ClassName.ACTIVE);
              }
            }
          }

          $menu.toggleClass(ClassName.MENU_ACTIVE);
        } else {
          var href = $menu.find('.nav-link').first().attr('href');
          document.location.href = href;
        }
      };

      _proto.openLevelMenu = function openLevelMenu(linkItem) {
        this.closeAllLevelMenu();
        var $menu;

        if (!$(linkItem).hasClass(ClassName.MENU_ITEM)) {
          $menu = $(linkItem).closest(Selector.MENU_ITEM);
        } else {
          $menu = $(linkItem);
        }

        $menu.addClass(ClassName.MENU_ACTIVE);
      };

      _proto.closeLevelMenu = function closeLevelMenu(linkItem) {
        var $menu;

        if (!$(linkItem).hasClass(ClassName.MENU_ITEM)) {
          $menu = $(linkItem).closest(Selector.MENU_ITEM);
        } else {
          $menu = $(linkItem);
        }

        $menu.removeClass(ClassName.MENU_ACTIVE);
      };

      _proto.closeAllLevelMenu = function closeAllLevelMenu() {
        var activeMenus = $(this._element).find(Selector.MENU_ITEM + Selector.ACTIVE);

        if (activeMenus.length > 0) {
          activeMenus.removeClass(ClassName.MENU_ACTIVE);
        }
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
        this._button = null;
      } // Private
      ;

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(this._button).on(Event.CLICK, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggle();
        }); // console.log(Selector.FIRST_LEVEL_MENU)

        $(this._element).on(Event.CLICK, Selector.FIRST_LEVEL_MENU, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggleLevelMenu(event.target);
        });
        $(this._element).on(Event.MOUSEENTER, Selector.FIRST_LEVEL, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.openLevelMenu(event.target);
        });
        $(this._element).on(Event.MOUSELEAVE, Selector.FIRST_LEVEL, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.closeLevelMenu(event.target);
        });
        $(document).on(Event.CLICK, function (event) {
          if (event && !$.contains(_this._element, event.target)) {
            _this.closeAllLevelMenu();
          }
        });
      } // Static
      ;

      NavPrimary._jQueryInterface = function _jQueryInterface(config, relatedTarget, menuItem) {
        // console.log('Load jQueryInteface')
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new NavPrimary(this, relatedTarget);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }

          if (config === 'toggleLevelMenu') {
            data[config](menuItem);
          }

          if (config === 'openLevelMenu') {
            data[config](menuItem);
          }
        });
      };

      NavPrimary._closeNavigation = function _closeNavigation(event) {
        var toggles = $.makeArray($(Selector.DATA_TOGGLE));

        for (var i = 0; i < toggles.length; i++) {
          var target = void 0;
          var button = toggles[i];

          if (!$(button).hasClass(ClassName.BUTTON)) {
            button = $(button).closest(Selector.BUTTON);
          }

          var selector = Util.getSelectorFromElement(button);

          if (selector) {
            target = $(selector)[0];
          }

          var context = $(target).data(DATA_KEY);

          if (!context) {
            continue;
          }

          if (!$('body').hasClass(ClassName.ACTIVE_NAVIGATION)) {
            continue;
          }

          var searchBlock = context._element;

          if (event && $.contains(searchBlock, event.target)) {
            continue;
          }

          target.setAttribute('aria-expanded', 'false');
          $(context._button).removeClass(ClassName.ACTIVE);
          $('body').removeClass(ClassName.ACTIVE_NAVIGATION); // $(target).trigger($.Event(Event.HIDDEN, target))
        }
      };

      _createClass(NavPrimary, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return NavPrimary;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.CLICK, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      event.stopPropagation(); // console.log('click on ', Selector.DATA_TOGGLE)

      var target;
      var button = event.target;

      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON)[0];
      }

      var selector = Util.getSelectorFromElement(button);

      if (selector) {
        target = $(selector)[0];
      }

      NavPrimary._jQueryInterface.call($(target), 'toggle', button);
    }).on(Event.CLICK, NavPrimary._closeNavigation).on(Event.CLICK, Selector.FIRST_LEVEL_MENU, function (event) {
      event.preventDefault();
      event.stopPropagation(); // console.log('click on ', Selector.FIRST_LEVEL_MENU)

      var button = $(document).find('[data-target="#nav-container"]');
      var $target = $('#nav-container');

      if ($target.length > 0) {
        if (button.length > 0) {
          NavPrimary._jQueryInterface.call($target, 'toggleLevelMenu', button[0], event.target);
        }
      }
    }).on(Event.MOUSEENTER, Selector.FIRST_LEVEL, function (event) {
      event.preventDefault();
      event.stopPropagation();
      var button = $(document).find('[data-target="#nav-container"]');
      var $target = $('#nav-container');

      if ($target.length > 0) {
        if (button.length > 0) {
          NavPrimary._jQueryInterface.call($target, 'openLevelMenu', button[0], event.target);
        }
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = NavPrimary._jQueryInterface;
    $.fn[NAME].Constructor = NavPrimary;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return NavPrimary._jQueryInterface;
    };

    return NavPrimary;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Search (v1.0.0): search.js
   * Licensed under MIT
   * --------------------------------------------------------------------------
   */

  var Search = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'search';
    var VERSION = '1.0.0';
    var DATA_KEY = 'uv.search';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      BUTTON: 'btn'
    };
    var Selector = {
      DATA_TOGGLE: '[data-toggle="search"]',
      ACTIVE: '.active',
      BUTTON: '.btn'
    };
    var Event = {
      CLICK: "click" + EVENT_KEY + DATA_API_KEY
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Search = /*#__PURE__*/function () {
      function Search(element, button) {
        this._element = element;
        this._button = button;

        this._addEventListeners();
      } // Getters


      var _proto = Search.prototype;

      // Public
      _proto.toggle = function toggle() {

        {
          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
        }

        {
          $(this._element).toggleClass(ClassName.ACTIVE);
        }
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      } // Private
      ;

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(this._button).on('click', function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggle();
        });
      } // Static
      ;

      Search._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Search(this, relatedTarget);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      };

      Search._closeSearch = function _closeSearch(event) {
        var toggles = $.makeArray($(Selector.DATA_TOGGLE));

        for (var i = 0; i < toggles.length; i++) {
          var target = void 0;
          var button = toggles[i];

          if (!$(button).hasClass(ClassName.BUTTON)) {
            button = $(button).closest(Selector.BUTTON);
          }

          var selector = Util.getSelectorFromElement(button);

          if (selector) {
            target = $(selector)[0];
          }

          var context = $(target).data(DATA_KEY);

          if (!context) {
            continue;
          }

          var searchBlock = context._element;

          if (!$(target).hasClass(ClassName.ACTIVE)) {
            continue;
          }

          if (event && $.contains(searchBlock, event.target)) {
            continue;
          }

          target.setAttribute('aria-expanded', 'false');
          $(searchBlock).removeClass(ClassName.ACTIVE); // $(target).trigger($.Event(Event.HIDDEN, target))
        }
      };

      _createClass(Search, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Search;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.CLICK, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      event.stopPropagation();
      var target;
      var button = event.target;

      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON);
      }

      var selector = Util.getSelectorFromElement(button);

      if (selector) {
        target = $(selector)[0];
      }

      Search._jQueryInterface.call($(target), 'toggle', button);
    }).on(Event.CLICK, Search._closeSearch);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Search._jQueryInterface;
    $.fn[NAME].Constructor = Search;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Search._jQueryInterface;
    };

    return Search;
  }($);

  /**
   * --------------------------------------------------------------------------
   * UVigoweb (v1.0.0): slider.js
   * Licensed under MIT
   * --------------------------------------------------------------------------
   */

  var Slider = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    // const NAME                = 'footer'
    var VERSION = '1.0.0'; // const DATA_KEY            = 'uv.slider'
    // const EVENT_KEY           = `.${DATA_KEY}`
    // const DATA_API_KEY        = '.data-api'
    // const JQUERY_NO_CONFLICT  = $.fn[NAME]

    var Default = {
      toggle: true,
      duration: 300
    }; // const DefaultType = {
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

    var Slider = /*#__PURE__*/function () {
      function Slider() {}

      // Public
      // Private
      // Static
      Slider.addAria = function addAria() {// .attr('aria-expanded', isOpen)
      };

      Slider.initHomeSlider = function initHomeSlider() {
        $('.sliderbehaviour').slick({
          // centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
          infinite: true // cssEase: 'linear',
          // variableWidth: true,
          // variableHeight: true,
          // rows: 0

        });
      };

      Slider.initGallery = function initGallery() {
        var $slickGallery = $('.gallery.gallery-columns-1');
        $slickGallery.on('init reInit afterChange', function (event, slick, currentSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          $(this).find('.gallery-item-slider-counter span').text(i + "/" + slick.slideCount);
        });
        $slickGallery.on('setPosition', function (event, slick) {
          var height = slick.$slider.find('.slick-current .gallery-icon').height();
          slick.$slider.find('.gallery-item-slider-controls').css('top', height);
          $(this).find('.gallery-item-slider-controls').css('top', $(this).find('.slick-current .gallery-icon').height());
        });
        $slickGallery.each(function () {
          var slider = $(this);
          slider.slick({
            slide: '.gallery-item',
            appendArrows: slider.find('.gallery-item-slider-arrows'),
            rows: 0
          });
        });
        $('.gallery.gallery-columns-1').on('click', '.gallery-icon a', function (event) {
          event.preventDefault();
        });
        $slickGallery.each(function () {
          var $currentSlider = $(this);
          $currentSlider.on('click', '.gallery-icon', function (event) {
            var targetModalId = $(event.currentTarget).attr('target');
            var $modalLayer = $("#" + targetModalId);
            $modalLayer.modal();
            var $slickGalleryModal = $("#" + targetModalId + " .gallery-modal");
            $modalLayer.on('shown.bs.modal', function () {
              var currentSlide = $currentSlider.slick('slickCurrentSlide');
              $slickGalleryModal.on('afterChange', function () {
                $slickGalleryModal.addClass('gallery-loaded');
              });

              if (!$slickGalleryModal.hasClass('slick-initialized')) {
                $slickGalleryModal.on('init reInit afterChange', function (event, slick, currentSlide) {
                  var i = (currentSlide ? currentSlide : 0) + 1;
                  $(this).find('.gallery-item-slider-counter span').text(i + "/" + slick.slideCount);
                });
                $slickGalleryModal.on('setPosition', function (event, slick) {
                  var height = slick.$slider.find('.slick-current .gallery-icon').height();
                  slick.$slider.find('.gallery-item-slider-controls').css('top', height);
                  $(this).find('.gallery-item-slider-controls').css('top', $(this).find('.slick-current .gallery-icon').height());
                });
                $slickGalleryModal.slick({
                  slide: '.gallery-item',
                  appendArrows: $("#" + targetModalId + " .gallery-item-slider-arrows"),
                  rows: 0
                });
                $slickGalleryModal.slick('slickGoTo', currentSlide);
              } else {
                $slickGalleryModal.slick('slickGoTo', currentSlide);
              }
            });
            $modalLayer.on('hidden.bs.modal', function () {
              $slickGalleryModal.removeClass('gallery-loaded');
            });
          });
        }); // $('.gallery.gallery-columns-1').on('click', '.gallery-icon', () => {
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
      };

      _createClass(Slider, null, [{
        key: "VERSION",
        get: // Getters
        function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Slider;
    }();
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


    $(document).ready(function () {
      Slider.initHomeSlider();
      Slider.initGallery();
    });
    return Slider;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Table (v1.0.0): table.js
   * Licensed under MIT
   * --------------------------------------------------------------------------
   */

  var TableResponsive = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tableresponsive';
    var VERSION = '1.0.0';
    var DATA_KEY = 'uv.tableresponsive';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      wrap: true,
      initTable: 'initTable'
    };
    var DefaultType = {
      wrap: 'boolean'
    };
    var Event = {
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      ACTIVE: 'active-headers'
    };
    var Selector = {
      ACTIVE: '.active-headers',
      DATA_BEHAVIOUR: '[data-behaviour="table-responsive"]'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var TableResponsive = /*#__PURE__*/function () {
      function TableResponsive(element, config) {
        this._config = this._getConfig(config);
        this._element = $(element)[0];

        this._addEventListeners();
      } // Getters


      var _proto = TableResponsive.prototype;

      // Public
      _proto.initTable = function initTable() {
        $(this._element).addClass(ClassName.ACTIVE);
        var $table = $(this._element);
        var headerLabels = [];
        $('thead th', $table).each(function (index, tableHeader) {
          headerLabels.push($(tableHeader).html());
        });
        $('tbody tr', $table).each(function (index, tr) {
          var $tds = $(tr).find('td');
          $tds.each(function (index, td) {
            $(td).attr('data-label', headerLabels[index]);
          });
        });
      };

      _proto.dispose = function dispose() {
        $(this._element).off(EVENT_KEY);
        $.removeData(this._element, DATA_KEY);
        this._config = null;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread2(_objectSpread2({}, Default), config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        if (this._config.wrap) ;
      } // Static
      ;

      TableResponsive._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = _objectSpread2(_objectSpread2({}, Default), $(this).data());

          if (typeof config === 'object') {
            _config = _objectSpread2(_objectSpread2({}, _config), config);
          }

          var action = typeof config === 'string' ? config : _config.initTable;

          if (!data) {
            data = new TableResponsive(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') {
              throw new TypeError("No method named \"" + action + "\"");
            }

            data[action]();
          }
        });
      };

      _createClass(TableResponsive, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return TableResponsive;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      $(Selector.DATA_BEHAVIOUR).each(function () {
        var $table = $(this); // console.log($table)

        TableResponsive._jQueryInterface.call($table, $table.data());
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = TableResponsive._jQueryInterface;
    $.fn[NAME].Constructor = TableResponsive;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return TableResponsive._jQueryInterface;
    };

    return TableResponsive;
  }($);

  /**
   * --------------------------------------------------------------------------
   * UVIGOWEB (v1.1.2): index.js
   * Licensed under MIT
   * --------------------------------------------------------------------------
   */

  (function ($) {
    if (typeof $ === 'undefined') {
      throw new TypeError('uvigoweb\'s JavaScript requires jQuery. jQuery must be included before uvigoweb\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('uvigoweb\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);

  exports.Alert = alert;
  exports.Button = button;
  exports.Carousel = carousel;
  exports.Collapse = collapse;
  exports.Dropdown = dropdown;
  exports.Modal = modal;
  exports.Util = Util;
  exports.Popover = popover;
  exports.Scrollspy = scrollspy;
  exports.Tab = tab;
  exports.Tooltip = tooltip;
  exports.Footer = Footer;
  exports.NavPrimary = NavPrimary;
  exports.Search = Search;
  exports.Slider = Slider;
  exports.TableResponsive = TableResponsive;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=uvigoweb.js.map
