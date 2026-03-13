import { createVNode, normalizeStyle, normalizeClass } from 'vue';
import { u as useDimension, c as makeTagProps, k as makeDimensionProps } from './VRow-DYQSMIMZ.mjs';
import { g as genericComponent, h as useRtl, m as useRender, q as propsFactory, t as makeComponentProps } from './server.mjs';

const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class]),
      "style": normalizeStyle([dimensionStyles.value, props.style])
    }, slots));
    return {};
  }
});

export { VContainer as V };
//# sourceMappingURL=VContainer-GiolSsVp.mjs.map
