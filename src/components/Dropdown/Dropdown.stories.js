import React from "react";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

//👇 We're importing the necessary stories from DropdownItem
import { Default, Disabled } from "./DropdownItem.stories";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const OneItem = Template.bind({});
OneItem.args = {
  title: "Dropdown with one item",
  children: (
    <>
      <Default {...Default.args} />
    </>
  ),
};

export const ManyItems = Template.bind({});
ManyItems.args = {
  title: "Dropdown with many items",
  children: (
    <>
      <Default {...Default.args} />
      <Default {...Default.args} />
      <Disabled {...Disabled.args} />
    </>
  ),
};
