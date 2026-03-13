import { defineComponent, ref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, withModifiers, createCommentVNode, shallowRef, computed, toRef, normalizeStyle, normalizeClass, createElementVNode, mergeProps, nextTick, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VDialog } from './VDialog-DisBU3DD.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-BJQKre-c.mjs';
import { V as VRow, a as VCol, b as VIcon, m as makeVariantProps, c as makeTagProps, d as makeSizeProps, e as makeRoundedProps, f as makeElevationProps, g as makeDensityProps, h as makeBorderProps } from './VRow-DYQSMIMZ.mjs';
import { V as VBtn } from './VBtn-DNuBi1SF.mjs';
import { V as VContainer } from './VContainer-GiolSsVp.mjs';
import { V as VChipGroup, a as VChip } from './VChip-BrLXCn6h.mjs';
import { P as PageTitle } from './PageTitle-DXiVmpp1.mjs';
import { V as VTextField } from './VTextField-Bxj5HX4m.mjs';
import { V as VList, a as VListItem, b as VDivider } from './VList-DE8QLq0V.mjs';
import { g as genericComponent, d as useProxiedModel, f as useLocale, h as useRtl, p as provideTheme, i as useDisplay, j as provideDefaults, k as useResizeObserver, l as createRange, m as useRender, o as keyValues, q as propsFactory, I as IconValue, s as makeThemeProps, t as makeComponentProps } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './VAvatar-CVUX6xse.mjs';
import './ssrBoot-ZQn7gOuX.mjs';
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
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArticleContent",
  __ssrInlineRender: true,
  props: {
    isShow: { type: Boolean },
    tag: {},
    articleTitle: {},
    articleParagraph: {}
  },
  emits: ["closeEvent"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const getCategoryColor = (category) => {
      const colors = {
        重要: "red-lighten-1",
        ニュース: "blue-lighten-1",
        イベント: "green-lighten-1",
        メンテナンス: "orange-lighten-1"
      };
      return colors[category] || "grey";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_contanier = resolveComponent("v-contanier");
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: props.isShow,
        "onUpdate:modelValue": ($event) => props.isShow = $event,
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
                        _push4(ssrRenderComponent(_component_v_contanier, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "10" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3${_scopeId6}>記事詳細</h3>`);
                                        } else {
                                          return [
                                            createVNode("h3", null, "記事詳細")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            icon: "mdi-close",
                                            variant: "plain",
                                            onClick: ($event) => emit("closeEvent")
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              icon: "mdi-close",
                                              variant: "plain",
                                              onClick: withModifiers(($event) => emit("closeEvent"), ["stop"])
                                            }, null, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "10" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", null, "記事詳細")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "2" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            icon: "mdi-close",
                                            variant: "plain",
                                            onClick: withModifiers(($event) => emit("closeEvent"), ["stop"])
                                          }, null, 8, ["onClick"])
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
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "10" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", null, "記事詳細")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "2" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          icon: "mdi-close",
                                          variant: "plain",
                                          onClick: withModifiers(($event) => emit("closeEvent"), ["stop"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_contanier, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "10" }, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "記事詳細")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "2" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        icon: "mdi-close",
                                        variant: "plain",
                                        onClick: withModifiers(($event) => emit("closeEvent"), ["stop"])
                                      }, null, 8, ["onClick"])
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
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center mb-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VChip, {
                                color: getCategoryColor(props.tag),
                                size: "small",
                                label: "",
                                style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                class: "mr-4 d-none d-sm-flex items-center align-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(props.tag)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(props.tag), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><h2 class="font-weight-bold mb-8"${_scopeId4}>${ssrInterpolate(props.articleTitle)}</h2><section class="article-body"${_scopeId4}><p class="text-body-1 mb-6"${_scopeId4}>${ssrInterpolate(props.articleParagraph)}</p></section>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center mb-4" }, [
                                  createVNode(VChip, {
                                    color: getCategoryColor(props.tag),
                                    size: "small",
                                    label: "",
                                    style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                    class: "mr-4 d-none d-sm-flex items-center align-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(props.tag), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ]),
                                createVNode("h2", { class: "font-weight-bold mb-8" }, toDisplayString(props.articleTitle), 1),
                                createVNode("section", { class: "article-body" }, [
                                  createVNode("p", { class: "text-body-1 mb-6" }, toDisplayString(props.articleParagraph), 1)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center mb-4" }, [
                                createVNode(VChip, {
                                  color: getCategoryColor(props.tag),
                                  size: "small",
                                  label: "",
                                  style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                  class: "mr-4 d-none d-sm-flex items-center align-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(props.tag), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"])
                              ]),
                              createVNode("h2", { class: "font-weight-bold mb-8" }, toDisplayString(props.articleTitle), 1),
                              createVNode("section", { class: "article-body" }, [
                                createVNode("p", { class: "text-body-1 mb-6" }, toDisplayString(props.articleParagraph), 1)
                              ])
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_contanier, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "10" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "記事詳細")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      icon: "mdi-close",
                                      variant: "plain",
                                      onClick: withModifiers(($event) => emit("closeEvent"), ["stop"])
                                    }, null, 8, ["onClick"])
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
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center mb-4" }, [
                              createVNode(VChip, {
                                color: getCategoryColor(props.tag),
                                size: "small",
                                label: "",
                                style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                class: "mr-4 d-none d-sm-flex items-center align-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(props.tag), 1)
                                ]),
                                _: 1
                              }, 8, ["color"])
                            ]),
                            createVNode("h2", { class: "font-weight-bold mb-8" }, toDisplayString(props.articleTitle), 1),
                            createVNode("section", { class: "article-body" }, [
                              createVNode("p", { class: "text-body-1 mb-6" }, toDisplayString(props.articleParagraph), 1)
                            ])
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
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_contanier, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "10" }, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "記事詳細")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    icon: "mdi-close",
                                    variant: "plain",
                                    onClick: withModifiers(($event) => emit("closeEvent"), ["stop"])
                                  }, null, 8, ["onClick"])
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
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center mb-4" }, [
                            createVNode(VChip, {
                              color: getCategoryColor(props.tag),
                              size: "small",
                              label: "",
                              style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                              class: "mr-4 d-none d-sm-flex items-center align-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(props.tag), 1)
                              ]),
                              _: 1
                            }, 8, ["color"])
                          ]),
                          createVNode("h2", { class: "font-weight-bold mb-8" }, toDisplayString(props.articleTitle), 1),
                          createVNode("section", { class: "article-body" }, [
                            createVNode("p", { class: "text-body-1 mb-6" }, toDisplayString(props.articleParagraph), 1)
                          ])
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
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/News/ArticleContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArticleContent = Object.assign(_sfc_main$1, { __name: "NewsArticleContent" });
function useRefs() {
  const refs = ref([]);
  function updateRef(e, i) {
    refs.value[i] = e;
  }
  return {
    refs,
    updateRef
  };
}
const makeVPaginationProps = propsFactory({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (props) => props.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (val) => val % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: IconValue,
    default: "$first"
  },
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  lastIcon: {
    type: IconValue,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VPagination");
const VPagination = genericComponent()({
  name: "VPagination",
  props: makeVPaginationProps(),
  emits: {
    "update:modelValue": (value) => true,
    first: (value) => true,
    prev: (value) => true,
    next: (value) => true,
    last: (value) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const page = useProxiedModel(props, "modelValue");
    const {
      t,
      n
    } = useLocale();
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      width
    } = useDisplay();
    const maxButtons = shallowRef(-1);
    provideDefaults(void 0, {
      scoped: true
    });
    const {
      resizeRef
    } = useResizeObserver();
    const length = computed(() => parseInt(props.length, 10));
    const start = computed(() => parseInt(props.start, 10));
    const totalVisible = computed(() => {
      if (props.totalVisible != null) return parseInt(props.totalVisible, 10);
      else if (maxButtons.value >= 0) return maxButtons.value;
      return getMax(width.value, 58);
    });
    function getMax(totalWidth, itemWidth) {
      const minButtons = props.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        Number(((totalWidth - itemWidth * minButtons) / itemWidth).toFixed(2))
      ));
    }
    const range = computed(() => {
      if (length.value <= 0 || isNaN(length.value) || length.value > Number.MAX_SAFE_INTEGER) return [];
      if (totalVisible.value <= 0) return [];
      else if (totalVisible.value === 1) return [page.value];
      if (length.value <= totalVisible.value) {
        return createRange(length.value, start.value);
      }
      const even = totalVisible.value % 2 === 0;
      const middle = even ? totalVisible.value / 2 : Math.floor(totalVisible.value / 2);
      const left = even ? middle : middle + 1;
      const right = length.value - middle;
      if (left - page.value >= 0) {
        return [...createRange(Math.max(1, totalVisible.value - 1), start.value), props.ellipsis, length.value];
      } else if (page.value - right >= (even ? 1 : 0)) {
        const rangeLength = totalVisible.value - 1;
        const rangeStart = length.value - rangeLength + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart)];
      } else {
        const rangeLength = Math.max(1, totalVisible.value - 2);
        const rangeStart = rangeLength === 1 ? page.value : page.value - Math.ceil(rangeLength / 2) + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart), props.ellipsis, length.value];
      }
    });
    function setValue(e, value, event) {
      e.preventDefault();
      page.value = value;
      event && emit(event, value);
    }
    const {
      refs,
      updateRef
    } = useRefs();
    provideDefaults({
      VPaginationBtn: {
        color: toRef(() => props.color),
        border: toRef(() => props.border),
        density: toRef(() => props.density),
        size: toRef(() => props.size),
        variant: toRef(() => props.variant),
        rounded: toRef(() => props.rounded),
        elevation: toRef(() => props.elevation)
      }
    });
    const items = computed(() => {
      return range.value.map((item, index2) => {
        const ref2 = (e) => updateRef(e, index2);
        if (typeof item === "string") {
          return {
            isActive: false,
            key: `ellipsis-${index2}`,
            page: item,
            props: {
              ref: ref2,
              ellipsis: true,
              icon: true,
              disabled: true
            }
          };
        } else {
          const isActive = item === page.value;
          return {
            isActive,
            key: item,
            page: n(item),
            props: {
              ref: ref2,
              ellipsis: false,
              icon: true,
              disabled: !!props.disabled || Number(props.length) < 2,
              color: isActive ? props.activeColor : props.color,
              "aria-current": isActive,
              "aria-label": t(isActive ? props.currentPageAriaLabel : props.pageAriaLabel, item),
              onClick: (e) => setValue(e, item)
            }
          };
        }
      });
    });
    const controls = computed(() => {
      const prevDisabled = !!props.disabled || page.value <= start.value;
      const nextDisabled = !!props.disabled || page.value >= start.value + length.value - 1;
      return {
        first: props.showFirstLastPage ? {
          icon: isRtl.value ? props.lastIcon : props.firstIcon,
          onClick: (e) => setValue(e, start.value, "first"),
          disabled: prevDisabled,
          "aria-label": t(props.firstAriaLabel),
          "aria-disabled": prevDisabled
        } : void 0,
        prev: {
          icon: isRtl.value ? props.nextIcon : props.prevIcon,
          onClick: (e) => setValue(e, page.value - 1, "prev"),
          disabled: prevDisabled,
          "aria-label": t(props.previousAriaLabel),
          "aria-disabled": prevDisabled
        },
        next: {
          icon: isRtl.value ? props.prevIcon : props.nextIcon,
          onClick: (e) => setValue(e, page.value + 1, "next"),
          disabled: nextDisabled,
          "aria-label": t(props.nextAriaLabel),
          "aria-disabled": nextDisabled
        },
        last: props.showFirstLastPage ? {
          icon: isRtl.value ? props.firstIcon : props.lastIcon,
          onClick: (e) => setValue(e, start.value + length.value - 1, "last"),
          disabled: nextDisabled,
          "aria-label": t(props.lastAriaLabel),
          "aria-disabled": nextDisabled
        } : void 0
      };
    });
    function updateFocus() {
      const currentIndex = page.value - start.value;
      refs.value[currentIndex]?.$el.focus();
    }
    function onKeydown(e) {
      if (e.key === keyValues.left && !props.disabled && page.value > Number(props.start)) {
        page.value = page.value - 1;
        nextTick(updateFocus);
      } else if (e.key === keyValues.right && !props.disabled && page.value < start.value + length.value - 1) {
        page.value = page.value + 1;
        nextTick(updateFocus);
      }
    }
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": normalizeClass(["v-pagination", themeClasses.value, props.class]),
      "style": normalizeStyle(props.style),
      "role": "navigation",
      "aria-label": t(props.ariaLabel),
      "onKeydown": onKeydown,
      "data-test": "v-pagination-root"
    }, {
      default: () => [createElementVNode("ul", {
        "class": "v-pagination__list"
      }, [props.showFirstLastPage && createElementVNode("li", {
        "key": "first",
        "class": "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [slots.first ? slots.first(controls.value.first) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.first), null)]), createElementVNode("li", {
        "key": "prev",
        "class": "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [slots.prev ? slots.prev(controls.value.prev) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.prev), null)]), items.value.map((item, index2) => createElementVNode("li", {
        "key": item.key,
        "class": normalizeClass(["v-pagination__item", {
          "v-pagination__item--is-active": item.isActive
        }]),
        "data-test": "v-pagination-item"
      }, [slots.item ? slots.item(item) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, item.props), {
        default: () => [item.page]
      })])), createElementVNode("li", {
        "key": "next",
        "class": "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [slots.next ? slots.next(controls.value.next) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.next), null)]), props.showFirstLastPage && createElementVNode("li", {
        "key": "last",
        "class": "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [slots.last ? slots.last(controls.value.last) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.last), null)])])]
    }));
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCategory = ref("すべて");
    const page = ref(1);
    const query = ref("");
    const categories = ["すべて", "重要", "ニュース", "イベント", "メンテナンス"];
    const newsItems = ref([
      {
        id: 1,
        date: "2024.05.20",
        category: "重要",
        title: "システムメンテナンスのお知らせ",
        content: "システムメンテナンスを以下の期間で行います。なにとぞご了承ください。"
      },
      {
        id: 2,
        date: "2024.05.15",
        category: "ニュース",
        title: "新機能「ダークモード」をリリースしました",
        content: "システムメンテナンスを以下の期間で行います。なにとぞご了承ください。"
      },
      {
        id: 3,
        date: "2024.05.10",
        category: "イベント",
        title: "夏季ユーザー交流会開催の決定",
        content: "システムメンテナンスを以下の期間で行います。なにとぞご了承ください。"
      },
      {
        id: 4,
        date: "2024.05.01",
        category: "メンテナンス",
        title: "サーバー増強作業に伴う一部停止について",
        content: "システムメンテナンスを以下の期間で行います。なにとぞご了承ください。"
      },
      {
        id: 5,
        date: "2024.04.25",
        category: "ニュース",
        title: "プライバシーポリシー改訂のご案内",
        content: "システムメンテナンスを以下の期間で行います。なにとぞご了承ください。"
      }
    ]);
    const filteredNews = ref(newsItems.value);
    const getCategoryColor = (category) => {
      const colors = {
        重要: "red-lighten-1",
        ニュース: "blue-lighten-1",
        イベント: "green-lighten-1",
        メンテナンス: "orange-lighten-1"
      };
      return colors[category] || "grey";
    };
    const articleInfo = ref({
      tag: "",
      title: "",
      contentParagraph: ""
    });
    const isShow = ref(false);
    function isOpenArticleContent(tag, title, contentParagraph) {
      articleInfo.value = {
        tag,
        title,
        contentParagraph
      };
      isShow.value = true;
    }
    function onSearchArticle() {
      filteredNews.value = newsItems.value.filter((item) => {
        const isCategoryMatch = selectedCategory.value === "すべて" || item.category === selectedCategory.value;
        const isKeywordMatch = !query.value || item.title.toLowerCase().includes(query.value.toLowerCase());
        return isCategoryMatch && isKeywordMatch;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageTitle, {
        "title-name": "News",
        "content-paragraph": ""
      }, null, _parent));
      _push(ssrRenderComponent(VContainer, {
        class: "py-8",
        "max-width": "900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8" data-v-aae17682${_scopeId}><h1 class="text-h4 font-weight-bold mb-2" data-v-aae17682${_scopeId}>記事一覧</h1></div>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: query.value,
              "onUpdate:modelValue": ($event) => query.value = $event,
              label: "キーワードで検索",
              "prepend-inner-icon": "mdi-magnify",
              variant: "outlined",
              "hide-details": "",
              onInput: onSearchArticle,
              "onClick:clear": onSearchArticle,
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VChipGroup, {
              modelValue: selectedCategory.value,
              "onUpdate:modelValue": [($event) => selectedCategory.value = $event, onSearchArticle],
              "selected-class": "text-primary",
              mandatory: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(categories, (cat) => {
                    _push3(ssrRenderComponent(VChip, {
                      key: cat,
                      value: cat,
                      variant: "outlined",
                      filter: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(cat)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(cat), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(categories, (cat) => {
                      return createVNode(VChip, {
                        key: cat,
                        value: cat,
                        variant: "outlined",
                        filter: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(cat), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, { variant: "flat" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    lines: "two",
                    class: "pa-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(filteredNews.value, (item, index2) => {
                          _push4(`<!--[-->`);
                          _push4(ssrRenderComponent(VListItem, {
                            link: "",
                            class: "py-4",
                            onClick: ($event) => isOpenArticleContent(item.category, item.title, item.content)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, { cols: "3" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VChip, {
                                              color: getCategoryColor(item.category),
                                              size: "small",
                                              label: "",
                                              style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                              class: "mr-4 d-none d-sm-flex items-center align-center"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.category)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.category), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VChip, {
                                                color: getCategoryColor(item.category),
                                                size: "small",
                                                label: "",
                                                style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                                class: "mr-4 d-none d-sm-flex items-center align-center"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.category), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "8" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "1" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: "mdi-chevron-right",
                                              color: "grey-lighten-1"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: "mdi-chevron-right",
                                                color: "grey-lighten-1"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, { cols: "3" }, {
                                          default: withCtx(() => [
                                            createVNode(VChip, {
                                              color: getCategoryColor(item.category),
                                              size: "small",
                                              label: "",
                                              style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                              class: "mr-4 d-none d-sm-flex items-center align-center"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.category), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, { cols: "8" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, { cols: "1" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "mdi-chevron-right",
                                              color: "grey-lighten-1"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "3" }, {
                                        default: withCtx(() => [
                                          createVNode(VChip, {
                                            color: getCategoryColor(item.category),
                                            size: "small",
                                            label: "",
                                            style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                            class: "mr-4 d-none d-sm-flex items-center align-center"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.category), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, { cols: "8" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, { cols: "1" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "mdi-chevron-right",
                                            color: "grey-lighten-1"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          if (index2 < filteredNews.value.length - 1) {
                            _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredNews.value, (item, index2) => {
                            return openBlock(), createBlock(Fragment, {
                              key: item.id
                            }, [
                              createVNode(VListItem, {
                                link: "",
                                class: "py-4",
                                onClick: withModifiers(($event) => isOpenArticleContent(item.category, item.title, item.content), ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "3" }, {
                                        default: withCtx(() => [
                                          createVNode(VChip, {
                                            color: getCategoryColor(item.category),
                                            size: "small",
                                            label: "",
                                            style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                            class: "mr-4 d-none d-sm-flex items-center align-center"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.category), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, { cols: "8" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, { cols: "1" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "mdi-chevron-right",
                                            color: "grey-lighten-1"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              index2 < filteredNews.value.length - 1 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                            ], 64);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      lines: "two",
                      class: "pa-0"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredNews.value, (item, index2) => {
                          return openBlock(), createBlock(Fragment, {
                            key: item.id
                          }, [
                            createVNode(VListItem, {
                              link: "",
                              class: "py-4",
                              onClick: withModifiers(($event) => isOpenArticleContent(item.category, item.title, item.content), ["stop"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "3" }, {
                                      default: withCtx(() => [
                                        createVNode(VChip, {
                                          color: getCategoryColor(item.category),
                                          size: "small",
                                          label: "",
                                          style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                          class: "mr-4 d-none d-sm-flex items-center align-center"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.category), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCol, { cols: "8" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCol, { cols: "1" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          color: "grey-lighten-1"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            index2 < filteredNews.value.length - 1 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                          ], 64);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-center mt-8" data-v-aae17682${_scopeId}>`);
            _push2(ssrRenderComponent(VPagination, {
              modelValue: page.value,
              "onUpdate:modelValue": ($event) => page.value = $event,
              length: 3,
              rounded: "circle"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8" }, [
                createVNode("h1", { class: "text-h4 font-weight-bold mb-2" }, "記事一覧")
              ]),
              createVNode(VTextField, {
                modelValue: query.value,
                "onUpdate:modelValue": ($event) => query.value = $event,
                label: "キーワードで検索",
                "prepend-inner-icon": "mdi-magnify",
                variant: "outlined",
                "hide-details": "",
                onInput: onSearchArticle,
                "onClick:clear": onSearchArticle,
                clearable: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VChipGroup, {
                modelValue: selectedCategory.value,
                "onUpdate:modelValue": [($event) => selectedCategory.value = $event, onSearchArticle],
                "selected-class": "text-primary",
                mandatory: ""
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(categories, (cat) => {
                    return createVNode(VChip, {
                      key: cat,
                      value: cat,
                      variant: "outlined",
                      filter: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(cat), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VCard, { variant: "flat" }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    lines: "two",
                    class: "pa-0"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredNews.value, (item, index2) => {
                        return openBlock(), createBlock(Fragment, {
                          key: item.id
                        }, [
                          createVNode(VListItem, {
                            link: "",
                            class: "py-4",
                            onClick: withModifiers(($event) => isOpenArticleContent(item.category, item.title, item.content), ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "3" }, {
                                    default: withCtx(() => [
                                      createVNode(VChip, {
                                        color: getCategoryColor(item.category),
                                        size: "small",
                                        label: "",
                                        style: { "display": "flex", "justify-content": "center", "align-items": "center" },
                                        class: "mr-4 d-none d-sm-flex items-center align-center"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.category), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, { cols: "8" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, { cols: "1" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        color: "grey-lighten-1"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          index2 < filteredNews.value.length - 1 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "text-center mt-8" }, [
                createVNode(VPagination, {
                  modelValue: page.value,
                  "onUpdate:modelValue": ($event) => page.value = $event,
                  length: 3,
                  rounded: "circle"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ArticleContent, {
        "is-show": isShow.value,
        tag: articleInfo.value.tag,
        "article-title": articleInfo.value.title,
        "article-paragraph": articleInfo.value.contentParagraph,
        onCloseEvent: ($event) => isShow.value = !isShow.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aae17682"]]);

export { index as default };
//# sourceMappingURL=index-B8yBPo11.mjs.map
