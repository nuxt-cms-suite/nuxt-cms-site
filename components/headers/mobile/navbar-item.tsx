import type { PropType } from "vue";
import type { NavbarLink } from "../navbar";

export default defineComponent({
  name: "DekstopNavbarItem",
  props: {
    item: {
      type: Object as PropType<NavbarLink>,
      required: true,
    },
  },
  setup() {
    return {};
  },
  render() {
    return (
      <a
        href={this.$props.item.href}
        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        {this.$props.item.text}
      </a>
    );
  },
});
