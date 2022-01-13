import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import EventCard, { EventCardProps } from "./EventCard";

export default {
  title: "Components/EventCard",
  component: EventCard,
} as Meta;

const Template: Story<EventCardProps> = (args) => <EventCard {...args} />;

export const NotAnswered = Template.bind({});
NotAnswered.args = {
  event: {
    title: "Pizzakveld Hjelpekorpset",
    category: "Arrangement - Sosialt",
    startDate: new Date("2021-06-04T09:00:00"),
    endDate: new Date("2021-06-04T16:00:00"),
    location: "",
    participationStatus: 0,
  },
};

export const NotParticipating = Template.bind({});
NotParticipating.args = {
  event: {
    title: "Pizzakveld Hjelpekorpset",
    category: "Arrangement - Sosialt",
    startDate: new Date("2021-06-04T09:00:00"),
    endDate: new Date("2021-06-04T16:00:00"),
    location: "",
    participationStatus: 1,
  },
};

export const IsParticipating = Template.bind({});
IsParticipating.args = {
  event: {
    title: "Pizzakveld Hjelpekorpset",
    category: "Arrangement - Sosialt",
    startDate: new Date("2021-06-04T09:00:00"),
    endDate: new Date("2021-06-04T16:00:00"),
    location: "",
    participationStatus: 2,
  },
};
