/* eslint-disable vue/require-default-prop */
/* eslint-disable @typescript-eslint/no-unused-vars */
export default defineComponent({
  name: "NavbarMobileMenuTrigger",
  props: {
    isOpen: {
      type: Boolean,
    },
    mode: {
      type: String as PropType<"Dekstop" | "Mobile">,
    },
  },
  emits: ["update:isOpen"],
  setup(props, { emit }) {
    const { isOpen } = toRefs(props);
    const screenReaderText = computed(() => {
      return isOpen ? "Close Menu" : "Open Main Menu";
    });

    return {
      screenReaderText,
    };
  },
  render() {
    const openIconTrigger = () => (
      <svg
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    );

    const closeIconTrigger = () => (
      <svg
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );

    return (
      <button
        onClick={(e) => this.$emit("update:isOpen", !this.isOpen)}
        type="button"
        class={[
          "transition-all ease-in-out duration-150",
          {
            "-m-2.5 rounded-md p-2.5 text-gray-700 inline-flex items-center justify-center":
              this.mode === "Dekstop",
          },
          { "-m-2.5 rounded-md p-2.5 text-gray-700": this.mode === "Mobile" },
        ]}
      >
        <span class="sr-only">{this.screenReaderText}</span>
        {this.isOpen ? closeIconTrigger() : openIconTrigger()}
      </button>
    );
  },
});
