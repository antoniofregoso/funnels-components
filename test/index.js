(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/simple-parallax-js/dist/simpleParallax.min.js
  var require_simpleParallax_min = __commonJS({
    "node_modules/simple-parallax-js/dist/simpleParallax.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("simpleParallax", [], e) : "object" == typeof exports ? exports.simpleParallax = e() : t.simpleParallax = e();
      }(window, function() {
        return function(t) {
          var e = {};
          function n(i) {
            if (e[i])
              return e[i].exports;
            var r = e[i] = { i, l: false, exports: {} };
            return t[i].call(r.exports, r, r.exports, n), r.l = true, r.exports;
          }
          return n.m = t, n.c = e, n.d = function(t2, e2, i) {
            n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: i });
          }, n.r = function(t2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, n.t = function(t2, e2) {
            if (1 & e2 && (t2 = n(t2)), 8 & e2)
              return t2;
            if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
              return t2;
            var i = /* @__PURE__ */ Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
              for (var r in t2)
                n.d(i, r, function(e3) {
                  return t2[e3];
                }.bind(null, r));
            return i;
          }, n.n = function(t2) {
            var e2 = t2 && t2.__esModule ? function() {
              return t2.default;
            } : function() {
              return t2;
            };
            return n.d(e2, "a", e2), e2;
          }, n.o = function(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }, n.p = "", n(n.s = 0);
        }([function(t, e, n) {
          "use strict";
          n.r(e), n.d(e, "default", function() {
            return x;
          });
          var i = function() {
            return Element.prototype.closest && "IntersectionObserver" in window;
          };
          function r(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var i2 = e2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
            }
          }
          var s = new (function() {
            function t2() {
              !function(t3, e3) {
                if (!(t3 instanceof e3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2), this.positions = { top: 0, bottom: 0, height: 0 };
            }
            var e2, n2, i2;
            return e2 = t2, (n2 = [{ key: "setViewportTop", value: function(t3) {
              return this.positions.top = t3 ? t3.scrollTop : window.pageYOffset, this.positions;
            } }, { key: "setViewportBottom", value: function() {
              return this.positions.bottom = this.positions.top + this.positions.height, this.positions;
            } }, { key: "setViewportAll", value: function(t3) {
              return this.positions.top = t3 ? t3.scrollTop : window.pageYOffset, this.positions.height = t3 ? t3.clientHeight : document.documentElement.clientHeight, this.positions.bottom = this.positions.top + this.positions.height, this.positions;
            } }]) && r(e2.prototype, n2), i2 && r(e2, i2), t2;
          }())(), o = function(t2) {
            return NodeList.prototype.isPrototypeOf(t2) || HTMLCollection.prototype.isPrototypeOf(t2) ? Array.from(t2) : "string" == typeof t2 || t2 instanceof String ? document.querySelectorAll(t2) : [t2];
          }, a = function() {
            for (var t2, e2 = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n2 = 0; void 0 === t2; )
              t2 = void 0 !== document.createElement("div").style[e2[n2]] ? e2[n2] : void 0, n2 += 1;
            return t2;
          }(), l = function(t2) {
            return "img" !== t2.tagName.toLowerCase() && "picture" !== t2.tagName.toLowerCase() || !!t2 && (!!t2.complete && (void 0 === t2.naturalWidth || 0 !== t2.naturalWidth));
          };
          function u(t2) {
            return function(t3) {
              if (Array.isArray(t3))
                return c(t3);
            }(t2) || function(t3) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t3))
                return Array.from(t3);
            }(t2) || function(t3, e2) {
              if (!t3)
                return;
              if ("string" == typeof t3)
                return c(t3, e2);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              "Object" === n2 && t3.constructor && (n2 = t3.constructor.name);
              if ("Map" === n2 || "Set" === n2)
                return Array.from(t3);
              if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
                return c(t3, e2);
            }(t2) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function c(t2, e2) {
            (null == e2 || e2 > t2.length) && (e2 = t2.length);
            for (var n2 = 0, i2 = new Array(e2); n2 < e2; n2++)
              i2[n2] = t2[n2];
            return i2;
          }
          function h(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var i2 = e2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
            }
          }
          var f = function() {
            function t2(e3, n3) {
              var i3 = this;
              !function(t3, e4) {
                if (!(t3 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2), this.element = e3, this.elementContainer = e3, this.settings = n3, this.isVisible = true, this.isInit = false, this.oldTranslateValue = -1, this.init = this.init.bind(this), this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null, l(e3) ? this.init() : this.element.addEventListener("load", function() {
                setTimeout(function() {
                  i3.init(true);
                }, 50);
              });
            }
            var e2, n2, i2;
            return e2 = t2, (n2 = [{ key: "init", value: function(t3) {
              var e3 = this;
              this.isInit || (t3 && (this.rangeMax = null), this.element.closest(".simpleParallax") || (false === this.settings.overflow && this.wrapElement(this.element), this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), this.settings.delay > 0 ? setTimeout(function() {
                e3.setTransitionCSS(), e3.elementContainer.classList.add("simple-parallax-initialized");
              }, 10) : this.elementContainer.classList.add("simple-parallax-initialized"), this.isInit = true));
            } }, { key: "wrapElement", value: function() {
              var t3 = this.element.closest("picture") || this.element, e3 = this.customWrapper || document.createElement("div");
              e3.classList.add("simpleParallax"), e3.style.overflow = "hidden", this.customWrapper || (t3.parentNode.insertBefore(e3, t3), e3.appendChild(t3)), this.elementContainer = e3;
            } }, { key: "unWrapElement", value: function() {
              var t3 = this.elementContainer;
              this.customWrapper ? (t3.classList.remove("simpleParallax"), t3.style.overflow = "") : t3.replaceWith.apply(t3, u(t3.childNodes));
            } }, { key: "setTransformCSS", value: function() {
              false === this.settings.overflow && (this.element.style[a] = "scale(".concat(this.settings.scale, ")")), this.element.style.willChange = "transform";
            } }, { key: "setTransitionCSS", value: function() {
              this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
            } }, { key: "unSetStyle", value: function() {
              this.element.style.willChange = "", this.element.style[a] = "", this.element.style.transition = "";
            } }, { key: "getElementOffset", value: function() {
              var t3 = this.elementContainer.getBoundingClientRect();
              if (this.elementHeight = t3.height, this.elementTop = t3.top + s.positions.top, this.settings.customContainer) {
                var e3 = this.settings.customContainer.getBoundingClientRect();
                this.elementTop = t3.top - e3.top + s.positions.top;
              }
              this.elementBottom = this.elementHeight + this.elementTop;
            } }, { key: "buildThresholdList", value: function() {
              for (var t3 = [], e3 = 1; e3 <= this.elementHeight; e3++) {
                var n3 = e3 / this.elementHeight;
                t3.push(n3);
              }
              return t3;
            } }, { key: "intersectionObserver", value: function() {
              var t3 = { root: null, threshold: this.buildThresholdList() };
              this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), t3), this.observer.observe(this.element);
            } }, { key: "intersectionObserverCallback", value: function(t3) {
              var e3 = this;
              t3.forEach(function(t4) {
                t4.isIntersecting ? e3.isVisible = true : e3.isVisible = false;
              });
            } }, { key: "checkIfVisible", value: function() {
              return this.elementBottom > s.positions.top && this.elementTop < s.positions.bottom;
            } }, { key: "getRangeMax", value: function() {
              var t3 = this.element.clientHeight;
              this.rangeMax = t3 * this.settings.scale - t3;
            } }, { key: "getTranslateValue", value: function() {
              var t3 = ((s.positions.bottom - this.elementTop) / ((s.positions.height + this.elementHeight) / 100)).toFixed(1);
              return t3 = Math.min(100, Math.max(0, t3)), 0 !== this.settings.maxTransition && t3 > this.settings.maxTransition && (t3 = this.settings.maxTransition), this.oldPercentage !== t3 && (this.rangeMax || this.getRangeMax(), this.translateValue = (t3 / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t3, this.oldTranslateValue = this.translateValue, true));
            } }, { key: "animate", value: function() {
              var t3, e3 = 0, n3 = 0;
              (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (n3 = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")), (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e3 = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")), t3 = false === this.settings.overflow ? "translate3d(".concat(n3, ", ").concat(e3, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(n3, ", ").concat(e3, ", 0)"), this.element.style[a] = t3;
            } }]) && h(e2.prototype, n2), i2 && h(e2, i2), t2;
          }();
          function m(t2) {
            return function(t3) {
              if (Array.isArray(t3))
                return y(t3);
            }(t2) || function(t3) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t3))
                return Array.from(t3);
            }(t2) || d(t2) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function p(t2, e2) {
            return function(t3) {
              if (Array.isArray(t3))
                return t3;
            }(t2) || function(t3, e3) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t3)))
                return;
              var n2 = [], i2 = true, r2 = false, s2 = void 0;
              try {
                for (var o2, a2 = t3[Symbol.iterator](); !(i2 = (o2 = a2.next()).done) && (n2.push(o2.value), !e3 || n2.length !== e3); i2 = true)
                  ;
              } catch (t4) {
                r2 = true, s2 = t4;
              } finally {
                try {
                  i2 || null == a2.return || a2.return();
                } finally {
                  if (r2)
                    throw s2;
                }
              }
              return n2;
            }(t2, e2) || d(t2, e2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function d(t2, e2) {
            if (t2) {
              if ("string" == typeof t2)
                return y(t2, e2);
              var n2 = Object.prototype.toString.call(t2).slice(8, -1);
              return "Object" === n2 && t2.constructor && (n2 = t2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? y(t2, e2) : void 0;
            }
          }
          function y(t2, e2) {
            (null == e2 || e2 > t2.length) && (e2 = t2.length);
            for (var n2 = 0, i2 = new Array(e2); n2 < e2; n2++)
              i2[n2] = t2[n2];
            return i2;
          }
          function v(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var i2 = e2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
            }
          }
          var g, b, w = false, T = [], x = function() {
            function t2(e3, n3) {
              if (function(t3, e4) {
                if (!(t3 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2), e3 && i()) {
                if (this.elements = o(e3), this.defaults = { delay: 0, orientation: "up", scale: 1.3, overflow: false, transition: "cubic-bezier(0,0,0,1)", customContainer: "", customWrapper: "", maxTransition: 0 }, this.settings = Object.assign(this.defaults, n3), this.settings.customContainer) {
                  var r3 = p(o(this.settings.customContainer), 1);
                  this.customContainer = r3[0];
                }
                this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.refresh = this.refresh.bind(this), this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), this.init();
              }
            }
            var e2, n2, r2;
            return e2 = t2, (n2 = [{ key: "init", value: function() {
              var t3 = this;
              s.setViewportAll(this.customContainer), T = [].concat(m(this.elements.map(function(e3) {
                return new f(e3, t3.settings);
              })), m(T)), w || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), w = true);
            } }, { key: "resizeIsDone", value: function() {
              clearTimeout(b), b = setTimeout(this.refresh, 200);
            } }, { key: "proceedRequestAnimationFrame", value: function() {
              var t3 = this;
              s.setViewportTop(this.customContainer), this.lastPosition !== s.positions.top ? (s.setViewportBottom(), T.forEach(function(e3) {
                t3.proceedElement(e3);
              }), g = window.requestAnimationFrame(this.proceedRequestAnimationFrame), this.lastPosition = s.positions.top) : g = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
            } }, { key: "proceedElement", value: function(t3) {
              (this.customContainer ? t3.checkIfVisible() : t3.isVisible) && t3.getTranslateValue() && t3.animate();
            } }, { key: "refresh", value: function() {
              s.setViewportAll(this.customContainer), T.forEach(function(t3) {
                t3.getElementOffset(), t3.getRangeMax();
              }), this.lastPosition = -1;
            } }, { key: "destroy", value: function() {
              var t3 = this, e3 = [];
              T = T.filter(function(n3) {
                return t3.elements.includes(n3.element) ? (e3.push(n3), false) : n3;
              }), e3.forEach(function(e4) {
                e4.unSetStyle(), false === t3.settings.overflow && e4.unWrapElement();
              }), T.length || (window.cancelAnimationFrame(g), window.removeEventListener("resize", this.refresh), w = false);
            } }]) && v(e2.prototype, n2), r2 && v(e2, r2), t2;
          }();
        }]).default;
      });
    }
  });

  // src/components/ImageText.js
  var import_simple_parallax_js = __toESM(require_simpleParallax_min());
  var ImageText = class extends HTMLElement {
    constructor() {
      super();
    }
    render() {
      this.innerHTML = /* html */
      `
        <section class="section has-text-centered">
        <h1 class="title">Section</h1>
            <h2 class="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
            </h2>
            <div class="columns is-vcentered">
                <div class="column">
                <figure class="image">
                    <img src="https://source.unsplash.com/random/?city,night">
                </figure>
                </div>
                <div class="column">
                    <div class="content has-text-left">
                        <h1>Hello World</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eum tempora error tenetur consequuntur alias impedit quos delectus nobis et ad inventore, eveniet quidem quia ea. Aspernatur cum atque maxime!</p>
                    </div>
                    <a class="button is-info" href="#">Info</a>
                </div>
            </div>
        </section>
        `;
      var image = this.querySelector("img");
      new import_simple_parallax_js.default(image, {
        orientation: "left"
      });
    }
    connectedCallback() {
      this.render();
    }
  };
  customElements.define("image-text", ImageText);

  // src/components/ImageBig.js
  var import_simple_parallax_js2 = __toESM(require_simpleParallax_min());
  var ImageBig = class extends HTMLElement {
    constructor() {
      super();
    }
    render() {
      this.innerHTML = /* html */
      `
        <section class="section has-text-centered">
        <h1 class="title">Section</h1>
            <h2 class="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
            </h2>
            <figure class="image">
                <img src="https://source.unsplash.com/random/?nature">
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius velit ex neque accusantium sapiente, perferendis distinctio dolorem illo laboriosam dignissimos consectetur aliquam voluptate non perspiciatis ea eligendi architecto doloribus.</p>
            </div>
        </section>
        `;
      var image = this.querySelector("img");
      new import_simple_parallax_js2.default(image, {
        orientation: "right"
      });
    }
    connectedCallback() {
      this.render();
    }
  };
  customElements.define("image-big", ImageBig);

  // src/helpers/tools.js
  function updateState(state, props) {
    Object.entries(props).forEach(([key1, value1]) => {
      if (typeof value1 === "object") {
        Object.entries(value1).forEach(([key2, value2]) => {
          if (typeof value2 === "object") {
            if (key1 in state) {
              if (key2 in state[key1]) {
                props[key1][key2] = { ...state[key1][key2], ...value2 };
              }
              props[key1] = { ...state[key1], ...props[key1] };
            }
          }
        });
      }
    });
    return { ...state, ...props };
  }
  function getAnimation(animation) {
    let data = `data-animation="${animation.animation}"`;
    if ("delay" in animation) {
      data = data.concat(` data-delay="${animation.delay}"`);
    }
    if ("speed" in animation) {
      data = data.concat(` data-speed="${animation.speed}"`);
    }
    if ("repeat" in animation) {
      data = data.concat(` data-repeat="${animation.repeat}"`);
    }
    return data;
  }
  function getClasses(obj) {
    let classes = "";
    if ("color" in obj)
      classes = classes.concat(` ${obj.color}`);
    if ("size" in obj)
      classes = classes.concat(` ${obj.size}`);
    if ("align" in obj)
      classes = classes.concat(` ${obj.align}`);
    if ("display" in obj)
      classes = classes.concat(` ${obj.display}`);
    if ("style" in obj)
      classes = classes.concat(` ${obj.color}`);
    if ("rounded" in obj && obj.rounded == true)
      classes = classes.concat(` is-rounded`);
    if ("fullwidth" in obj && obj.fullwidth == true)
      classes = classes.concat(` is-fullwidth`);
    return classes;
  }

  // src/components/HeroBaner.js
  var HeroBaner = class extends HTMLElement {
    #default = { color: "is-primary", size: "is-fullheight", head: null, foot: null, align: "has-text-centered", title: { text: "Title", animation: { animation: "zoomIn" } }, subtitle: { text: "Subtitle", animation: { animation: "zoomIn", delay: "1s" } }, button: { color: "is-info", size: "is-medium", fullwidth: false, rounded: true, text: "Info", href: "#", animation: { animation: "heartBeat", repeat: "3" } } };
    #head = (
      /* html */
      `
        <div class="hero-head">
            <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                <a class="navbar-item">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger" data-target="navbarMenuHeroB">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                </div>
                <div id="navbarMenuHeroB" class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item is-active">
                    Home
                    </a>
                    <a class="navbar-item">
                    Examples
                    </a>
                    <a class="navbar-item">
                    Documentation
                    </a>
                    <span class="navbar-item">
                    <a class="button is-info is-inverted">
                        <span class="icon">
                        <i class="fab fa-github"></i>
                        </span>
                        <span>Download</span>
                    </a>
                    </span>
                </div>
                </div>
            </div>
            </nav>
        </div>
    `
    );
    #foot = (
      /* html */
      `
        <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
                <ul>
                <li class="is-active">
                    <a>Overview</a>
                </li>
                <li>
                    <a>Modifiers</a>
                </li>
                <li>
                    <a>Grid</a>
                </li>
                <li>
                    <a>Elements</a>
                </li>
                <li>
                    <a>Components</a>
                </li>
                <li>
                    <a>Layout</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    `
    );
    constructor(props = {}) {
      super(props);
      this.state = updateState(this.#default, props);
    }
    get getState() {
      return this.state;
    }
    set setState(props) {
      this.state = { ...this.state, ...props };
      this.render();
    }
    render() {
      this.innerHTML = /* html */
      `
        <section class="hero ${getClasses(this.state)}">           
            ${this.state.head != null ? this.#head : ""}
            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title" ${"animation" in this.state.title ? getAnimation(this.state.title.animation) : ""}>
                    ${this.state.title.text}
                </p>
                <p class="subtitle" ${"animation" in this.state.subtitle ? getAnimation(this.state.subtitle.animation) : ""}>
                   ${this.state.subtitle.text}
                </p>
                <a class="button ${getClasses(this.state.button)}" href="${this.state.button.href}" ${"animation" in this.state.button ? getAnimation(this.state.button.animation) : ""}>${this.state.button.text}</a>
                </div>
            </div>           
        </section>
        `;
    }
    connectedCallback() {
      this.render();
    }
  };
  customElements.define("hero-baner", HeroBaner);

  // src/components/ImageParallax.js
  var import_simple_parallax_js3 = __toESM(require_simpleParallax_min());
  var ImageParallax = class extends HTMLElement {
    constructor() {
      super();
    }
    render() {
      this.innerHTML = /* html */
      `
        <section class="section">
                <figure class="image">
                    <img src="https://source.unsplash.com/random/?people">
                </figure>
        </section>
        `;
      var image = this.querySelector("img");
      new import_simple_parallax_js3.default(image, {
        orientation: "up right"
      });
    }
    connectedCallback() {
      this.render();
    }
  };
  customElements.define("image-paralax", ImageParallax);

  // src/AppElement.js
  var AppElement = class extends HTMLElement {
    constructor() {
      super();
    }
    setupAnimation(el) {
      var animation = " animate__animated animate__".concat(el.getAttribute("data-animation"));
      if (el.hasAttribute("data-delay")) {
        animation = animation.concat(" animate__delay-", el.getAttribute("data-delay"));
      }
      if (el.hasAttribute("data-speed")) {
        animation = animation.concat(" animate__", el.getAttribute("data-speed"));
      }
      if (el.hasAttribute("data-repeat")) {
        el.getAttribute("data-repeat") === "infinite" ? animation = animation.concat("animate__infinite") : animation = animation.concat(" animate__repeat-", el.getAttribute("data-repeat"));
      }
      el.className = el.className.concat(animation);
    }
    render() {
      this.innerHTML = /* html */
      `        
        <div id="main"></div>
        `;
      const main = this.querySelector("#main");
      const heroBanner = new HeroBaner({ color: "is-success", button: { text: "Hi", animation: { animation: "bounceIn" } } });
      main.append(heroBanner);
      const imageBig = new ImageBig();
      main.append(imageBig);
      const imageText = new ImageText();
      main.append(imageText);
      const imageParallax = new ImageParallax();
      main.append(imageParallax);
      let objs = document.querySelectorAll("[data-animation]");
      var observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setupAnimation(entry.target);
            return;
          }
          entry.target.classList.forEach((_class) => {
            if (_class.startsWith("animate__")) {
              entry.target.classList.remove(_class);
            }
          });
        });
      });
      objs.forEach((obj) => {
        observer.observe(obj);
      });
    }
    connectedCallback() {
      this.render();
    }
  };
  customElements.define("app-element", AppElement);

  // src/index.js
  var App = new AppElement();
  document.body.appendChild(App);
})();
/*! Bundled license information:

simple-parallax-js/dist/simpleParallax.min.js:
  (*!
   * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images or videos, 
   * @date: 20-08-2020 14:0:14, 
   * @version: 5.6.2,
   * @link: https://simpleparallax.com/
   *)
*/
