import { defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-DXiVmpp1.mjs';
import { V as VRow, a as VCol } from './VRow-DYQSMIMZ.mjs';
import { V as VCard, b as VCardText } from './VCard-BJQKre-c.mjs';
import { V as VBtn } from './VBtn-DNuBi1SF.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const profileDatas = [
      {
        title: "Name",
        value: "Fullstomic"
      },
      {
        title: "Job Title",
        value: "初志貫徹"
      },
      {
        title: "Strong Point",
        value: "正確性の高さなど"
      },
      {
        title: "Hobby",
        value: "行政区画調査など"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageTitle, {
        "title-name": "About",
        "content-paragraph": "'title'"
      }, null, _parent));
      _push(`<section class="my-10" style="${ssrRenderStyle({ "height": "50vh", "display": "flex", "justify-content": "center", "align-items": "center" })}" data-v-692343b8>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { class: "title" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 data-v-692343b8${_scopeId2}>Profile</h1>`);
                } else {
                  return [
                    createVNode("h1", null, "Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { color: "light-blue-lighten-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(profileDatas, (profileData) => {
                                _push5(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, { style: { "font-weight": "bold" } }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(profileData.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(profileData.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(profileData.value)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(profileData.value), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, { style: { "font-weight": "bold" } }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(profileData.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(profileData.value), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(profileDatas, (profileData) => {
                                  return createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { style: { "font-weight": "bold" } }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(profileData.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(profileData.value), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(profileDatas, (profileData) => {
                                return createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { style: { "font-weight": "bold" } }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(profileData.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(profileData.value), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
                    createVNode(VCard, { color: "light-blue-lighten-4" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(profileDatas, (profileData) => {
                              return createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { style: { "font-weight": "bold" } }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(profileData.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(profileData.value), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
              createVNode(VCol, { class: "title" }, {
                default: withCtx(() => [
                  createVNode("h1", null, "Profile")
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(VCard, { color: "light-blue-lighten-4" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(profileDatas, (profileData) => {
                            return createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { style: { "font-weight": "bold" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(profileData.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(profileData.value), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
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
      _push(`</section><section class="portfolio_section" data-v-692343b8><h1 data-v-692343b8>Portfolio</h1><div style="${ssrRenderStyle({ "height": "50%", "display": "flex", "flex-direction": "column", "justify-content": "space-around", "align-items": "center" })}" data-v-692343b8><p data-v-692343b8>私が実際に制作した作品は下記のリンクからご覧になれます。</p>`);
      _push(ssrRenderComponent(VBtn, {
        color: "primary",
        class: "link",
        to: "/portfolio/",
        "append-icon": "mdi-arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfolio`);
          } else {
            return [
              createTextVNode("Portfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-692343b8"]]);

export { index as default };
//# sourceMappingURL=index-DiCHt0Xs.mjs.map
