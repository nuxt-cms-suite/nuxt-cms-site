/* eslint-disable vue/require-default-prop */
import type { PropType } from "vue";
import type { NavbarChildItem } from "../navbar";
import { NuxtLink } from "#components";

export default defineComponent({
  name: "NavbarDekstopChildItem",
  props: {
    linkItem: Object as PropType<NavbarChildItem>,
  },
  render() {
    return (
      <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          {this.linkItem?.icon}
        </div>
        <div class="flex-auto">
          <NuxtLink
            to={"/"}
            class="block font-semibold text-gray-900"
            v-slots={{
              default: () => {
                return (
                  <div>
                    {this.linkItem?.title}
                    <span class="absolute inset-0"></span>
                  </div>
                );
              },
            }}
          />
          <p class="mt-1 text-gray-600">{this.linkItem?.subTitle}</p>
        </div>
      </div>
    );
  },
});
