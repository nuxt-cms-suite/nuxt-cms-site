/* eslint-disable array-callback-return */
/* eslint-disable vue/one-component-per-file */
/* eslint-disable prettier/prettier */
 
import type { PropType, VNode } from "vue";
import NavbarDekstopItem from "./dekstop/navbar-item";
import MobileNavbarItem from "./mobile/navbar-item";
import NavbarLogo from "./navbar-logo";
import NavbarDekstopChild from "./dekstop/navbar-child";
import NavbarDekstopChildTrigger from "./dekstop/navbar-child-trigger";
import NavbarDekstopChildItem from "./dekstop/navbar-child-item";
import NavbarMenuTrigger from "./mobile/navbar-menu-trigger";

/* eslint-disable no-use-before-define */
export type NavbarLink = {
  text: string;
  icon: string;
  href: string;
  children?: NavbarChild;
};
export type NavbarChild = {
  items: NavbarChildItem[];
  header?: VNode | string;
  footer?: VNode | string;
};
export type NavbarChildItem = {
  icon: VNode;
  title: string;
  subTitle: string;
};
export type NavbarProps = {
  links: NavbarLink[];
};

const NavbarDekstopItems = defineComponent({
  name: "NavbarDekstopItems",
  props: {
    linkItems: {
      type: Object as PropType<NavbarProps["links"]>,
      required: true,
      default: [] as NavbarProps["links"],
    }
  },
  render(){

    const hasChildren = (itemID: number) => typeof this.$props.linkItems[itemID].children !== "undefined";

    return this.$props.linkItems.map((linkItem, index) => {
      if(hasChildren(index)) {
        return <NavbarDekstopChild children={this.$props.linkItems[index].children} v-slots={{
          trigger: () => (
            <NavbarDekstopChildTrigger text={linkItem.text} />
          ),
          child: (props: NavbarChild) => {
            return props.items.map((childItem) => {
              return <NavbarDekstopChildItem linkItem={childItem}/>
            })
          }
        }}/>
      }
      return <NavbarDekstopItem item={linkItem}/>
    })
  }
})

const RenderMobileNavbarItems = defineComponent({
  name: "RenderMobileNavbarItems",
  props: {
    linkItems: {
      type: Object as PropType<NavbarProps["links"]>,
      required: true,
      default: [] as NavbarProps["links"],
    }
  },
  render(){
    const hasChildren = (itemID: number) => typeof this.$props.linkItems[itemID].children !== "undefined";

    return this.$props.linkItems.map((linkItem, index) => {
      if(hasChildren(index)) {
        return;
      }
      return <MobileNavbarItem item={linkItem}/>
    })
  }
})

export default defineComponent({
  name: "NavbarHeaderComponent",
  props: {
    links: {
      type: Object as PropType<NavbarProps["links"]>,
      required: true,
      default: [] as NavbarProps["links"],
    },
  },
  setup(){
    const state = reactive({
      isOpen: false,
    });
    return {
      state
    }
  },
  render() {
    return (
      <header class="bg-white font-roboto-condensed">
        <nav
          class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <NavbarLogo logoText="MyAwesomeSite" logoImgURL={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"}/>
          <div class={["flex lg:hidden", {
            "z-20": this.state.isOpen
          }]}>
            <NavbarMenuTrigger v-model:isOpen={this.state.isOpen} mode="Dekstop"/>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <NavbarDekstopItems linkItems={this.links}/>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        
        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        <div class={["lg:hidden",  {
            "hidden": !this.state.isOpen
          }]} role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div class={["fixed inset-0 z-10 transition-all ease-in-out duration-150", {
            "backdrop-blur-sm": this.state.isOpen
          }]}>
              {/* <NavbarMenuTrigger v-model:isOpen={this.state.isOpen} class={["fixed inset-y-0 right-0"]}/> */}
          </div>
          <div class={["fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"]}>
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <NavbarMenuTrigger v-model:isOpen={this.state.isOpen} mode="Mobile"/>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <div class="-mx-3">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Product
                      {/* <!--
                        Expand/collapse icon, toggle classes based on menu open state.

                        Open: "rotate-180", Closed: ""
                      --> */}
                      <svg
                        class="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                    <div class="mt-2 space-y-2" id="disclosure-1">
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Analytics
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Engagement
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Security
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Integrations
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Automations
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Watch demo
                      </a>
                      <a
                        href="#"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Contact sales
                      </a>
                    </div>
                  </div>
                  <RenderMobileNavbarItems linkItems={this.links}/>
                </div>
                <div class="py-6">
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  },
});
