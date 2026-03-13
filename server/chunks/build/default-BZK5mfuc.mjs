import { defineComponent, ref, inject, h, Suspense, Fragment, useSSRContext, createVNode, normalizeStyle, normalizeClass, createElementVNode, shallowRef, computed, toRef, watchEffect, mergeProps, watch, nextTick, readonly, Transition, provide, shallowReactive, withCtx, withModifiers, onScopeDispose, unref, isRef, createTextVNode } from 'vue';
import { RouterView } from 'vue-router';
import { a as useNuxtApp, W as PageRouteSymbol, X as LayoutMetaSymbol, q as propsFactory, t as makeComponentProps, g as genericComponent, m as useRender, s as makeThemeProps, p as provideTheme, h as useRtl, j as provideDefaults, J as convertToUnit, Z as makeLayoutItemProps, d as useProxiedModel, H as useToggleScope, Y as useLayoutItem, y as omit, k as useResizeObserver, V as makeDisplayProps, i as useDisplay, D as clamp, _ as VApp } from './server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { d as makeFocusTrapProps, e as makeDelayProps, u as useScopeId, f as useFocusTrap, V as VDialog, g as useDelay } from './VDialog-DisBU3DD.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-BJQKre-c.mjs';
import { c as makeTagProps, e as makeRoundedProps, f as makeElevationProps, h as makeBorderProps, o as useBackgroundColor, p as useBorder, q as useElevation, r as useRounded, j as VDefaultsProvider, y as useRouter, z as toPhysical, V as VRow, a as VCol } from './VRow-DYQSMIMZ.mjs';
import { c as makeVBtnProps, V as VBtn } from './VBtn-DNuBi1SF.mjs';
import { o as VExpandTransition, V as VTextField } from './VTextField-Bxj5HX4m.mjs';
import { a as VImg } from './VAvatar-CVUX6xse.mjs';
import { u as useSsrBoot } from './ssrBoot-ZQn7gOuX.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchForm",
  __ssrInlineRender: true,
  props: {
    isActive: { type: Boolean }
  },
  emits: ["close", "search"],
  setup(__props, { emit: __emit }) {
    const query = ref();
    const emit = __emit;
    const props = __props;
    function onSearch() {
      emit("search", query.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: props.isActive,
        "onUpdate:modelValue": ($event) => props.isActive = $event,
        "max-width": "500"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "10" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}>サイト内検索</div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, "サイト内検索")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      size: "small",
                                      color: "primary",
                                      variant: "plain",
                                      icon: "mdi-close",
                                      onClick: ($event) => emit("close")
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        size: "small",
                                        color: "primary",
                                        variant: "plain",
                                        icon: "mdi-close",
                                        onClick: ($event) => emit("close")
                                      }, null, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "10" }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, "サイト内検索")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      size: "small",
                                      color: "primary",
                                      variant: "plain",
                                      icon: "mdi-close",
                                      onClick: ($event) => emit("close")
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "10" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, "サイト内検索")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    size: "small",
                                    color: "primary",
                                    variant: "plain",
                                    icon: "mdi-close",
                                    onClick: ($event) => emit("close")
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: query.value,
                          "onUpdate:modelValue": ($event) => query.value = $event,
                          variant: "outlined",
                          "hide-details": ""
                        }, {
                          "append-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-magnify",
                                variant: "plain",
                                onClick: onSearch
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  icon: "mdi-magnify",
                                  variant: "plain",
                                  onClick: withModifiers(onSearch, ["stop"])
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: query.value,
                            "onUpdate:modelValue": ($event) => query.value = $event,
                            variant: "outlined",
                            "hide-details": ""
                          }, {
                            "append-inner": withCtx(() => [
                              createVNode(VBtn, {
                                icon: "mdi-magnify",
                                variant: "plain",
                                onClick: withModifiers(onSearch, ["stop"])
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "10" }, {
                              default: withCtx(() => [
                                createVNode("div", null, "サイト内検索")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "2" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  size: "small",
                                  color: "primary",
                                  variant: "plain",
                                  icon: "mdi-close",
                                  onClick: ($event) => emit("close")
                                }, null, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: query.value,
                          "onUpdate:modelValue": ($event) => query.value = $event,
                          variant: "outlined",
                          "hide-details": ""
                        }, {
                          "append-inner": withCtx(() => [
                            createVNode(VBtn, {
                              icon: "mdi-magnify",
                              variant: "plain",
                              onClick: withModifiers(onSearch, ["stop"])
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "10" }, {
                            default: withCtx(() => [
                              createVNode("div", null, "サイト内検索")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "2" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                size: "small",
                                color: "primary",
                                variant: "plain",
                                icon: "mdi-close",
                                onClick: ($event) => emit("close")
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: query.value,
                        "onUpdate:modelValue": ($event) => query.value = $event,
                        variant: "outlined",
                        "hide-details": ""
                      }, {
                        "append-inner": withCtx(() => [
                          createVNode(VBtn, {
                            icon: "mdi-magnify",
                            variant: "plain",
                            onClick: withModifiers(onSearch, ["stop"])
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SearchForm = Object.assign(_sfc_main$1, { __name: "SearchForm" });
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar-title", props.class]),
        "style": normalizeStyle(props.style)
      }, {
        default: () => [hasText && createElementVNode("div", {
          "class": "v-toolbar-title__placeholder"
        }, [slots.text ? slots.text() : props.text, slots.default?.()])]
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  collapsePosition: {
    type: String,
    default: "start"
  },
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: {
    type: Boolean,
    default: null
  },
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(props.extended === null ? !!slots.extension?.() : props.extended);
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = slots.extension?.();
      isExtended.value = props.extended === null ? !!extension : props.extended;
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar", `v-toolbar--collapse-${props.collapsePosition}`, {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class]),
        "style": normalizeStyle([backgroundColorStyles.value, props.style])
      }, {
        default: () => [hasImage && createElementVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => [createElementVNode("div", {
            "class": "v-toolbar__content",
            "style": {
              height: convertToUnit(contentHeight.value)
            }
          }, [slots.prepend && createElementVNode("div", {
            "class": "v-toolbar__prepend"
          }, [slots.prepend?.()]), hasTitle && createVNode(VToolbarTitle, {
            "key": "title",
            "text": props.title
          }, {
            text: slots.title
          }), slots.default?.(), slots.append && createElementVNode("div", {
            "class": "v-toolbar__append"
          }, [slots.append?.()])])]
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createElementVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props) {
  let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll,
    layoutSize
  } = args;
  let previousScroll = 0;
  let previousScrollHeight = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const isAtBottom = shallowRef(false);
  const reachedBottomWhileScrollingDown = shallowRef(false);
  const hasEnoughScrollableSpace = shallowRef(true);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  function getScrollMetrics(targetEl) {
    const clientHeight = "window" in targetEl ? (void 0).innerHeight : targetEl.clientHeight;
    const scrollHeight = "window" in targetEl ? (void 0).documentElement.scrollHeight : targetEl.scrollHeight;
    return {
      clientHeight,
      scrollHeight
    };
  }
  function checkScrollableSpace() {
    const targetEl = target.value;
    if (!targetEl) return;
    const {
      clientHeight,
      scrollHeight
    } = getScrollMetrics(targetEl);
    const maxScrollableDistance = scrollHeight - clientHeight;
    const elementHeight = layoutSize?.value || 0;
    const minRequiredDistance = scrollThreshold.value + elementHeight;
    hasEnoughScrollableSpace.value = maxScrollableDistance > minRequiredDistance;
  }
  function onScroll() {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value) return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    const currentScrollHeight = targetEl instanceof Window ? (void 0).documentElement.scrollHeight : targetEl.scrollHeight;
    if (previousScrollHeight !== currentScrollHeight) {
      if (currentScrollHeight > previousScrollHeight) {
        checkScrollableSpace();
      }
      previousScrollHeight = currentScrollHeight;
    }
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
    const {
      clientHeight,
      scrollHeight
    } = getScrollMetrics(targetEl);
    const atBottom = currentScroll.value + clientHeight >= scrollHeight - 5;
    if (!isScrollingUp.value && atBottom && currentScroll.value >= scrollThreshold.value && hasEnoughScrollableSpace.value) {
      reachedBottomWhileScrollingDown.value = true;
    }
    const scrollJumped = Math.abs(currentScroll.value - previousScroll) > 100;
    const atTop = currentScroll.value <= 5;
    const scrolledUpSignificantly = isScrollingUp.value && previousScroll - currentScroll.value > 1;
    if (scrolledUpSignificantly && !atBottom || scrollJumped && currentScroll.value < scrollThreshold.value || atTop) {
      reachedBottomWhileScrollingDown.value = false;
    }
    isAtBottom.value = atBottom;
  }
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll,
    isAtBottom,
    reachedBottomWhileScrollingDown,
    hasEnoughScrollableSpace
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...makeVToolbarProps(),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      const behavior = new Set(props.scrollBehavior?.split(" ") ?? []);
      return {
        hide: behavior.has("hide"),
        fullyHide: behavior.has("fully-hide"),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const appBarHeight = computed(() => {
      const height2 = vToolbarRef.value?.contentHeight ?? 0;
      const extensionHeight = vToolbarRef.value?.extensionHeight ?? 0;
      return height2 + extensionHeight;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio,
      isAtBottom,
      reachedBottomWhileScrollingDown,
      hasEnoughScrollableSpace
    } = useScroll(props, {
      canScroll,
      layoutSize: appBarHeight
    });
    const canHide = toRef(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
    const height = computed(() => {
      if (scrollBehavior.value.hide && scrollBehavior.value.inverted) return 0;
      const height2 = vToolbarRef.value?.contentHeight ?? 0;
      const extensionHeight = vToolbarRef.value?.extensionHeight ?? 0;
      if (!canHide.value) return height2 + extensionHeight;
      return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height2 + extensionHeight : height2;
    });
    useToggleScope(() => !!props.scrollBehavior, () => {
      watchEffect(() => {
        if (!canHide.value) {
          isActive.value = true;
          return;
        }
        if (scrollBehavior.value.inverted) {
          isActive.value = currentScroll.value > scrollThreshold.value;
          return;
        }
        if (!hasEnoughScrollableSpace.value) {
          isActive.value = true;
          return;
        }
        if (reachedBottomWhileScrollingDown.value) {
          isActive.value = false;
          return;
        }
        isActive.value = isScrollingUp.value && !isAtBottom.value || currentScroll.value < scrollThreshold.value;
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(() => props.location),
      layoutSize: height,
      elementSize: shallowRef(void 0),
      active: isActive,
      absolute: toRef(() => props.absolute)
    });
    useRender(() => {
      const toolbarProps = VToolbar.filterProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: void 0,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return {};
  }
});
const makeVAppBarNavIconProps = propsFactory({
  ...omit(makeVBtnProps({
    icon: "$menu",
    variant: "text"
  }), ["spaced"])
}, "VAppBarNavIcon");
const VAppBarNavIcon = genericComponent()({
  name: "VAppBarNavIcon",
  props: makeVAppBarNavIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VBtn, mergeProps(props, {
      "class": ["v-app-bar-nav-icon"]
    }), slots));
    return {};
  }
});
const makeVFooterProps = propsFactory({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "footer"
  }),
  ...makeThemeProps()
}, "VFooter");
const VFooter = genericComponent()({
  name: "VFooter",
  props: makeVFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const layoutItemStyles = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = shallowRef(32);
    const {
      resizeRef
    } = useResizeObserver();
    const height = computed(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position: toRef(() => "bottom"),
        layoutSize: height,
        elementSize: computed(() => props.height === "auto" ? void 0 : height.value),
        active: toRef(() => props.app),
        absolute: toRef(() => props.absolute)
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": normalizeClass(["v-footer", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, props.app ? layoutItemStyles.value : {
        height: convertToUnit(props.height)
      }, props.style])
    }, slots));
    return {};
  }
});
function useSticky(_ref) {
  let {
    isSticky,
    layoutItemStyles
  } = _ref;
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  return {
    isStuck,
    stickyStyles
  };
}
function useTouch(_ref) {
  let {
    el,
    width,
    position
  } = _ref;
  computed(() => ["left", "right"].includes(position.value));
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  shallowRef(0);
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : void 0;
  });
  useToggleScope(isDragging, () => {
    const transform = el.value?.style.transform ?? null;
    const transition = el.value?.style.transition ?? null;
    watchEffect(() => {
      el.value?.style.setProperty("transform", dragStyles.value?.transform || "none");
      el.value?.style.setProperty("transition", dragStyles.value?.transition || null);
    });
    onScopeDispose(() => {
      el.value?.style.setProperty("transform", transform);
      el.value?.style.setProperty("transition", transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...omit(makeFocusTrapProps(), ["disableInitialFocus"]),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = toRef(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useFocusTrap(props, {
      isActive,
      localTop: isTemporary,
      contentEl: rootEl
    });
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      width,
      touchless: toRef(() => props.touchless),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize: width,
      active: readonly(isActive),
      disableTransitions: toRef(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    });
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : void 0,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createElementVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--persistent": isPersistent.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style],
        "inert": !isActive.value
      }, scopeId, attrs), {
        default: () => [hasImage && createElementVNode("div", {
          "key": "image",
          "class": "v-navigation-drawer__img"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "alt": "",
          "cover": true,
          "height": "inherit",
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              alt: "",
              cover: true,
              height: "inherit",
              src: props.image
            }
          }
        }, slots.image)]), slots.prepend && createElementVNode("div", {
          "class": "v-navigation-drawer__prepend"
        }, [slots.prepend?.()]), createElementVNode("div", {
          "class": "v-navigation-drawer__content"
        }, [slots.default?.()]), slots.append && createElementVNode("div", {
          "class": "v-navigation-drawer__append"
        }, [slots.append?.()])]
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createElementVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    const drawer = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBar, {
              elevation: "0",
              sticky: ""
            }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="/" class="home_page_link" data-v-58c42a5b${_scopeId2}>Fullstomic</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "/",
                      class: "home_page_link"
                    }, "Fullstomic")
                  ];
                }
              }),
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    icon: "mdi-magnify",
                    variant: "plain",
                    size: "small",
                    onClick: ($event) => isActive.value = true
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VAppBarNavIcon, {
                    color: "primary",
                    icon: unref(drawer) ? "mdi-close" : "mdi-menu",
                    onClick: ($event) => drawer.value = !unref(drawer)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      color: "primary",
                      icon: "mdi-magnify",
                      variant: "plain",
                      size: "small",
                      onClick: withModifiers(($event) => isActive.value = true, ["stop"])
                    }, null, 8, ["onClick"]),
                    createVNode(VAppBarNavIcon, {
                      color: "primary",
                      icon: unref(drawer) ? "mdi-close" : "mdi-menu",
                      onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                    }, null, 8, ["icon", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(SearchForm, {
              isActive: unref(isActive),
              onClose: ($event) => isActive.value = false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VNavigationDrawer, {
              elevation: "0",
              modelValue: unref(drawer),
              "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
              location: "right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { class: "d-flex flex-column mt-5 ml-auto mr-auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, { class: "parent_header_link" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                to: "/about/",
                                color: "primary",
                                class: "header_link",
                                variant: "plain"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` About `);
                                  } else {
                                    return [
                                      createTextVNode(" About ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  to: "/about/",
                                  color: "primary",
                                  class: "header_link",
                                  variant: "plain"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" About ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { class: "parent_header_link" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                class: "header_link",
                                variant: "plain",
                                onClick: ($event) => drawer.value = false,
                                to: "news"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`News`);
                                  } else {
                                    return [
                                      createTextVNode("News")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "header_link",
                                  variant: "plain",
                                  onClick: withModifiers(($event) => drawer.value = false, ["stop"]),
                                  to: "news"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("News")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { class: "parent_header_link" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                href: "portfolio",
                                color: "primary",
                                class: "header_link",
                                variant: "plain"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Portfolio`);
                                  } else {
                                    return [
                                      createTextVNode("Portfolio")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  href: "portfolio",
                                  color: "primary",
                                  class: "header_link",
                                  variant: "plain"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Portfolio")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { class: "parent_header_link" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                to: "contact",
                                color: "primary",
                                class: "header_link",
                                variant: "plain"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Contact`);
                                  } else {
                                    return [
                                      createTextVNode("Contact")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  to: "contact",
                                  color: "primary",
                                  class: "header_link",
                                  variant: "plain"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Contact")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, { class: "parent_header_link" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                to: "/about/",
                                color: "primary",
                                class: "header_link",
                                variant: "plain"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" About ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "parent_header_link" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                class: "header_link",
                                variant: "plain",
                                onClick: withModifiers(($event) => drawer.value = false, ["stop"]),
                                to: "news"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("News")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "parent_header_link" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                href: "portfolio",
                                color: "primary",
                                class: "header_link",
                                variant: "plain"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Portfolio")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "parent_header_link" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                to: "contact",
                                color: "primary",
                                class: "header_link",
                                variant: "plain"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Contact")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, { class: "d-flex flex-column mt-5 ml-auto mr-auto" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { class: "parent_header_link" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              to: "/about/",
                              color: "primary",
                              class: "header_link",
                              variant: "plain"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" About ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "parent_header_link" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              class: "header_link",
                              variant: "plain",
                              onClick: withModifiers(($event) => drawer.value = false, ["stop"]),
                              to: "news"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("News")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "parent_header_link" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              href: "portfolio",
                              color: "primary",
                              class: "header_link",
                              variant: "plain"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Portfolio")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "parent_header_link" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              to: "contact",
                              color: "primary",
                              class: "header_link",
                              variant: "plain"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Contact")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VFooter, { class: "bg-light-blue-lighten-5 flex-column" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    class: "mb-4 footer-content",
                    "align-content": "space-between"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, { cols: "6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<a href="" class="footer_home_page_link" data-v-58c42a5b${_scopeId4}><h1 data-v-58c42a5b${_scopeId4}>Fullstomic</h1></a>`);
                            } else {
                              return [
                                createVNode("a", {
                                  href: "",
                                  class: "footer_home_page_link"
                                }, [
                                  createVNode("h1", null, "Fullstomic")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { class: "d-flex justify-center items-center flex-column mt-5 ml-auto mr-auto" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { class: "parent_header_link" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            to: "about",
                                            color: "primary",
                                            class: "header_link",
                                            variant: "plain"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` About `);
                                              } else {
                                                return [
                                                  createTextVNode(" About ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              to: "about",
                                              color: "primary",
                                              class: "header_link",
                                              variant: "plain"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" About ")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { class: "parent_header_link" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            to: "news",
                                            color: "primary",
                                            class: "header_link",
                                            variant: "plain"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`News`);
                                              } else {
                                                return [
                                                  createTextVNode("News")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              to: "news",
                                              color: "primary",
                                              class: "header_link",
                                              variant: "plain"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("News")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { class: "parent_header_link" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            to: "portfolio",
                                            color: "primary",
                                            class: "header_link",
                                            variant: "plain"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Portfolio`);
                                              } else {
                                                return [
                                                  createTextVNode("Portfolio")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              to: "portfolio",
                                              color: "primary",
                                              class: "header_link",
                                              variant: "plain"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Portfolio")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { class: "parent_header_link" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            to: "contact",
                                            color: "primary",
                                            class: "header_link",
                                            variant: "plain"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Contact`);
                                              } else {
                                                return [
                                                  createTextVNode("Contact")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              to: "contact",
                                              color: "primary",
                                              class: "header_link",
                                              variant: "plain"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Contact")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { class: "parent_header_link" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            to: "about",
                                            color: "primary",
                                            class: "header_link",
                                            variant: "plain"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" About ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { class: "parent_header_link" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            to: "news",
                                            color: "primary",
                                            class: "header_link",
                                            variant: "plain"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("News")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { class: "parent_header_link" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            to: "portfolio",
                                            color: "primary",
                                            class: "header_link",
                                            variant: "plain"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Portfolio")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { class: "parent_header_link" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            to: "contact",
                                            color: "primary",
                                            class: "header_link",
                                            variant: "plain"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Contact")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, { class: "d-flex justify-center items-center flex-column mt-5 ml-auto mr-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { class: "parent_header_link" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          to: "about",
                                          color: "primary",
                                          class: "header_link",
                                          variant: "plain"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" About ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { class: "parent_header_link" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          to: "news",
                                          color: "primary",
                                          class: "header_link",
                                          variant: "plain"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("News")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { class: "parent_header_link" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          to: "portfolio",
                                          color: "primary",
                                          class: "header_link",
                                          variant: "plain"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Portfolio")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { class: "parent_header_link" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          to: "contact",
                                          color: "primary",
                                          class: "header_link",
                                          variant: "plain"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Contact")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: "",
                                class: "footer_home_page_link"
                              }, [
                                createVNode("h1", null, "Fullstomic")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "d-flex justify-center items-center flex-column mt-5 ml-auto mr-auto" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, { class: "parent_header_link" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        to: "about",
                                        color: "primary",
                                        class: "header_link",
                                        variant: "plain"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" About ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { class: "parent_header_link" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        to: "news",
                                        color: "primary",
                                        class: "header_link",
                                        variant: "plain"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("News")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { class: "parent_header_link" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        to: "portfolio",
                                        color: "primary",
                                        class: "header_link",
                                        variant: "plain"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Portfolio")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { class: "parent_header_link" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        to: "contact",
                                        color: "primary",
                                        class: "header_link",
                                        variant: "plain"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Contact")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div data-v-58c42a5b${_scopeId2}><p data-v-58c42a5b${_scopeId2}>Ⓒ2026 Fullstomic</p></div>`);
                } else {
                  return [
                    createVNode(VRow, {
                      class: "mb-4 footer-content",
                      "align-content": "space-between"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: "",
                              class: "footer_home_page_link"
                            }, [
                              createVNode("h1", null, "Fullstomic")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode(VRow, { class: "d-flex justify-center items-center flex-column mt-5 ml-auto mr-auto" }, {
                              default: withCtx(() => [
                                createVNode(VCol, { class: "parent_header_link" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      to: "about",
                                      color: "primary",
                                      class: "header_link",
                                      variant: "plain"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" About ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { class: "parent_header_link" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      to: "news",
                                      color: "primary",
                                      class: "header_link",
                                      variant: "plain"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("News")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { class: "parent_header_link" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      to: "portfolio",
                                      color: "primary",
                                      class: "header_link",
                                      variant: "plain"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Portfolio")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { class: "parent_header_link" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      to: "contact",
                                      color: "primary",
                                      class: "header_link",
                                      variant: "plain"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Contact")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode("p", null, "Ⓒ2026 Fullstomic")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAppBar, {
                elevation: "0",
                sticky: ""
              }, {
                prepend: withCtx(() => [
                  createVNode("a", {
                    href: "/",
                    class: "home_page_link"
                  }, "Fullstomic")
                ]),
                append: withCtx(() => [
                  createVNode(VBtn, {
                    color: "primary",
                    icon: "mdi-magnify",
                    variant: "plain",
                    size: "small",
                    onClick: withModifiers(($event) => isActive.value = true, ["stop"])
                  }, null, 8, ["onClick"]),
                  createVNode(VAppBarNavIcon, {
                    color: "primary",
                    icon: unref(drawer) ? "mdi-close" : "mdi-menu",
                    onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                  }, null, 8, ["icon", "onClick"])
                ]),
                _: 1
              }),
              createVNode(SearchForm, {
                isActive: unref(isActive),
                onClose: ($event) => isActive.value = false
              }, null, 8, ["isActive", "onClose"]),
              createVNode(VNavigationDrawer, {
                elevation: "0",
                modelValue: unref(drawer),
                "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                location: "right"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, { class: "d-flex flex-column mt-5 ml-auto mr-auto" }, {
                    default: withCtx(() => [
                      createVNode(VCol, { class: "parent_header_link" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            to: "/about/",
                            color: "primary",
                            class: "header_link",
                            variant: "plain"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" About ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "parent_header_link" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            class: "header_link",
                            variant: "plain",
                            onClick: withModifiers(($event) => drawer.value = false, ["stop"]),
                            to: "news"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("News")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "parent_header_link" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            href: "portfolio",
                            color: "primary",
                            class: "header_link",
                            variant: "plain"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Portfolio")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "parent_header_link" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            to: "contact",
                            color: "primary",
                            class: "header_link",
                            variant: "plain"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Contact")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_NuxtPage),
              createVNode(VFooter, { class: "bg-light-blue-lighten-5 flex-column" }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    class: "mb-4 footer-content",
                    "align-content": "space-between"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "",
                            class: "footer_home_page_link"
                          }, [
                            createVNode("h1", null, "Fullstomic")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(VRow, { class: "d-flex justify-center items-center flex-column mt-5 ml-auto mr-auto" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { class: "parent_header_link" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    to: "about",
                                    color: "primary",
                                    class: "header_link",
                                    variant: "plain"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" About ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { class: "parent_header_link" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    to: "news",
                                    color: "primary",
                                    class: "header_link",
                                    variant: "plain"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("News")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { class: "parent_header_link" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    to: "portfolio",
                                    color: "primary",
                                    class: "header_link",
                                    variant: "plain"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Portfolio")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { class: "parent_header_link" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    to: "contact",
                                    color: "primary",
                                    class: "header_link",
                                    variant: "plain"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Contact")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode("p", null, "Ⓒ2026 Fullstomic")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-58c42a5b"]]);

export { _default as default };
//# sourceMappingURL=default-BZK5mfuc.mjs.map
