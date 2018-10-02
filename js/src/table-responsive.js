import $ from 'jquery'
import Util from 'bootstrap/js/src/util'

/**
 * --------------------------------------------------------------------------
 * Table (v1.0.0): table.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const TableResponsive = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                   = 'tableresponsive'
  const VERSION                = '1.0.0'
  const DATA_KEY               = 'uv.tableresponsive'
  const EVENT_KEY              = `.${DATA_KEY}`
  const DATA_API_KEY           = '.data-api'
  const JQUERY_NO_CONFLICT     = $.fn[NAME]

  const Default = {
    wrap      : true,
    initTable : 'initTable'
  }

  const DefaultType = {
    wrap     : 'boolean'
  }

  const Event = {
    LOAD_DATA_API  : `load${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    ACTIVE   : 'active-headers'
  }

  const Selector = {
    ACTIVE      : '.active-headers',
    DATA_BEHAVIOUR : '[data-behaviour="table-responsive"]'
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class TableResponsive {
    constructor(element, config) {
      this._config            = this._getConfig(config)
      this._element           = $(element)[0]

      this._addEventListeners()
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    // Public

    initTable() {
      $(this._element).addClass(ClassName.ACTIVE)

      const $table = $(this._element)
      const headerLabels = []
      $('thead th', $table).each((index, tableHeader) => {
        headerLabels.push($(tableHeader).html())
      })

      $('tbody tr', $table).each((index, tr) => {
        const $tds = $(tr).find('td')
        $tds.each((index, td) => {
          $(td).attr('data-label', headerLabels[index])
        })
      })
    }

    dispose() {
      $(this._element).off(EVENT_KEY)
      $.removeData(this._element, DATA_KEY)

      this._config = null
    }

    // Private

    _getConfig(config) {
      config = {
        ...Default,
        ...config
      }
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _addEventListeners() {
      if (this._config.wrap) {
        // console.log('OK')
      }
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)
        let _config = {
          ...Default,
          ...$(this).data()
        }

        if (typeof config === 'object') {
          _config = {
            ..._config,
            ...config
          }
        }

        const action = typeof config === 'string' ? config : _config.initTable

        if (!data) {
          data = new TableResponsive(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError(`No method named "${action}"`)
          }
          data[action]()
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, () => {
    $(Selector.DATA_BEHAVIOUR).each(function () {
      const $table = $(this)
      // console.log($table)
      TableResponsive._jQueryInterface.call($table, $table.data())
    })
  })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = TableResponsive._jQueryInterface
  $.fn[NAME].Constructor = TableResponsive
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return TableResponsive._jQueryInterface
  }

  return TableResponsive
})($)

export default TableResponsive
