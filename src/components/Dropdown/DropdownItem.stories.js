import React from "react";

import DropdownItem from "./DropdownItem";

export default {
  title: "DropdownItem",
  component: DropdownItem,
};

const Template = (args) => <DropdownItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  children: "Default option",
  onClick: () => {
    alert("Default was clicked");
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Disabled option",
};
