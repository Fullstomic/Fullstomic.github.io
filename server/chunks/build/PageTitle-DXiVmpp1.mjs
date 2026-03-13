import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageTitle",
  __ssrInlineRender: true,
  props: {
    titleName: {},
    contentParagraph: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pageTitle" }, _attrs))} data-v-b7b3fcd9><h1 data-v-b7b3fcd9>${ssrInterpolate(props.titleName)}</h1></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page-Content/PageTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageTitle = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-b7b3fcd9"]]), { __name: "PageContentPageTitle" });

export { PageTitle as P };
//# sourceMappingURL=PageTitle-DXiVmpp1.mjs.map
