import { defineComponent, ref, unref, withCtx, createVNode, isRef, createTextVNode, withDirectives, vShow, withModifiers, computed, shallowRef, toRef, watch, mergeProps, createElementVNode, Fragment, watchEffect, normalizeClass, vModelText, toDisplayString, useId, toValue, inject, provide, onScopeDispose, normalizeStyle, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-DXiVmpp1.mjs';
import { V as VDialog, u as useScopeId, a as VMenuSymbol, b as VOverlay, c as VDialogTransition, m as makeVOverlayProps } from './VDialog-DisBU3DD.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-BJQKre-c.mjs';
import { V as VRow, a as VCol, b as VIcon, i as deepEqual, j as VDefaultsProvider, u as useDimension, k as makeDimensionProps, R as Ripple, l as useDensity, n as useTextColor, o as useBackgroundColor, g as makeDensityProps } from './VRow-DYQSMIMZ.mjs';
import { V as VAvatar, I as Intersect, m as makeTransitionProps, c as createSimpleFunctional } from './VAvatar-CVUX6xse.mjs';
import { V as VBtn } from './VBtn-DNuBi1SF.mjs';
import { n as navigateTo, g as genericComponent, f as useLocale, d as useProxiedModel, w as wrapInArray, m as useRender, K as camelizeProps, L as ensureValidVNode, i as useDisplay, v as filterInputAttrs, J as convertToUnit, M as checkPrintable, x as matchesSelector, h as useRtl, z as isClickInsideElement, G as getCurrentInstance, H as useToggleScope, y as omit, q as propsFactory, N as callEvent, A as focusChild, B as getNextElement, C as focusableChildren, k as useResizeObserver, F as debounce, D as clamp, E as getPropertyFromItem, t as makeComponentProps, I as IconValue, s as makeThemeProps, j as provideDefaults } from './server.mjs';
import { a as VFadeTransition, V as VTextField, u as useForm, b as useAutocomplete, c as useInputIcon, f as forwardRefs, d as useFocus, e as VInput, g as VField, h as VCounter, m as makeVTextFieldProps, i as useAutofocus, j as makeVFieldProps, k as makeVInputProps, l as makeAutocompleteProps, n as VLabel } from './VTextField-Bxj5HX4m.mjs';
import { V as VContainer } from './VContainer-GiolSsVp.mjs';
import { u as useItems, V as VList, a as VListItem, b as VDivider, c as VListSubheader, m as makeItemsProps } from './VList-DE8QLq0V.mjs';
import { a as VChip } from './VChip-BrLXCn6h.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './ssrBoot-ZQn7gOuX.mjs';

const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactConfirm",
  __ssrInlineRender: true,
  props: {
    contactTitle: {},
    contactEmail: {},
    contactContent: {},
    isShow: { type: Boolean }
  },
  emits: ["send", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const titleList = [
      {
        id: 0,
        name: "選択してください"
      },
      {
        id: 1,
        name: "サービスについて"
      },
      {
        id: 2,
        name: "連絡"
      },
      { id: 3, name: "その他" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: props.isShow,
        "onUpdate:modelValue": ($event) => props.isShow = $event,
        "max-width": "500px"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3${_scopeId3}>お問い合わせ内容の確認</h3>`);
                      } else {
                        return [
                          createVNode("h3", null, "お問い合わせ内容の確認")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "5",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}><strong${_scopeId5}>お問い合わせ内容</strong></p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, [
                                        createVNode("strong", null, "お問い合わせ内容")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(titleList?.find((item) => item.id === props.contactTitle)?.name)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(titleList?.find((item) => item.id === props.contactTitle)?.name), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "5",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, [
                                      createVNode("strong", null, "お問い合わせ内容")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(titleList?.find((item) => item.id === props.contactTitle)?.name), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "5",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}><strong${_scopeId5}>メールアドレス</strong></p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, [
                                        createVNode("strong", null, "メールアドレス")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(props.contactEmail)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(props.contactEmail), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "5",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, [
                                      createVNode("strong", null, "メールアドレス")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(props.contactEmail), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "5",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}><strong${_scopeId5}>お問い合わせ内容</strong></p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, [
                                        createVNode("strong", null, "お問い合わせ内容")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(props.contactContent)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(props.contactContent), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "5",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, [
                                      createVNode("strong", null, "お問い合わせ内容")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(props.contactContent), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "error",
                                                  variant: "outlined",
                                                  "append-icon": "mdi-pen",
                                                  onClick: ($event) => emit("close")
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`修正`);
                                                    } else {
                                                      return [
                                                        createTextVNode("修正")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, {
                                                    color: "error",
                                                    variant: "outlined",
                                                    "append-icon": "mdi-pen",
                                                    onClick: withModifiers(($event) => emit("close"), ["stop"])
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("修正")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  "append-icon": "mdi-send",
                                                  onClick: ($event) => emit("send")
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` 送信 `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" 送信 ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    "append-icon": "mdi-send",
                                                    onClick: withModifiers(($event) => emit("send"), ["stop"])
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" 送信 ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSpacer),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  color: "error",
                                                  variant: "outlined",
                                                  "append-icon": "mdi-pen",
                                                  onClick: withModifiers(($event) => emit("close"), ["stop"])
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("修正")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  "append-icon": "mdi-send",
                                                  onClick: withModifiers(($event) => emit("send"), ["stop"])
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" 送信 ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VSpacer)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VSpacer),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                color: "error",
                                                variant: "outlined",
                                                "append-icon": "mdi-pen",
                                                onClick: withModifiers(($event) => emit("close"), ["stop"])
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("修正")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                color: "primary",
                                                variant: "outlined",
                                                "append-icon": "mdi-send",
                                                onClick: withModifiers(($event) => emit("send"), ["stop"])
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" 送信 ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VSpacer)
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
                                createVNode(VCol),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VSpacer),
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              color: "error",
                                              variant: "outlined",
                                              "append-icon": "mdi-pen",
                                              onClick: withModifiers(($event) => emit("close"), ["stop"])
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("修正")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              color: "primary",
                                              variant: "outlined",
                                              "append-icon": "mdi-send",
                                              onClick: withModifiers(($event) => emit("send"), ["stop"])
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" 送信 ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VSpacer)
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "5",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", null, [
                                    createVNode("strong", null, "お問い合わせ内容")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(titleList?.find((item) => item.id === props.contactTitle)?.name), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "5",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", null, [
                                    createVNode("strong", null, "メールアドレス")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(props.contactEmail), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "5",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", null, [
                                    createVNode("strong", null, "お問い合わせ内容")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(props.contactContent), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VSpacer),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            color: "error",
                                            variant: "outlined",
                                            "append-icon": "mdi-pen",
                                            onClick: withModifiers(($event) => emit("close"), ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("修正")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            color: "primary",
                                            variant: "outlined",
                                            "append-icon": "mdi-send",
                                            onClick: withModifiers(($event) => emit("send"), ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" 送信 ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSpacer)
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
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("h3", null, "お問い合わせ内容の確認")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "5",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, [
                                  createVNode("strong", null, "お問い合わせ内容")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(titleList?.find((item) => item.id === props.contactTitle)?.name), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "5",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, [
                                  createVNode("strong", null, "メールアドレス")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(props.contactEmail), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "5",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, [
                                  createVNode("strong", null, "お問い合わせ内容")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(props.contactContent), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VSpacer),
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          color: "error",
                                          variant: "outlined",
                                          "append-icon": "mdi-pen",
                                          onClick: withModifiers(($event) => emit("close"), ["stop"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("修正")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          color: "primary",
                                          variant: "outlined",
                                          "append-icon": "mdi-send",
                                          onClick: withModifiers(($event) => emit("send"), ["stop"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" 送信 ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VSpacer)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode("h3", null, "お問い合わせ内容の確認")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "5",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createVNode("strong", null, "お問い合わせ内容")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(titleList?.find((item) => item.id === props.contactTitle)?.name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "5",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createVNode("strong", null, "メールアドレス")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.contactEmail), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "5",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createVNode("strong", null, "お問い合わせ内容")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.contactContent), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VSpacer),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        color: "error",
                                        variant: "outlined",
                                        "append-icon": "mdi-pen",
                                        onClick: withModifiers(($event) => emit("close"), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("修正")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        variant: "outlined",
                                        "append-icon": "mdi-send",
                                        onClick: withModifiers(($event) => emit("send"), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 送信 ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSpacer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/ContactConfirm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactConfirm = Object.assign(_sfc_main$1, { __name: "ContactConfirm" });
const VSelectionControlGroupSymbol = /* @__PURE__ */ Symbol.for("vuetify:selection-control-group");
const makeSelectionControlGroupProps = propsFactory({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: IconValue,
  trueIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeThemeProps()
}, "SelectionControlGroup");
const makeVSelectionControlGroupProps = propsFactory({
  ...makeSelectionControlGroupProps({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
genericComponent()({
  name: "VSelectionControlGroup",
  props: makeVSelectionControlGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const modelValue = useProxiedModel(props, "modelValue");
    const uid = useId();
    const id = toRef(() => props.id || `v-selection-control-group-${uid}`);
    const name = toRef(() => props.name || id.value);
    const updateHandlers = /* @__PURE__ */ new Set();
    provide(VSelectionControlGroupSymbol, {
      modelValue,
      forceUpdate: () => {
        updateHandlers.forEach((fn) => fn());
      },
      onForceUpdate: (cb) => {
        updateHandlers.add(cb);
        onScopeDispose(() => {
          updateHandlers.delete(cb);
        });
      }
    });
    provideDefaults({
      [props.defaultsTarget]: {
        color: toRef(() => props.color),
        disabled: toRef(() => props.disabled),
        density: toRef(() => props.density),
        error: toRef(() => props.error),
        inline: toRef(() => props.inline),
        modelValue,
        multiple: toRef(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value)),
        name,
        falseIcon: toRef(() => props.falseIcon),
        trueIcon: toRef(() => props.trueIcon),
        readonly: toRef(() => props.readonly),
        ripple: toRef(() => props.ripple),
        type: toRef(() => props.type),
        valueComparator: toRef(() => props.valueComparator)
      }
    });
    useRender(() => createElementVNode("div", {
      "class": normalizeClass(["v-selection-control-group", {
        "v-selection-control-group--inline": props.inline
      }, props.class]),
      "style": normalizeStyle(props.style),
      "role": props.type === "radio" ? "radiogroup" : void 0
    }, [slots.default?.()]));
    return {};
  }
});
const makeVSelectionControlProps = propsFactory({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...makeComponentProps(),
  ...makeSelectionControlGroupProps()
}, "VSelectionControl");
function useSelectionControl(props) {
  const group = inject(VSelectionControlGroupSymbol, void 0);
  const {
    densityClasses
  } = useDensity(props);
  const modelValue = useProxiedModel(props, "modelValue");
  const trueValue = computed(() => props.trueValue !== void 0 ? props.trueValue : props.value !== void 0 ? props.value : true);
  const falseValue = computed(() => props.falseValue !== void 0 ? props.falseValue : false);
  const isMultiple = computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value));
  const model = computed({
    get() {
      const val = group ? group.modelValue.value : modelValue.value;
      return isMultiple.value ? wrapInArray(val).some((v) => props.valueComparator(v, trueValue.value)) : props.valueComparator(val, trueValue.value);
    },
    set(val) {
      if (props.readonly) return;
      const currentValue = val ? trueValue.value : falseValue.value;
      let newVal = currentValue;
      if (isMultiple.value) {
        newVal = val ? [...wrapInArray(modelValue.value), currentValue] : wrapInArray(modelValue.value).filter((item) => !props.valueComparator(item, trueValue.value));
      }
      if (group) {
        group.modelValue.value = newVal;
      } else {
        modelValue.value = newVal;
      }
    }
  });
  const {
    textColorClasses,
    textColorStyles
  } = useTextColor(() => {
    if (props.error || props.disabled) return void 0;
    return model.value ? props.color : props.baseColor;
  });
  const {
    backgroundColorClasses,
    backgroundColorStyles
  } = useBackgroundColor(() => {
    return model.value && !props.error && !props.disabled ? props.color : props.baseColor;
  });
  const icon = computed(() => model.value ? props.trueIcon : props.falseIcon);
  return {
    group,
    densityClasses,
    trueValue,
    falseValue,
    model,
    textColorClasses,
    textColorStyles,
    backgroundColorClasses,
    backgroundColorStyles,
    icon
  };
}
const VSelectionControl = genericComponent()({
  name: "VSelectionControl",
  directives: {
    vRipple: Ripple
  },
  inheritAttrs: false,
  props: makeVSelectionControlProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      group,
      densityClasses,
      icon,
      model,
      textColorClasses,
      textColorStyles,
      backgroundColorClasses,
      backgroundColorStyles,
      trueValue
    } = useSelectionControl(props);
    const uid = useId();
    const isFocused = shallowRef(false);
    const isFocusVisible = shallowRef(false);
    const input = ref();
    const id = toRef(() => props.id || `input-${uid}`);
    const isInteractive = toRef(() => !props.disabled && !props.readonly);
    group?.onForceUpdate(() => {
      if (input.value) {
        input.value.checked = model.value;
      }
    });
    function onFocus(e) {
      if (!isInteractive.value) return;
      isFocused.value = true;
      if (matchesSelector(e.target) !== false) {
        isFocusVisible.value = true;
      }
    }
    function onBlur() {
      isFocused.value = false;
      isFocusVisible.value = false;
    }
    function onClickLabel(e) {
      e.stopPropagation();
    }
    function onInput(e) {
      if (!isInteractive.value) {
        if (input.value) {
          input.value.checked = model.value;
        }
        return;
      }
      if (props.readonly && group) {
        nextTick(() => group.forceUpdate());
      }
      model.value = e.target.checked;
    }
    useRender(() => {
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const inputNode = createElementVNode("input", mergeProps({
        "ref": input,
        "checked": model.value,
        "disabled": !!props.disabled,
        "id": id.value,
        "onBlur": onBlur,
        "onFocus": onFocus,
        "onInput": onInput,
        "aria-disabled": !!props.disabled,
        "aria-label": props.label,
        "type": props.type,
        "value": trueValue.value,
        "name": props.name,
        "aria-checked": props.type === "checkbox" ? model.value : void 0
      }, inputAttrs), null);
      return createElementVNode("div", mergeProps({
        "class": ["v-selection-control", {
          "v-selection-control--dirty": model.value,
          "v-selection-control--disabled": props.disabled,
          "v-selection-control--error": props.error,
          "v-selection-control--focused": isFocused.value,
          "v-selection-control--focus-visible": isFocusVisible.value,
          "v-selection-control--inline": props.inline
        }, densityClasses.value, props.class]
      }, rootAttrs, {
        "style": props.style
      }), [createElementVNode("div", {
        "class": normalizeClass(["v-selection-control__wrapper", textColorClasses.value]),
        "style": normalizeStyle(textColorStyles.value)
      }, [slots.default?.({
        backgroundColorClasses,
        backgroundColorStyles
      }), withDirectives(createElementVNode("div", {
        "class": normalizeClass(["v-selection-control__input"])
      }, [slots.input?.({
        model,
        textColorClasses,
        textColorStyles,
        backgroundColorClasses,
        backgroundColorStyles,
        inputNode,
        icon: icon.value,
        props: {
          onFocus,
          onBlur,
          id: id.value
        }
      }) ?? createElementVNode(Fragment, null, [icon.value && createVNode(VIcon, {
        "key": "icon",
        "icon": icon.value
      }, null), inputNode])]), [[Ripple, !props.disabled && !props.readonly && props.ripple, null, {
        center: true,
        circle: true
      }]])]), label && createVNode(VLabel, {
        "for": id.value,
        "onClick": onClickLabel
      }, {
        default: () => [label]
      })]);
    });
    return {
      isFocused,
      input
    };
  }
});
const makeVCheckboxBtnProps = propsFactory({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: IconValue,
    default: "$checkboxIndeterminate"
  },
  ...makeVSelectionControlProps({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn");
const VCheckboxBtn = genericComponent()({
  name: "VCheckboxBtn",
  props: makeVCheckboxBtnProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    function onChange(v) {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    const falseIcon = toRef(() => {
      return indeterminate.value ? props.indeterminateIcon : props.falseIcon;
    });
    const trueIcon = toRef(() => {
      return indeterminate.value ? props.indeterminateIcon : props.trueIcon;
    });
    useRender(() => {
      const controlProps = omit(VSelectionControl.filterProps(props), ["modelValue"]);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": [($event) => model.value = $event, onChange],
        "class": ["v-checkbox-btn", props.class],
        "style": props.style,
        "type": "checkbox",
        "falseIcon": falseIcon.value,
        "trueIcon": trueIcon.value,
        "aria-checked": indeterminate.value ? "mixed" : void 0
      }), slots);
    });
    return {};
  }
});
const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...omit(makeVOverlayProps({
    captureFocus: true,
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: false,
    scrollStrategy: "reposition",
    transition: {
      component: VDialogTransition
    }
  }), ["absolute"])
}, "VMenu");
const VMenu = genericComponent()({
  name: "VMenu",
  props: makeVMenuProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const {
      isRtl
    } = useRtl();
    const uid = useId();
    const id = toRef(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(/* @__PURE__ */ new Set());
    provide(VMenuSymbol, {
      register() {
        openChildren.value.add(uid);
      },
      unregister() {
        openChildren.value.delete(uid);
      },
      closeParents(e) {
        setTimeout(() => {
          if (!openChildren.value.size && !props.persistent && (e == null || overlay.value?.contentEl && !isClickInsideElement(e, overlay.value.contentEl))) {
            isActive.value = false;
            parent?.closeParents();
          }
        }, 40);
      }
    });
    watch(isActive, (val) => {
      val ? parent?.register() : parent?.unregister();
    }, {
      immediate: true
    });
    function onClickOutside(e) {
      parent?.closeParents(e);
    }
    function onKeydown(e) {
      if (props.disabled) return;
      if (e.key === "Tab" || e.key === "Enter" && !props.closeOnContentClick) {
        if (e.key === "Enter" && (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement && !!e.target.closest("form"))) return;
        if (e.key === "Enter") e.preventDefault();
        const nextElement = getNextElement(focusableChildren(overlay.value?.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0);
        if (!nextElement && !props.retainFocus) {
          isActive.value = false;
          overlay.value?.activatorEl?.focus();
        }
      } else if (props.submenu && e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) {
        isActive.value = false;
        overlay.value?.activatorEl?.focus();
      }
    }
    function onActivatorKeydown(e) {
      if (props.disabled) return;
      const el = overlay.value?.contentEl;
      if (el && isActive.value) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, "next");
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, "prev");
        } else if (props.submenu) {
          if (e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) {
            isActive.value = false;
          } else if (e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight")) {
            e.preventDefault();
            focusChild(el, "first");
          }
        }
      } else if (props.submenu ? e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "menu",
      "aria-expanded": String(isActive.value),
      "aria-controls": id.value,
      "aria-owns": id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "id": id.value,
        "class": ["v-menu", props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "location": props.location ?? (props.submenu ? "end" : "bottom"),
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VMenu"
          }, {
            default: () => [slots.default?.(...args)]
          });
        }
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});
const makeVVirtualScrollItemProps = propsFactory({
  renderless: Boolean,
  ...makeComponentProps()
}, "VVirtualScrollItem");
const VVirtualScrollItem = genericComponent()({
  name: "VVirtualScrollItem",
  inheritAttrs: false,
  props: makeVVirtualScrollItemProps(),
  emits: {
    "update:height": (height) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    watch(() => contentRect.value?.height, (height) => {
      if (height != null) emit("update:height", height);
    });
    useRender(() => props.renderless ? createElementVNode(Fragment, null, [slots.default?.({
      itemRef: resizeRef
    })]) : createElementVNode("div", mergeProps({
      "ref": resizeRef,
      "class": ["v-virtual-scroll__item", props.class],
      "style": props.style
    }, attrs), [slots.default?.()]));
  }
});
const UP = -1;
const DOWN = 1;
const BUFFER_PX = 100;
const makeVirtualProps = propsFactory({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  itemKey: {
    type: [String, Array, Function],
    default: null
  },
  height: [Number, String]
}, "virtual");
function useVirtual(props, items) {
  const display = useDisplay();
  const itemHeight = shallowRef(0);
  watchEffect(() => {
    itemHeight.value = parseFloat(props.itemHeight || 0);
  });
  const first = shallowRef(0);
  const last = shallowRef(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(props.height) || display.height.value) / (itemHeight.value || 16)
  ) || 1);
  const paddingTop = shallowRef(0);
  const paddingBottom = shallowRef(0);
  const containerRef = ref();
  const markerRef = ref();
  let markerOffset = 0;
  const {
    resizeRef,
    contentRect
  } = useResizeObserver();
  watchEffect(() => {
    resizeRef.value = containerRef.value;
  });
  const viewportHeight = computed(() => {
    return containerRef.value === (void 0).documentElement ? display.height.value : contentRect.value?.height || parseInt(props.height) || 0;
  });
  const hasInitialRender = computed(() => {
    return !!(containerRef.value && markerRef.value && viewportHeight.value && itemHeight.value);
  });
  let sizes = Array.from({
    length: items.value.length
  });
  let offsets = Array.from({
    length: items.value.length
  });
  const updateTime = shallowRef(0);
  let targetScrollIndex = -1;
  function getSize(index) {
    return sizes[index] || itemHeight.value;
  }
  const updateOffsets = debounce(() => {
    const start = performance.now();
    offsets[0] = 0;
    const length = items.value.length;
    for (let i = 1; i <= length; i++) {
      offsets[i] = (offsets[i - 1] || 0) + getSize(i - 1);
    }
    updateTime.value = Math.max(updateTime.value, performance.now() - start);
  }, updateTime);
  const unwatch = watch(hasInitialRender, (v) => {
    if (!v) return;
    unwatch();
    markerOffset = markerRef.value.offsetTop;
    updateOffsets.immediate();
    calculateVisibleItems();
    if (!~targetScrollIndex) return;
    nextTick(() => {
    });
  });
  onScopeDispose(() => {
    updateOffsets.clear();
  });
  function handleItemResize(index, height) {
    const prevHeight = sizes[index];
    const prevMinHeight = itemHeight.value;
    itemHeight.value = prevMinHeight ? Math.min(itemHeight.value, height) : height;
    if (prevHeight !== height || prevMinHeight !== itemHeight.value) {
      sizes[index] = height;
      updateOffsets();
    }
  }
  function calculateOffset(index) {
    index = clamp(index, 0, items.value.length);
    const whole = Math.floor(index);
    const fraction = index % 1;
    const next = whole + 1;
    const wholeOffset = offsets[whole] || 0;
    const nextOffset = offsets[next] || wholeOffset;
    return wholeOffset + (nextOffset - wholeOffset) * fraction;
  }
  function calculateIndex(scrollTop) {
    return binaryClosest(offsets, scrollTop);
  }
  let lastScrollTop = 0;
  let scrollVelocity = 0;
  let lastScrollTime = 0;
  watch(viewportHeight, (val, oldVal) => {
    calculateVisibleItems();
    if (val < oldVal) {
      requestAnimationFrame(() => {
        scrollVelocity = 0;
        calculateVisibleItems();
      });
    }
  });
  let scrollTimeout = -1;
  function handleScroll() {
    if (!containerRef.value || !markerRef.value) return;
    const scrollTop = containerRef.value.scrollTop;
    const scrollTime = performance.now();
    const scrollDeltaT = scrollTime - lastScrollTime;
    if (scrollDeltaT > 500) {
      scrollVelocity = Math.sign(scrollTop - lastScrollTop);
      markerOffset = markerRef.value.offsetTop;
    } else {
      scrollVelocity = scrollTop - lastScrollTop;
    }
    lastScrollTop = scrollTop;
    lastScrollTime = scrollTime;
    (void 0).clearTimeout(scrollTimeout);
    scrollTimeout = (void 0).setTimeout(handleScrollend, 500);
    calculateVisibleItems();
  }
  function handleScrollend() {
    if (!containerRef.value || !markerRef.value) return;
    scrollVelocity = 0;
    lastScrollTime = 0;
    (void 0).clearTimeout(scrollTimeout);
    calculateVisibleItems();
  }
  let raf = -1;
  function calculateVisibleItems() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(_calculateVisibleItems);
  }
  function _calculateVisibleItems() {
    if (!containerRef.value || !viewportHeight.value || !itemHeight.value) return;
    const scrollTop = lastScrollTop - markerOffset;
    const direction = Math.sign(scrollVelocity);
    const startPx = Math.max(0, scrollTop - BUFFER_PX);
    const start = clamp(calculateIndex(startPx), 0, items.value.length);
    const endPx = scrollTop + viewportHeight.value + BUFFER_PX;
    const end = clamp(calculateIndex(endPx) + 1, start + 1, items.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (direction !== UP || start < first.value) && (direction !== DOWN || end > last.value)
    ) {
      const topOverflow = calculateOffset(first.value) - calculateOffset(start);
      const bottomOverflow = calculateOffset(end) - calculateOffset(last.value);
      const bufferOverflow = Math.max(topOverflow, bottomOverflow);
      if (bufferOverflow > BUFFER_PX) {
        first.value = start;
        last.value = end;
      } else {
        if (start <= 0) first.value = start;
        if (end >= items.value.length) last.value = end;
      }
    }
    paddingTop.value = calculateOffset(first.value);
    paddingBottom.value = calculateOffset(items.value.length) - calculateOffset(last.value);
  }
  function scrollToIndex(index) {
    const offset = calculateOffset(index);
    if (!containerRef.value || index && !offset) {
      targetScrollIndex = index;
    } else {
      containerRef.value.scrollTop = offset;
    }
  }
  const computedItems = computed(() => {
    return items.value.slice(first.value, last.value).map((item, index) => {
      const _index = index + first.value;
      return {
        raw: item,
        index: _index,
        key: getPropertyFromItem(item, props.itemKey, _index)
      };
    });
  });
  watch(items, () => {
    sizes = Array.from({
      length: items.value.length
    });
    offsets = Array.from({
      length: items.value.length
    });
    updateOffsets.immediate();
    calculateVisibleItems();
  }, {
    deep: 1
  });
  return {
    calculateVisibleItems,
    containerRef,
    markerRef,
    computedItems,
    paddingTop,
    paddingBottom,
    scrollToIndex,
    handleScroll,
    handleScrollend,
    handleItemResize
  };
}
function binaryClosest(arr, val) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;
  let item = null;
  let target = -1;
  if (arr[high] < val) {
    return high;
  }
  while (low <= high) {
    mid = low + high >> 1;
    item = arr[mid];
    if (item > val) {
      high = mid - 1;
    } else if (item < val) {
      target = mid;
      low = mid + 1;
    } else if (item === val) {
      return mid;
    } else {
      return low;
    }
  }
  return target;
}
const makeVVirtualScrollProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...makeVirtualProps(),
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VVirtualScroll");
const VVirtualScroll = genericComponent()({
  name: "VVirtualScroll",
  props: makeVVirtualScrollProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    getCurrentInstance("VVirtualScroll");
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      calculateVisibleItems,
      containerRef,
      markerRef,
      handleScroll,
      handleScrollend,
      handleItemResize,
      scrollToIndex,
      paddingTop,
      paddingBottom,
      computedItems
    } = useVirtual(props, toRef(() => props.items));
    useToggleScope(() => props.renderless, () => {
      function handleListeners() {
        let add = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        const method = add ? "addEventListener" : "removeEventListener";
        if (containerRef.value === (void 0).documentElement) {
          (void 0)[method]("scroll", handleScroll, {
            passive: true
          });
          (void 0)[method]("scrollend", handleScrollend);
        } else {
          containerRef.value?.[method]("scroll", handleScroll, {
            passive: true
          });
          containerRef.value?.[method]("scrollend", handleScrollend);
        }
      }
      onScopeDispose(handleListeners);
    });
    useRender(() => {
      const children = computedItems.value.map((item) => createVNode(VVirtualScrollItem, {
        "key": item.key,
        "renderless": props.renderless,
        "onUpdate:height": (height) => handleItemResize(item.index, height)
      }, {
        default: (slotProps) => slots.default?.({
          item: item.raw,
          index: item.index,
          ...slotProps
        })
      }));
      return props.renderless ? createElementVNode(Fragment, null, [createElementVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingTop: convertToUnit(paddingTop.value)
        }
      }, null), children, createElementVNode("div", {
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, null)]) : createElementVNode("div", {
        "ref": containerRef,
        "class": normalizeClass(["v-virtual-scroll", props.class]),
        "onScrollPassive": handleScroll,
        "onScrollend": handleScrollend,
        "style": normalizeStyle([dimensionStyles.value, props.style])
      }, [createElementVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__container",
        "style": {
          paddingTop: convertToUnit(paddingTop.value),
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, [children])]);
    });
    return {
      calculateVisibleItems,
      scrollToIndex
    };
  }
});
function useScrolling(listRef, textFieldRef) {
  const isScrolling = shallowRef(false);
  let scrollTimeout;
  function onListScroll(e) {
    cancelAnimationFrame(scrollTimeout);
    isScrolling.value = true;
    scrollTimeout = requestAnimationFrame(() => {
      scrollTimeout = requestAnimationFrame(() => {
        isScrolling.value = false;
      });
    });
  }
  async function finishScrolling() {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => {
      if (isScrolling.value) {
        const stop = watch(isScrolling, () => {
          stop();
          resolve();
        });
      } else resolve();
    });
  }
  async function onListKeydown(e) {
    if (e.key === "Tab") {
      textFieldRef.value?.focus();
    }
    if (!["PageDown", "PageUp", "Home", "End"].includes(e.key)) return;
    const el = listRef.value?.$el;
    if (!el) return;
    if (e.key === "Home" || e.key === "End") {
      el.scrollTo({
        top: e.key === "Home" ? 0 : el.scrollHeight,
        behavior: "smooth"
      });
    }
    await finishScrolling();
    const children = el.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (e.key === "PageDown" || e.key === "Home") {
      const top = el.getBoundingClientRect().top;
      for (const child of children) {
        if (child.getBoundingClientRect().top >= top) {
          child.focus();
          break;
        }
      }
    } else {
      const bottom = el.getBoundingClientRect().bottom;
      for (const child of [...children].reverse()) {
        if (child.getBoundingClientRect().bottom <= bottom) {
          child.focus();
          break;
        }
      }
    }
  }
  return {
    onScrollPassive: onListScroll,
    onKeydown: onListKeydown
  };
}
const makeMenuActivatorProps = propsFactory({
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  }
}, "autocomplete");
function useMenuActivator(props, isOpen) {
  const uid = useId();
  const menuId = computed(() => `menu-${uid}`);
  const ariaExpanded = toRef(() => toValue(isOpen));
  const ariaControls = toRef(() => menuId.value);
  return {
    menuId,
    ariaExpanded,
    ariaControls
  };
}
const makeSelectProps = propsFactory({
  chips: Boolean,
  closableChips: Boolean,
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: IconValue,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  noAutoScroll: Boolean,
  ...makeMenuActivatorProps(),
  ...makeItemsProps({
    itemChildren: false
  })
}, "Select");
const makeVSelectProps = propsFactory({
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty"]),
  ...makeTransitionProps({
    transition: {
      component: VDialogTransition
    }
  })
}, "VSelect");
const VSelect = genericComponent()({
  name: "VSelect",
  props: makeVSelectProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:menu": (ue) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const vMenuRef = ref();
    const vVirtualScrollRef = ref();
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
      const transformed = transformOut(v);
      return props.multiple ? transformed : transformed[0] ?? null;
    });
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : model.value.length;
    });
    const form = useForm(props);
    const autocomplete = useAutocomplete(props);
    const selectedValues = computed(() => model.value.map((selection) => selection.value));
    const isFocused = shallowRef(false);
    const closableChips = toRef(() => props.closableChips && !form.isReadonly.value && !form.isDisabled.value);
    const {
      InputIcon
    } = useInputIcon(props);
    let keyboardLookupPrefix = "";
    let keyboardLookupIndex = 0;
    let keyboardLookupLastTime;
    const displayItems = computed(() => {
      if (props.hideSelected) {
        return items.value.filter((item) => !model.value.some((s) => (props.valueComparator || deepEqual)(s, item)));
      }
      return items.value;
    });
    const menuDisabled = computed(() => props.hideNoData && !displayItems.value.length || form.isReadonly.value || form.isDisabled.value);
    const _menu = useProxiedModel(props, "menu");
    const menu = computed({
      get: () => _menu.value,
      set: (v) => {
        if (_menu.value && !v && vMenuRef.value?.ΨopenChildren.size) return;
        if (v && menuDisabled.value) return;
        _menu.value = v;
      }
    });
    const {
      menuId,
      ariaExpanded,
      ariaControls
    } = useMenuActivator(props, menu);
    const computedMenuProps = computed(() => {
      return {
        ...props.menuProps,
        activatorProps: {
          ...props.menuProps?.activatorProps || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    });
    const listRef = ref();
    const listEvents = useScrolling(listRef, vTextFieldRef);
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true;
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value) return;
      menu.value = !menu.value;
    }
    function onListKeydown(e) {
      if (checkPrintable(e)) {
        onKeydown(e);
      }
    }
    function onKeydown(e) {
      if (!e.key || form.isReadonly.value) return;
      if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
        e.preventDefault();
      }
      if (["Enter", "ArrowDown", " "].includes(e.key)) {
        menu.value = true;
      }
      if (["Escape", "Tab"].includes(e.key)) {
        menu.value = false;
      }
      if (props.clearable && e.key === "Backspace") {
        e.preventDefault();
        model.value = [];
        onClear();
        return;
      }
      if (e.key === "Home") {
        listRef.value?.focus("first");
      } else if (e.key === "End") {
        listRef.value?.focus("last");
      }
      const KEYBOARD_LOOKUP_THRESHOLD = 1e3;
      if (!checkPrintable(e)) return;
      const now = performance.now();
      if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        keyboardLookupPrefix = "";
        keyboardLookupIndex = 0;
      }
      keyboardLookupPrefix += e.key.toLowerCase();
      keyboardLookupLastTime = now;
      const items2 = displayItems.value;
      function findItem() {
        let result2 = findItemBase();
        if (result2) return result2;
        if (keyboardLookupPrefix.at(-1) === keyboardLookupPrefix.at(-2)) {
          keyboardLookupPrefix = keyboardLookupPrefix.slice(0, -1);
          keyboardLookupIndex++;
          result2 = findItemBase();
          if (result2) return result2;
        }
        keyboardLookupIndex = 0;
        result2 = findItemBase();
        if (result2) return result2;
        keyboardLookupPrefix = e.key.toLowerCase();
        return findItemBase();
      }
      function findItemBase() {
        for (let i = keyboardLookupIndex; i < items2.length; i++) {
          const _item = items2[i];
          if (_item.title.toLowerCase().startsWith(keyboardLookupPrefix)) {
            return [_item, i];
          }
        }
        return void 0;
      }
      const result = findItem();
      if (!result) return;
      const [item, index] = result;
      keyboardLookupIndex = index;
      listRef.value?.focus(index);
      if (!props.multiple) {
        model.value = [item];
      }
    }
    function select(item) {
      let set = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (item.props.disabled) return;
      if (props.multiple) {
        const index = model.value.findIndex((selection) => (props.valueComparator || deepEqual)(selection.value, item.value));
        const add = set == null ? !~index : set;
        if (~index) {
          const value = add ? [...model.value, item] : [...model.value];
          value.splice(index, 1);
          model.value = value;
        } else if (add) {
          model.value = [...model.value, item];
        }
      } else {
        const add = set !== false;
        model.value = add ? [item] : [];
        nextTick(() => {
          menu.value = false;
        });
      }
    }
    function onBlur(e) {
      if (!listRef.value?.$el.contains(e.relatedTarget)) {
        menu.value = false;
      }
    }
    function onAfterEnter() {
      if (props.eager) {
        vVirtualScrollRef.value?.calculateVisibleItems();
      }
    }
    function onAfterLeave() {
      if (isFocused.value) {
        vTextFieldRef.value?.focus();
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onModelUpdate(v) {
      if (v == null) model.value = [];
      else if (matchesSelector(vTextFieldRef.value) || matchesSelector(vTextFieldRef.value)) ; else if (vTextFieldRef.value) {
        vTextFieldRef.value.value = "";
      }
    }
    watch(menu, () => {
      if (!props.hideSelected && menu.value && model.value.length) {
        displayItems.value.findIndex((item) => model.value.some((s) => (props.valueComparator || deepEqual)(s.value, item.value)));
      }
    });
    watch(items, (newVal, oldVal) => {
      if (menu.value) return;
      if (isFocused.value && props.hideNoData && !oldVal.length && newVal.length) {
        menu.value = true;
      }
    });
    useRender(() => {
      const hasChips = !!(props.chips || slots.chip);
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
      const isDirty = model.value.length > 0;
      const textFieldProps = VTextField.filterProps(props);
      const placeholder = isDirty || !isFocused.value && props.label && !props.persistentPlaceholder ? void 0 : props.placeholder;
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": model.value.map((v) => v.props.title).join(", "),
        "name": void 0,
        "onUpdate:modelValue": onModelUpdate,
        "focused": isFocused.value,
        "onUpdate:focused": ($event) => isFocused.value = $event,
        "validationValue": model.externalValue,
        "counterValue": counterValue.value,
        "dirty": isDirty,
        "class": ["v-select", {
          "v-select--active-menu": menu.value,
          "v-select--chips": !!props.chips,
          [`v-select--${props.multiple ? "multiple" : "single"}`]: true,
          "v-select--selected": model.value.length,
          "v-select--selection-slot": !!slots.selection
        }, props.class],
        "style": props.style,
        "inputmode": "none",
        "placeholder": placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "aria-expanded": ariaExpanded.value,
        "aria-controls": ariaControls.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id
          } = _ref2;
          return createElementVNode(Fragment, null, [createElementVNode("select", {
            "hidden": true,
            "multiple": props.multiple,
            "name": autocomplete.fieldName.value
          }, [items.value.map((item) => createElementVNode("option", {
            "key": item.value,
            "value": item.value,
            "selected": selectedValues.value.includes(item.value)
          }, null))]), createVNode(VMenu, mergeProps({
            "id": menuId.value,
            "ref": vMenuRef,
            "modelValue": menu.value,
            "onUpdate:modelValue": ($event) => menu.value = $event,
            "activator": "parent",
            "contentClass": "v-select__content",
            "disabled": menuDisabled.value,
            "eager": props.eager,
            "maxHeight": 310,
            "openOnClick": false,
            "closeOnContentClick": false,
            "transition": props.transition,
            "onAfterEnter": onAfterEnter,
            "onAfterLeave": onAfterLeave
          }, computedMenuProps.value), {
            default: () => [hasList && createVNode(VList, mergeProps({
              "ref": listRef,
              "selected": selectedValues.value,
              "selectStrategy": props.multiple ? "independent" : "single-independent",
              "onMousedown": (e) => e.preventDefault(),
              "onKeydown": onListKeydown,
              "onFocusin": onFocusin,
              "tabindex": "-1",
              "selectable": !!displayItems.value.length,
              "aria-live": "polite",
              "aria-labelledby": `${id.value}-label`,
              "aria-multiselectable": props.multiple,
              "color": props.itemColor ?? props.color
            }, listEvents, props.listProps), {
              default: () => [slots["prepend-item"]?.(), !displayItems.value.length && !props.hideNoData && (slots["no-data"]?.() ?? createVNode(VListItem, {
                "key": "no-data",
                "title": t(props.noDataText)
              }, null)), createVNode(VVirtualScroll, {
                "ref": vVirtualScrollRef,
                "renderless": true,
                "items": displayItems.value,
                "itemKey": "value"
              }, {
                default: (_ref3) => {
                  let {
                    item,
                    index,
                    itemRef
                  } = _ref3;
                  const camelizedProps = camelizeProps(item.props);
                  const itemProps = mergeProps(item.props, {
                    ref: itemRef,
                    key: item.value,
                    onClick: () => select(item, null),
                    "aria-posinset": index + 1,
                    "aria-setsize": displayItems.value.length
                  });
                  if (item.type === "divider") {
                    return slots.divider?.({
                      props: item.raw,
                      index
                    }) ?? createVNode(VDivider, mergeProps(item.props, {
                      "key": `divider-${index}`
                    }), null);
                  }
                  if (item.type === "subheader") {
                    return slots.subheader?.({
                      props: item.raw,
                      index
                    }) ?? createVNode(VListSubheader, mergeProps(item.props, {
                      "key": `subheader-${index}`
                    }), null);
                  }
                  return slots.item?.({
                    item,
                    index,
                    props: itemProps
                  }) ?? createVNode(VListItem, mergeProps(itemProps, {
                    "role": "option"
                  }), {
                    prepend: (_ref4) => {
                      let {
                        isSelected
                      } = _ref4;
                      return createElementVNode(Fragment, null, [props.multiple && !props.hideSelected ? createVNode(VCheckboxBtn, {
                        "key": item.value,
                        "modelValue": isSelected,
                        "ripple": false,
                        "tabindex": "-1",
                        "aria-hidden": true,
                        "onClick": (event) => event.preventDefault()
                      }, null) : void 0, camelizedProps.prependAvatar && createVNode(VAvatar, {
                        "image": camelizedProps.prependAvatar
                      }, null), camelizedProps.prependIcon && createVNode(VIcon, {
                        "icon": camelizedProps.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), slots["append-item"]?.()]
            })]
          }), model.value.map((item, index) => {
            function onChipClose(e) {
              e.stopPropagation();
              e.preventDefault();
              select(item, false);
            }
            const slotProps = mergeProps(VChip.filterProps(item.props), {
              "onClick:close": onChipClose,
              onKeydown(e) {
                if (e.key !== "Enter" && e.key !== " ") return;
                e.preventDefault();
                e.stopPropagation();
                onChipClose(e);
              },
              onMousedown(e) {
                e.preventDefault();
                e.stopPropagation();
              },
              modelValue: true,
              "onUpdate:modelValue": void 0
            });
            const hasSlot = hasChips ? !!slots.chip : !!slots.selection;
            const slotContent = hasSlot ? ensureValidVNode(hasChips ? slots.chip({
              item,
              index,
              props: slotProps
            }) : slots.selection({
              item,
              index
            })) : void 0;
            if (hasSlot && !slotContent) return void 0;
            return createElementVNode("div", {
              "key": item.value,
              "class": "v-select__selection"
            }, [hasChips ? !slots.chip ? createVNode(VChip, mergeProps({
              "key": "chip",
              "closable": closableChips.value,
              "size": "small",
              "text": item.title,
              "disabled": item.props.disabled
            }, slotProps), null) : createVNode(VDefaultsProvider, {
              "key": "chip-defaults",
              "defaults": {
                VChip: {
                  closable: closableChips.value,
                  size: "small",
                  text: item.title
                }
              }
            }, {
              default: () => [slotContent]
            }) : slotContent ?? createElementVNode("span", {
              "class": "v-select__selection-text"
            }, [item.title, props.multiple && index < model.value.length - 1 && createElementVNode("span", {
              "class": "v-select__selection-comma"
            }, [createTextVNode(",")])])]);
          })]);
        },
        "append-inner": function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createElementVNode(Fragment, null, [slots["append-inner"]?.(...args), props.menuIcon ? createVNode(VIcon, {
            "class": "v-select__menu-icon",
            "color": vTextFieldRef.value?.fieldIconColor,
            "icon": props.menuIcon,
            "aria-hidden": true
          }, null) : void 0, props.appendInnerIcon && createVNode(InputIcon, {
            "key": "append-icon",
            "name": "appendInner",
            "color": args[0].iconColor.value
          }, null)]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      menu,
      select
    }, vTextFieldRef);
  }
});
const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxHeight: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeAutocompleteProps(),
  ...omit(makeVInputProps(), ["direction"]),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    vIntersect: Intersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true,
    "update:rows": (rows) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      onIntersect
    } = useAutofocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
      return props.counter;
    });
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const scrollbarWidth = ref(0);
    const {
      platform
    } = useDisplay();
    const autocomplete = useAutocomplete(props);
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      if (autocomplete.isSuppressing.value) {
        autocomplete.update();
      }
      if (textareaRef.value !== (void 0).activeElement) {
        textareaRef.value?.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      const el = e.target;
      if (!props.modelModifiers?.trim) {
        model.value = el.value;
        return;
      }
      const value = el.value;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      model.value = value;
      nextTick(() => {
        let offset = 0;
        if (value.trimStart().length === el.value.length) {
          offset = value.length - el.value.length;
        }
        if (start != null) el.selectionStart = start - offset;
        if (end != null) el.selectionEnd = end - offset;
      });
    }
    const sizerRef = ref();
    const rows = ref(Number(props.rows));
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow) rows.value = Number(props.rows);
    });
    function calculateInputHeight() {
      nextTick(() => {
        if (!textareaRef.value) return;
        if (platform.value.firefox) {
          scrollbarWidth.value = 12;
          return;
        }
        const {
          offsetWidth,
          clientWidth
        } = textareaRef.value;
        scrollbarWidth.value = Math.max(0, offsetWidth - clientWidth);
      });
      if (!props.autoGrow) return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value) return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = props.maxHeight ? parseFloat(props.maxHeight) : parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height ?? 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxHeight, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    watch(rows, (val) => {
      emit("update:rows", val);
    });
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer?.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = {
        ...VField.filterProps(props),
        "onClick:clear": onClear
      };
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": [{
          "--v-textarea-max-height": props.maxHeight ? convertToUnit(props.maxHeight) : void 0,
          "--v-textarea-scroll-bar-width": convertToUnit(scrollbarWidth.value)
        }, props.style]
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid,
            hasDetails: hasDetails2
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "style": {
              "--v-textarea-control-height": controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "labelId": `${id.value}-label`,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "details": hasDetails2.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                },
                controlRef
              } = _ref3;
              return createElementVNode(Fragment, null, [props.prefix && createElementVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), withDirectives(createElementVNode("textarea", mergeProps({
                "ref": (val) => textareaRef.value = controlRef.value = val,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": autocomplete.fieldName.value,
                "autocomplete": autocomplete.fieldAutocomplete.value,
                "onFocus": onFocus,
                "onBlur": blur,
                "aria-labelledby": `${id.value}-label`
              }, slotProps, inputAttrs), null), [[Intersect, {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && withDirectives(createElementVNode("textarea", {
                "class": normalizeClass([fieldClass, "v-textarea__sizer"]),
                "id": `${slotProps.id}-sizer`,
                "onUpdate:modelValue": ($event) => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[vModelText, model.value]]), props.suffix && createElementVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => createElementVNode(Fragment, null, [slots.details?.(slotProps), hasCounter && createElementVNode(Fragment, null, [createElementVNode("span", null, null), createVNode(VCounter, {
          "active": props.persistentCounter || isFocused.value,
          "value": counterValue.value,
          "max": max.value,
          "disabled": props.disabled
        }, slots.counter)])]) : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const titleList = [
      {
        id: 0,
        name: "選択してください"
      },
      {
        id: 1,
        name: "サービスについて"
      },
      {
        id: 2,
        name: "連絡"
      },
      { id: 3, name: "その他" }
    ];
    const contactTitle = ref(0);
    const contactContent = ref("");
    const contactEmail = ref("");
    ref();
    const isConfirmShow = ref(false);
    function onConfirmOpen() {
      isConfirmShow.value = true;
    }
    function onSend() {
      isConfirmShow.value = false;
      contactTitle.value = 0;
      contactContent.value = "";
      contactEmail.value = "";
      navigateTo("/contact/complete");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(ContactConfirm, {
        "is-show": unref(isConfirmShow),
        "contact-title": unref(contactTitle),
        "contact-email": unref(contactEmail),
        "contact-content": unref(contactContent),
        onClose: ($event) => isConfirmShow.value = false,
        onSend
      }, null, _parent));
      _push(ssrRenderComponent(PageTitle, {
        titleName: "Contact",
        "content-paragraph": "''"
      }, null, _parent));
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><section${_scopeId}><h2${_scopeId}>お問い合わせ内容</h2></section>`);
            _push2(ssrRenderComponent(VRow, { style: { "flex-direction": "column", "margin": "30px auto" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "4",
                                md: "3",
                                class: "mt-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}>お問い合わせ内容</p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, "お問い合わせ内容")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "8",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(contactTitle),
                                      "onUpdate:modelValue": ($event) => isRef(contactTitle) ? contactTitle.value = $event : null,
                                      items: titleList,
                                      "item-value": "id",
                                      "item-title": "name",
                                      label: "お問い合わせ内容",
                                      variant: "outlined",
                                      color: unref(contactTitle) !== 0 ? "success" : "primary",
                                      required: "",
                                      rules: [
                                        (v) => v !== 0 || "お問い合わせ内容を選択してください。"
                                      ]
                                    }, {
                                      "append-inner": withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VFadeTransition, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, {
                                                  style: unref(contactTitle) !== 0 ? null : { display: "none" },
                                                  color: "success"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-check`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-check")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  withDirectives(createVNode(VIcon, { color: "success" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check")
                                                    ]),
                                                    _: 1
                                                  }, 512), [
                                                    [vShow, unref(contactTitle) !== 0]
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VFadeTransition, null, {
                                              default: withCtx(() => [
                                                withDirectives(createVNode(VIcon, { color: "success" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check")
                                                  ]),
                                                  _: 1
                                                }, 512), [
                                                  [vShow, unref(contactTitle) !== 0]
                                                ])
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
                                      createVNode(VSelect, {
                                        modelValue: unref(contactTitle),
                                        "onUpdate:modelValue": ($event) => isRef(contactTitle) ? contactTitle.value = $event : null,
                                        items: titleList,
                                        "item-value": "id",
                                        "item-title": "name",
                                        label: "お問い合わせ内容",
                                        variant: "outlined",
                                        color: unref(contactTitle) !== 0 ? "success" : "primary",
                                        required: "",
                                        rules: [
                                          (v) => v !== 0 || "お問い合わせ内容を選択してください。"
                                        ]
                                      }, {
                                        "append-inner": withCtx(() => [
                                          createVNode(VFadeTransition, null, {
                                            default: withCtx(() => [
                                              withDirectives(createVNode(VIcon, { color: "success" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check")
                                                ]),
                                                _: 1
                                              }, 512), [
                                                [vShow, unref(contactTitle) !== 0]
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "4",
                                  md: "3",
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, "お問い合わせ内容")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "8",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(contactTitle),
                                      "onUpdate:modelValue": ($event) => isRef(contactTitle) ? contactTitle.value = $event : null,
                                      items: titleList,
                                      "item-value": "id",
                                      "item-title": "name",
                                      label: "お問い合わせ内容",
                                      variant: "outlined",
                                      color: unref(contactTitle) !== 0 ? "success" : "primary",
                                      required: "",
                                      rules: [
                                        (v) => v !== 0 || "お問い合わせ内容を選択してください。"
                                      ]
                                    }, {
                                      "append-inner": withCtx(() => [
                                        createVNode(VFadeTransition, null, {
                                          default: withCtx(() => [
                                            withDirectives(createVNode(VIcon, { color: "success" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check")
                                              ]),
                                              _: 1
                                            }, 512), [
                                              [vShow, unref(contactTitle) !== 0]
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
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
                              createVNode(VCol, {
                                cols: "4",
                                md: "3",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", null, "お問い合わせ内容")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "8",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(contactTitle),
                                    "onUpdate:modelValue": ($event) => isRef(contactTitle) ? contactTitle.value = $event : null,
                                    items: titleList,
                                    "item-value": "id",
                                    "item-title": "name",
                                    label: "お問い合わせ内容",
                                    variant: "outlined",
                                    color: unref(contactTitle) !== 0 ? "success" : "primary",
                                    required: "",
                                    rules: [
                                      (v) => v !== 0 || "お問い合わせ内容を選択してください。"
                                    ]
                                  }, {
                                    "append-inner": withCtx(() => [
                                      createVNode(VFadeTransition, null, {
                                        default: withCtx(() => [
                                          withDirectives(createVNode(VIcon, { color: "success" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check")
                                            ]),
                                            _: 1
                                          }, 512), [
                                            [vShow, unref(contactTitle) !== 0]
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
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
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "4",
                                md: "3",
                                class: "mt-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}>メールアドレス</p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, "メールアドレス")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "8",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(contactEmail),
                                      "onUpdate:modelValue": ($event) => isRef(contactEmail) ? contactEmail.value = $event : null,
                                      label: "メールアドレス",
                                      type: "email",
                                      color: unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail)) ? "success" : "primary",
                                      placeholder: "example@sample.com",
                                      required: "",
                                      variant: "outlined",
                                      rules: [
                                        (v) => /.+@.+\..+/.test(v) || "有効なメールアドレスを入力してください。"
                                      ]
                                    }, {
                                      "append-inner": withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VFadeTransition, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, {
                                                  style: unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail)) ? null : { display: "none" },
                                                  color: "success"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-check`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-check")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  withDirectives(createVNode(VIcon, { color: "success" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check")
                                                    ]),
                                                    _: 1
                                                  }, 512), [
                                                    [
                                                      vShow,
                                                      unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail))
                                                    ]
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VFadeTransition, null, {
                                              default: withCtx(() => [
                                                withDirectives(createVNode(VIcon, { color: "success" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check")
                                                  ]),
                                                  _: 1
                                                }, 512), [
                                                  [
                                                    vShow,
                                                    unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail))
                                                  ]
                                                ])
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
                                      createVNode(VTextField, {
                                        modelValue: unref(contactEmail),
                                        "onUpdate:modelValue": ($event) => isRef(contactEmail) ? contactEmail.value = $event : null,
                                        label: "メールアドレス",
                                        type: "email",
                                        color: unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail)) ? "success" : "primary",
                                        placeholder: "example@sample.com",
                                        required: "",
                                        variant: "outlined",
                                        rules: [
                                          (v) => /.+@.+\..+/.test(v) || "有効なメールアドレスを入力してください。"
                                        ]
                                      }, {
                                        "append-inner": withCtx(() => [
                                          createVNode(VFadeTransition, null, {
                                            default: withCtx(() => [
                                              withDirectives(createVNode(VIcon, { color: "success" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check")
                                                ]),
                                                _: 1
                                              }, 512), [
                                                [
                                                  vShow,
                                                  unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail))
                                                ]
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "4",
                                  md: "3",
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, "メールアドレス")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "8",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(contactEmail),
                                      "onUpdate:modelValue": ($event) => isRef(contactEmail) ? contactEmail.value = $event : null,
                                      label: "メールアドレス",
                                      type: "email",
                                      color: unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail)) ? "success" : "primary",
                                      placeholder: "example@sample.com",
                                      required: "",
                                      variant: "outlined",
                                      rules: [
                                        (v) => /.+@.+\..+/.test(v) || "有効なメールアドレスを入力してください。"
                                      ]
                                    }, {
                                      "append-inner": withCtx(() => [
                                        createVNode(VFadeTransition, null, {
                                          default: withCtx(() => [
                                            withDirectives(createVNode(VIcon, { color: "success" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check")
                                              ]),
                                              _: 1
                                            }, 512), [
                                              [
                                                vShow,
                                                unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail))
                                              ]
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
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
                              createVNode(VCol, {
                                cols: "4",
                                md: "3",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", null, "メールアドレス")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "8",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(contactEmail),
                                    "onUpdate:modelValue": ($event) => isRef(contactEmail) ? contactEmail.value = $event : null,
                                    label: "メールアドレス",
                                    type: "email",
                                    color: unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail)) ? "success" : "primary",
                                    placeholder: "example@sample.com",
                                    required: "",
                                    variant: "outlined",
                                    rules: [
                                      (v) => /.+@.+\..+/.test(v) || "有効なメールアドレスを入力してください。"
                                    ]
                                  }, {
                                    "append-inner": withCtx(() => [
                                      createVNode(VFadeTransition, null, {
                                        default: withCtx(() => [
                                          withDirectives(createVNode(VIcon, { color: "success" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check")
                                            ]),
                                            _: 1
                                          }, 512), [
                                            [
                                              vShow,
                                              unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail))
                                            ]
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
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
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "4",
                                md: "3",
                                class: "mt-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}>お問い合わせ内容</p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, "お問い合わせ内容")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "8",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextarea, {
                                      modelValue: unref(contactContent),
                                      "onUpdate:modelValue": ($event) => isRef(contactContent) ? contactContent.value = $event : null,
                                      label: "お問い合わせ内容",
                                      type: "text",
                                      color: unref(contactContent).length > 0 ? "success" : "primary",
                                      placeholder: "お問い合わせ内容を入力してください",
                                      required: "",
                                      variant: "outlined",
                                      rules: [
                                        (v) => v.length > 0 || "お問い合わせ内容を入力してください。"
                                      ]
                                    }, {
                                      "append-inner": withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VFadeTransition, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, {
                                                  style: unref(contactContent).length > 0 ? null : { display: "none" },
                                                  color: "success"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-check`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-check")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  withDirectives(createVNode(VIcon, { color: "success" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check")
                                                    ]),
                                                    _: 1
                                                  }, 512), [
                                                    [vShow, unref(contactContent).length > 0]
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VFadeTransition, null, {
                                              default: withCtx(() => [
                                                withDirectives(createVNode(VIcon, { color: "success" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check")
                                                  ]),
                                                  _: 1
                                                }, 512), [
                                                  [vShow, unref(contactContent).length > 0]
                                                ])
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
                                      createVNode(VTextarea, {
                                        modelValue: unref(contactContent),
                                        "onUpdate:modelValue": ($event) => isRef(contactContent) ? contactContent.value = $event : null,
                                        label: "お問い合わせ内容",
                                        type: "text",
                                        color: unref(contactContent).length > 0 ? "success" : "primary",
                                        placeholder: "お問い合わせ内容を入力してください",
                                        required: "",
                                        variant: "outlined",
                                        rules: [
                                          (v) => v.length > 0 || "お問い合わせ内容を入力してください。"
                                        ]
                                      }, {
                                        "append-inner": withCtx(() => [
                                          createVNode(VFadeTransition, null, {
                                            default: withCtx(() => [
                                              withDirectives(createVNode(VIcon, { color: "success" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check")
                                                ]),
                                                _: 1
                                              }, 512), [
                                                [vShow, unref(contactContent).length > 0]
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "4",
                                  md: "3",
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, "お問い合わせ内容")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "8",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, {
                                      modelValue: unref(contactContent),
                                      "onUpdate:modelValue": ($event) => isRef(contactContent) ? contactContent.value = $event : null,
                                      label: "お問い合わせ内容",
                                      type: "text",
                                      color: unref(contactContent).length > 0 ? "success" : "primary",
                                      placeholder: "お問い合わせ内容を入力してください",
                                      required: "",
                                      variant: "outlined",
                                      rules: [
                                        (v) => v.length > 0 || "お問い合わせ内容を入力してください。"
                                      ]
                                    }, {
                                      "append-inner": withCtx(() => [
                                        createVNode(VFadeTransition, null, {
                                          default: withCtx(() => [
                                            withDirectives(createVNode(VIcon, { color: "success" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check")
                                              ]),
                                              _: 1
                                            }, 512), [
                                              [vShow, unref(contactContent).length > 0]
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
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
                              createVNode(VCol, {
                                cols: "4",
                                md: "3",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", null, "お問い合わせ内容")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "8",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextarea, {
                                    modelValue: unref(contactContent),
                                    "onUpdate:modelValue": ($event) => isRef(contactContent) ? contactContent.value = $event : null,
                                    label: "お問い合わせ内容",
                                    type: "text",
                                    color: unref(contactContent).length > 0 ? "success" : "primary",
                                    placeholder: "お問い合わせ内容を入力してください",
                                    required: "",
                                    variant: "outlined",
                                    rules: [
                                      (v) => v.length > 0 || "お問い合わせ内容を入力してください。"
                                    ]
                                  }, {
                                    "append-inner": withCtx(() => [
                                      createVNode(VFadeTransition, null, {
                                        default: withCtx(() => [
                                          withDirectives(createVNode(VIcon, { color: "success" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check")
                                            ]),
                                            _: 1
                                          }, 512), [
                                            [vShow, unref(contactContent).length > 0]
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
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
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "4",
                                md: "3",
                                class: "mt-4"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "8",
                                md: "9",
                                style: { "display": "flex", "justify-content": "center", "align-items": "center" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      variant: "outlined",
                                      width: "w-full",
                                      "append-icon": "mdi-send",
                                      onClick: onConfirmOpen
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`送信`);
                                        } else {
                                          return [
                                            createTextVNode("送信")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        variant: "outlined",
                                        width: "w-full",
                                        "append-icon": "mdi-send",
                                        onClick: withModifiers(onConfirmOpen, ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("送信")
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
                                createVNode(VCol, {
                                  cols: "4",
                                  md: "3",
                                  class: "mt-4"
                                }),
                                createVNode(VCol, {
                                  cols: "8",
                                  md: "9",
                                  style: { "display": "flex", "justify-content": "center", "align-items": "center" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      variant: "outlined",
                                      width: "w-full",
                                      "append-icon": "mdi-send",
                                      onClick: withModifiers(onConfirmOpen, ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("送信")
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "4",
                                md: "3",
                                class: "mt-4"
                              }),
                              createVNode(VCol, {
                                cols: "8",
                                md: "9",
                                style: { "display": "flex", "justify-content": "center", "align-items": "center" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    variant: "outlined",
                                    width: "w-full",
                                    "append-icon": "mdi-send",
                                    onClick: withModifiers(onConfirmOpen, ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("送信")
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
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "4",
                              md: "3",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "お問い合わせ内容")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "8",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(contactTitle),
                                  "onUpdate:modelValue": ($event) => isRef(contactTitle) ? contactTitle.value = $event : null,
                                  items: titleList,
                                  "item-value": "id",
                                  "item-title": "name",
                                  label: "お問い合わせ内容",
                                  variant: "outlined",
                                  color: unref(contactTitle) !== 0 ? "success" : "primary",
                                  required: "",
                                  rules: [
                                    (v) => v !== 0 || "お問い合わせ内容を選択してください。"
                                  ]
                                }, {
                                  "append-inner": withCtx(() => [
                                    createVNode(VFadeTransition, null, {
                                      default: withCtx(() => [
                                        withDirectives(createVNode(VIcon, { color: "success" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        }, 512), [
                                          [vShow, unref(contactTitle) !== 0]
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "4",
                              md: "3",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "メールアドレス")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "8",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(contactEmail),
                                  "onUpdate:modelValue": ($event) => isRef(contactEmail) ? contactEmail.value = $event : null,
                                  label: "メールアドレス",
                                  type: "email",
                                  color: unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail)) ? "success" : "primary",
                                  placeholder: "example@sample.com",
                                  required: "",
                                  variant: "outlined",
                                  rules: [
                                    (v) => /.+@.+\..+/.test(v) || "有効なメールアドレスを入力してください。"
                                  ]
                                }, {
                                  "append-inner": withCtx(() => [
                                    createVNode(VFadeTransition, null, {
                                      default: withCtx(() => [
                                        withDirectives(createVNode(VIcon, { color: "success" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        }, 512), [
                                          [
                                            vShow,
                                            unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail))
                                          ]
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "4",
                              md: "3",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "お問い合わせ内容")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "8",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextarea, {
                                  modelValue: unref(contactContent),
                                  "onUpdate:modelValue": ($event) => isRef(contactContent) ? contactContent.value = $event : null,
                                  label: "お問い合わせ内容",
                                  type: "text",
                                  color: unref(contactContent).length > 0 ? "success" : "primary",
                                  placeholder: "お問い合わせ内容を入力してください",
                                  required: "",
                                  variant: "outlined",
                                  rules: [
                                    (v) => v.length > 0 || "お問い合わせ内容を入力してください。"
                                  ]
                                }, {
                                  "append-inner": withCtx(() => [
                                    createVNode(VFadeTransition, null, {
                                      default: withCtx(() => [
                                        withDirectives(createVNode(VIcon, { color: "success" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        }, 512), [
                                          [vShow, unref(contactContent).length > 0]
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "4",
                              md: "3",
                              class: "mt-4"
                            }),
                            createVNode(VCol, {
                              cols: "8",
                              md: "9",
                              style: { "display": "flex", "justify-content": "center", "align-items": "center" }
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "outlined",
                                  width: "w-full",
                                  "append-icon": "mdi-send",
                                  onClick: withModifiers(onConfirmOpen, ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("送信")
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("section", null, [
                  createVNode("h2", null, "お問い合わせ内容")
                ]),
                createVNode(VRow, { style: { "flex-direction": "column", "margin": "30px auto" } }, {
                  default: withCtx(() => [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "4",
                              md: "3",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "お問い合わせ内容")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "8",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(contactTitle),
                                  "onUpdate:modelValue": ($event) => isRef(contactTitle) ? contactTitle.value = $event : null,
                                  items: titleList,
                                  "item-value": "id",
                                  "item-title": "name",
                                  label: "お問い合わせ内容",
                                  variant: "outlined",
                                  color: unref(contactTitle) !== 0 ? "success" : "primary",
                                  required: "",
                                  rules: [
                                    (v) => v !== 0 || "お問い合わせ内容を選択してください。"
                                  ]
                                }, {
                                  "append-inner": withCtx(() => [
                                    createVNode(VFadeTransition, null, {
                                      default: withCtx(() => [
                                        withDirectives(createVNode(VIcon, { color: "success" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        }, 512), [
                                          [vShow, unref(contactTitle) !== 0]
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "4",
                              md: "3",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "メールアドレス")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "8",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(contactEmail),
                                  "onUpdate:modelValue": ($event) => isRef(contactEmail) ? contactEmail.value = $event : null,
                                  label: "メールアドレス",
                                  type: "email",
                                  color: unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail)) ? "success" : "primary",
                                  placeholder: "example@sample.com",
                                  required: "",
                                  variant: "outlined",
                                  rules: [
                                    (v) => /.+@.+\..+/.test(v) || "有効なメールアドレスを入力してください。"
                                  ]
                                }, {
                                  "append-inner": withCtx(() => [
                                    createVNode(VFadeTransition, null, {
                                      default: withCtx(() => [
                                        withDirectives(createVNode(VIcon, { color: "success" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        }, 512), [
                                          [
                                            vShow,
                                            unref(contactEmail).length > 0 && /.+@.+\..+/.test(unref(contactEmail))
                                          ]
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "4",
                              md: "3",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "お問い合わせ内容")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "8",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextarea, {
                                  modelValue: unref(contactContent),
                                  "onUpdate:modelValue": ($event) => isRef(contactContent) ? contactContent.value = $event : null,
                                  label: "お問い合わせ内容",
                                  type: "text",
                                  color: unref(contactContent).length > 0 ? "success" : "primary",
                                  placeholder: "お問い合わせ内容を入力してください",
                                  required: "",
                                  variant: "outlined",
                                  rules: [
                                    (v) => v.length > 0 || "お問い合わせ内容を入力してください。"
                                  ]
                                }, {
                                  "append-inner": withCtx(() => [
                                    createVNode(VFadeTransition, null, {
                                      default: withCtx(() => [
                                        withDirectives(createVNode(VIcon, { color: "success" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        }, 512), [
                                          [vShow, unref(contactContent).length > 0]
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "color", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "4",
                              md: "3",
                              class: "mt-4"
                            }),
                            createVNode(VCol, {
                              cols: "8",
                              md: "9",
                              style: { "display": "flex", "justify-content": "center", "align-items": "center" }
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "outlined",
                                  width: "w-full",
                                  "append-icon": "mdi-send",
                                  onClick: withModifiers(onConfirmOpen, ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("送信")
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
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CFSzi1ry.mjs.map
