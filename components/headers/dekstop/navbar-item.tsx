import type { PropType } from "vue";
import type { NavbarLink } from "../navbar";
import { NuxtLink } from "#components";

export default defineComponent({
  name: "NavbarDekstopItem",
  props: {
    item: {
      type: Object as PropType<NavbarLink>,
      required: true,
    },
  },
  render() {
    return (
      <NuxtLink
        class={["text-sm font-semibold leading-6 text-gray-900"]}
        to={this.$props.item.href}
        v-slots={{
          default: () => this.$props.item.text,
        }}
      />
    );
  },
});
