/* eslint-disable vue/require-default-prop */
import type { NavbarChild } from "../navbar";

export default defineComponent({
  name: "NavbarDekstopChild",
  props: {
    children: Object as PropType<NavbarChild>,
  },
  render() {
    return (
      <div class="relative">
        {this.$slots.trigger?.({})}
        <div class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div class="p-4">
            {this.$slots.child?.({
              items: this.children?.items,
            })}
          </div>
        </div>
      </div>
    );
  },
});
