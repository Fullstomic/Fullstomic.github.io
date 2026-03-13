import { defineComponent, ref, withCtx, isRef, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, mergeProps, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-DXiVmpp1.mjs';
import { V as VDialog } from './VDialog-DisBU3DD.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-BJQKre-c.mjs';
import { V as VRow, a as VCol } from './VRow-DYQSMIMZ.mjs';
import { V as VBtn } from './VBtn-DNuBi1SF.mjs';
import { a as VImg } from './VAvatar-CVUX6xse.mjs';
import { V as VContainer } from './VContainer-GiolSsVp.mjs';
import { V as VTextField } from './VTextField-Bxj5HX4m.mjs';
import { V as VChipGroup, a as VChip } from './VChip-BrLXCn6h.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
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
  __name: "PortfolioContent",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    imgUrl: {},
    link: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({ "max-width": "400" }, _attrs), {
        activator: withCtx(({ props: activatorProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps({ class: "h-auto w-auto py-4" }, activatorProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    width: 250,
                    "aspect-ratio": "16/9",
                    src: props.imgUrl,
                    style: { "cursor": "pointer" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      width: 250,
                      "aspect-ratio": "16/9",
                      src: props.imgUrl,
                      style: { "cursor": "pointer" }
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps({ class: "h-auto w-auto py-4" }, activatorProps), {
                default: withCtx(() => [
                  createVNode(VImg, {
                    width: 250,
                    "aspect-ratio": "16/9",
                    src: props.imgUrl,
                    style: { "cursor": "pointer" }
                  }, null, 8, ["src"])
                ]),
                _: 1
              }, 16)
            ];
          }
        }),
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { "max-width": "400" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "10" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3${_scopeId5}>${ssrInterpolate(props.title)}</h3>`);
                                  } else {
                                    return [
                                      createVNode("h3", null, toDisplayString(props.title), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      icon: "mdi-close",
                                      variant: "plain",
                                      size: "small",
                                      onClick: ($event) => isActive.value = false
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        icon: "mdi-close",
                                        variant: "plain",
                                        size: "small",
                                        onClick: withModifiers(($event) => isActive.value = false, ["stop"])
                                      }, null, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "10" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, toDisplayString(props.title), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      icon: "mdi-close",
                                      variant: "plain",
                                      size: "small",
                                      onClick: withModifiers(($event) => isActive.value = false, ["stop"])
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "10" }, {
                                default: withCtx(() => [
                                  createVNode("h3", null, toDisplayString(props.title), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    icon: "mdi-close",
                                    variant: "plain",
                                    size: "small",
                                    onClick: withModifiers(($event) => isActive.value = false, ["stop"])
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>${ssrInterpolate(props.description)}</p>`);
                      } else {
                        return [
                          createVNode("p", null, toDisplayString(props.description), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "10" }, {
                              default: withCtx(() => [
                                createVNode("h3", null, toDisplayString(props.title), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "2" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  icon: "mdi-close",
                                  variant: "plain",
                                  size: "small",
                                  onClick: withModifiers(($event) => isActive.value = false, ["stop"])
                                }, null, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("p", null, toDisplayString(props.description), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { "max-width": "400" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "10" }, {
                            default: withCtx(() => [
                              createVNode("h3", null, toDisplayString(props.title), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "2" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                icon: "mdi-close",
                                variant: "plain",
                                size: "small",
                                onClick: withModifiers(($event) => isActive.value = false, ["stop"])
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("p", null, toDisplayString(props.description), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio/PortfolioContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PortfolioContent = Object.assign(_sfc_main$1, { __name: "PortfolioContent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCategory = ref("すべて");
    ref(1);
    const query = ref("");
    const portfolioItems = ref([
      {
        title: "ポートフォリオタイトル1",
        description: "ポートフォリオの説明1",
        category: "Vue",
        imgUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: "https://example.com/portfolio1"
      },
      {
        title: "ポートフォリオタイトル2",
        description: "ポートフォリオの説明2",
        category: "React",
        imgUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: "https://example.com/portfolio2"
      },
      {
        title: "ポートフォリオタイトル3",
        description: "ポートフォリオの説明3",
        category: "Vue",
        imgUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        link: "https://example.com/portfolio3"
      }
    ]);
    const categories = [
      "すべて",
      "Vue",
      "Nuxt",
      "React",
      "Design",
      "Backend",
      "API"
    ];
    const filteredNews = ref(portfolioItems.value);
    function onSearchArticle() {
      filteredNews.value = portfolioItems.value.filter((item) => {
        const isCategoryMatch = selectedCategory.value === "すべて" || item.category === selectedCategory.value;
        const isKeywordMatch = !query.value || item.title.toLowerCase().includes(query.value.toLowerCase());
        return isCategoryMatch && isKeywordMatch;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageTitle, {
        "title-name": "Portfolio",
        "content-paragraph": "'title'"
      }, null, _parent));
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(query),
              "onUpdate:modelValue": ($event) => isRef(query) ? query.value = $event : null,
              label: "キーワードで検索",
              "prepend-inner-icon": "mdi-magnify",
              variant: "outlined",
              "hide-details": "",
              onInput: onSearchArticle,
              "onClick:clear": onSearchArticle,
              clearable: "",
              density: "comfortable",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VChipGroup, {
              modelValue: unref(selectedCategory),
              "onUpdate:modelValue": [($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null, onSearchArticle],
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
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(filteredNews).length > 0) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(filteredNews), (item) => {
                      _push3(ssrRenderComponent(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "4",
                        class: "d-flex justify-center items-center"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(PortfolioContent, {
                              title: item.title,
                              description: item.description,
                              "img-url": item.imgUrl,
                              link: item.link
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(PortfolioContent, {
                                title: item.title,
                                description: item.description,
                                "img-url": item.imgUrl,
                                link: item.link
                              }, null, 8, ["title", "description", "img-url", "link"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: "text-center",
                      style: { "height": "500px", "display": "flex" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p style="${ssrRenderStyle({ "margin": "30px auto", "color": "red" })}"${_scopeId3}>見つかりませんでした。</p>`);
                        } else {
                          return [
                            createVNode("p", { style: { "margin": "30px auto", "color": "red" } }, "見つかりませんでした。")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(filteredNews).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(filteredNews), (item) => {
                      return openBlock(), createBlock(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "4",
                        class: "d-flex justify-center items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(PortfolioContent, {
                            title: item.title,
                            description: item.description,
                            "img-url": item.imgUrl,
                            link: item.link
                          }, null, 8, ["title", "description", "img-url", "link"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 256)) : (openBlock(), createBlock(VCol, {
                      key: 1,
                      cols: "12",
                      class: "text-center",
                      style: { "height": "500px", "display": "flex" }
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { style: { "margin": "30px auto", "color": "red" } }, "見つかりませんでした。")
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTextField, {
                modelValue: unref(query),
                "onUpdate:modelValue": ($event) => isRef(query) ? query.value = $event : null,
                label: "キーワードで検索",
                "prepend-inner-icon": "mdi-magnify",
                variant: "outlined",
                "hide-details": "",
                onInput: onSearchArticle,
                "onClick:clear": onSearchArticle,
                clearable: "",
                density: "comfortable",
                color: "primary"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VChipGroup, {
                modelValue: unref(selectedCategory),
                "onUpdate:modelValue": [($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null, onSearchArticle],
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  unref(filteredNews).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(filteredNews), (item) => {
                    return openBlock(), createBlock(VCol, {
                      cols: "12",
                      sm: "6",
                      md: "4",
                      class: "d-flex justify-center items-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(PortfolioContent, {
                          title: item.title,
                          description: item.description,
                          "img-url": item.imgUrl,
                          link: item.link
                        }, null, 8, ["title", "description", "img-url", "link"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 256)) : (openBlock(), createBlock(VCol, {
                    key: 1,
                    cols: "12",
                    class: "text-center",
                    style: { "height": "500px", "display": "flex" }
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { style: { "margin": "30px auto", "color": "red" } }, "見つかりませんでした。")
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8sm_05e1.mjs.map
