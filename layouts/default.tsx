import Navbar, { type NavbarProps } from "~/components/headers/navbar";

// for get the power of typescriptp development experience, please use this approach as using `defineComponent` method instead using vue legaacy `<template></template>`
export default defineComponent({
  name: "DefaultLayout",

  setup() {
    // this is base data modelling for navbar at the top of page
    const links: NavbarProps["links"] = [
      {
        href: "#",
        icon: "",
        text: "Product",
        children: {
          items: [
            {
              title: "Analytics",
              subTitle: "Get a better understanding of your traffic",
            },
            {
              title: "Engagements",
              subTitle: "Speak directly to your customers",
            },
            {
              title: "Security",
              subTitle: "Your customers’ data will be safe and secure",
            },
            {
              title: "Integrations",
              subTitle: "Connect with third-party tools",
            },
            {
              title: "Automations",
              subTitle: "Build strategic funnels that will convert",
            },
          ],
        },
      },
      {
        href: "#",
        icon: "",
        text: "Features",
      },
      {
        href: "#",
        icon: "",
        text: "Marketplace",
      },
      {
        href: "#",
        icon: "",
        text: "Company",
      },
      {
        href: "#",
        icon: "",
        text: "Services",
      },
      {
        href: "#",
        icon: "",
        text: "About",
      },
      {
        href: "#",
        icon: "",
        text: "Contact",
      },
    ];
    return { links };
  },
  render() {
    const { links } = this;
    return (
      <div
        id="nuxt_default_layout"
        class={["subpixel-antialiased font-roboto-condensed"]}
      >
        <Navbar links={links} />
        {this.$slots.default?.()}
      </div>
    );
  },
});
