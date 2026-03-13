import { defineComponent, withCtx, createVNode, mergeProps, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import { V as VCard } from './VCard-BJQKre-c.mjs';
import { V as VRow, a as VCol, R as Ripple, b as VIcon } from './VRow-DYQSMIMZ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './VAvatar-CVUX6xse.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeCotentLink",
  __ssrInlineRender: true,
  props: {
    link: {},
    contentTitle: {},
    contentDescription: {},
    icon: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        to: props.link,
        "hide-details": "",
        style: { "width": "80%", "height": "200px", "margin": "auto" },
        class: "content_link"
      }, _attrs, ssrGetDirectiveProps(_ctx, Ripple)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-5370a96b${_scopeId}>`);
            _push2(ssrRenderComponent(VRow, { style: { "height": "110%" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { class: "image" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-${ssrInterpolate(__props.icon)}-outline `);
                            } else {
                              return [
                                createTextVNode(" mdi-" + toDisplayString(__props.icon) + "-outline ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-" + toDisplayString(__props.icon) + "-outline ", 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    class: "d-flex justify-center align-center",
                    style: { "flex-direction": "column" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 data-v-5370a96b${_scopeId3}>${ssrInterpolate(props.contentTitle)}</h1><p data-v-5370a96b${_scopeId3}>${ssrInterpolate(props.contentDescription)}</p>`);
                      } else {
                        return [
                          createVNode("h1", null, toDisplayString(props.contentTitle), 1),
                          createVNode("p", null, toDisplayString(props.contentDescription), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { class: "image" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-" + toDisplayString(__props.icon) + "-outline ", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      class: "d-flex justify-center align-center",
                      style: { "flex-direction": "column" }
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", null, toDisplayString(props.contentTitle), 1),
                        createVNode("p", null, toDisplayString(props.contentDescription), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode(VRow, { style: { "height": "110%" } }, {
                  default: withCtx(() => [
                    createVNode(VCol, { class: "image" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-" + toDisplayString(__props.icon) + "-outline ", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      class: "d-flex justify-center align-center",
                      style: { "flex-direction": "column" }
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", null, toDisplayString(props.contentTitle), 1),
                        createVNode("p", null, toDisplayString(props.contentDescription), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Link/HomeCotentLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeCotentLink = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-5370a96b"]]), { __name: "LinkHomeCotentLink" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section style="${ssrRenderStyle({ "height": "calc(100vh - 50px)", "display": "flex", "justify-content": "center", "align-items": "center", "background-image": "linear-gradient(\r\n        90deg,\r\n        rgba(65, 164, 253, 1),\r\n        rgba(14, 244, 255, 1)\r\n      )", "color": "#fff" })}" data-v-b365b832><h1 data-v-b365b832>Welcome to Fullstomic Homepage</h1></section><section data-v-b365b832><div class="d-flex align-center justify-center" data-v-b365b832><h1 data-v-b365b832>Contents</h1></div>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              class: "my-5 d-flex jusity-center items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HomeCotentLink, {
                    link: "about",
                    "content-title": "About",
                    "content-description": "私の情報はこちらから。",
                    icon: "account"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HomeCotentLink, {
                      link: "about",
                      "content-title": "About",
                      "content-description": "私の情報はこちらから。",
                      icon: "account"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              class: "my-5 d-flex jusity-center items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HomeCotentLink, {
                    link: "news",
                    "content-title": "News",
                    "content-description": "私に関するお知らせはこちらから。",
                    icon: "newspaper-variant"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HomeCotentLink, {
                      link: "news",
                      "content-title": "News",
                      "content-description": "私に関するお知らせはこちらから。",
                      icon: "newspaper-variant"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              class: "my-5 d-flex jusity-center items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HomeCotentLink, {
                    link: "portfolio",
                    "content-title": "Portfolio",
                    "content-description": "私の 制作した作品はこちらから。",
                    icon: "folder-file"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HomeCotentLink, {
                      link: "portfolio",
                      "content-title": "Portfolio",
                      "content-description": "私の 制作した作品はこちらから。",
                      icon: "folder-file"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              class: "my-5 d-flex jusity-center items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HomeCotentLink, {
                    link: "contact",
                    "content-title": "Contact",
                    "content-description": "ご連絡はこちらから。",
                    icon: "chat"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HomeCotentLink, {
                      link: "contact",
                      "content-title": "Contact",
                      "content-description": "ご連絡はこちらから。",
                      icon: "chat"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                class: "my-5 d-flex jusity-center items-center"
              }, {
                default: withCtx(() => [
                  createVNode(HomeCotentLink, {
                    link: "about",
                    "content-title": "About",
                    "content-description": "私の情報はこちらから。",
                    icon: "account"
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                class: "my-5 d-flex jusity-center items-center"
              }, {
                default: withCtx(() => [
                  createVNode(HomeCotentLink, {
                    link: "news",
                    "content-title": "News",
                    "content-description": "私に関するお知らせはこちらから。",
                    icon: "newspaper-variant"
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                class: "my-5 d-flex jusity-center items-center"
              }, {
                default: withCtx(() => [
                  createVNode(HomeCotentLink, {
                    link: "portfolio",
                    "content-title": "Portfolio",
                    "content-description": "私の 制作した作品はこちらから。",
                    icon: "folder-file"
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                class: "my-5 d-flex jusity-center items-center"
              }, {
                default: withCtx(() => [
                  createVNode(HomeCotentLink, {
                    link: "contact",
                    "content-title": "Contact",
                    "content-description": "ご連絡はこちらから。",
                    icon: "chat"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b365b832"]]);

export { index as default };
//# sourceMappingURL=index-BLEnigco.mjs.map
