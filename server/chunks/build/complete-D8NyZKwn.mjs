import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { P as PageTitle } from './PageTitle-DXiVmpp1.mjs';
import { V as VRow, a as VCol, b as VIcon } from './VRow-DYQSMIMZ.mjs';
import { V as VBtn } from './VBtn-DNuBi1SF.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "complete",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="contact-complete">`);
      _push(ssrRenderComponent(PageTitle, {
        titleName: "Contact Complete",
        "content-paragraph": "お問い合わせが完了しました。"
      }, null, _parent));
      _push(`</div><div class="my-5">`);
      _push(ssrRenderComponent(VRow, { style: { "flex-direction": "column", "margin": "30px auto" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>お問い合わせありがとうございました。</p><p${_scopeId2}>内容を確認の上、担当者よりご連絡させていただきます。</p>`);
                } else {
                  return [
                    createVNode("p", null, "お問い合わせありがとうございました。"),
                    createVNode("p", null, "内容を確認の上、担当者よりご連絡させていただきます。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { class: "text-center" }, {
                default: withCtx(() => [
                  createVNode("p", null, "お問い合わせありがとうございました。"),
                  createVNode("p", null, "内容を確認の上、担当者よりご連絡させていただきます。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => _ctx.$router.push("/"),
        color: "primary",
        variant: "outlined",
        class: "mx-auto d-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { left: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-home`);
                } else {
                  return [
                    createTextVNode("mdi-home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` ホームへ `);
          } else {
            return [
              createVNode(VIcon, { left: "" }, {
                default: withCtx(() => [
                  createTextVNode("mdi-home")
                ]),
                _: 1
              }),
              createTextVNode(" ホームへ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/complete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=complete-D8NyZKwn.mjs.map
