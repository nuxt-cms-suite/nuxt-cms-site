import { NuxtLink } from "#components";

export default defineComponent({
  name: "NavbarLogo",
  props: {
    logoText: {
      type: String,
      required: true,
      default: "",
    },
    logoImgURL: {
      type: String,
      required: true,
      default:
        "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
    },
  },
  render() {
    return (
      <div class="flex lg:flex-1">
        <NuxtLink
          href="#"
          class="-m-1.5 p-1.5"
          v-slots={{
            default: () => (
              <>
                <span class="sr-only">{this.logoText}</span>
                <img class="h-8 w-auto" src={this.logoImgURL} alt="" />
              </>
            ),
          }}
        />
      </div>
    );
  },
});
