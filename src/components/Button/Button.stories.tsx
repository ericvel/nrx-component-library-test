import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
  size: "medium",
  disabled: false,
  onClick: () => {
    alert("Button was clicked.");
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
  children: "Secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  variant: "tertiary",
  children: "Tertiary",
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  variant: "danger",
  children: "Danger",
};
