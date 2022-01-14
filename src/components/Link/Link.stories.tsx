import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Link, { LinkProps } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium size link",
  href: "https://www.rodekors.no/",
  size: "medium",
  openInNewTab: true,
};

export const Small = Template.bind({});
Small.args = {
  ...Medium.args,
  children: "Small size link",
  size: "small",
};
