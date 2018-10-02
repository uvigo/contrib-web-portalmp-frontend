import 'slick-carousel'
import $ from 'jquery'
import Alert from 'bootstrap/js/src/alert'
import Button from 'bootstrap/js/src/button'
import Carousel from 'bootstrap/js/src/carousel'
import Collapse from 'bootstrap/js/src/collapse'
import Dropdown from 'bootstrap/js/src/dropdown'
import Footer from './footer'
import Modal from 'bootstrap/js/src/modal'
import NavPrimary from './nav-primary'
import Popover from 'bootstrap/js/src/popover'
import Scrollspy from 'bootstrap/js/src/scrollspy'
import Search from './search'
import Slider from './slider'
import Tab from 'bootstrap/js/src/tab'
import TableResponsive from './table-responsive'
import Tooltip from 'bootstrap/js/src/tooltip'
import Util from 'bootstrap/js/src/util'

/**
 * --------------------------------------------------------------------------
 * UVIGOWEB (v1.0.0): index.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

(($) => {
  if (typeof $ === 'undefined') {
    throw new TypeError('uvigoweb\'s JavaScript requires jQuery. jQuery must be included before uvigoweb\'s JavaScript.')
  }

  const version = $.fn.jquery.split(' ')[0].split('.')
  const minMajor = 1
  const ltMajor = 2
  const minMinor = 9
  const minPatch = 1
  const maxMajor = 4

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('uvigoweb\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})($)

export {
  Util,
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Footer,
  Modal,
  NavPrimary,
  Popover,
  Scrollspy,
  Tab,
  TableResponsive,
  Tooltip,
  Search,
  Slider
}
