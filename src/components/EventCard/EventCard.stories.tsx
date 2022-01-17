import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import EventCard, { Event, EventCardProps } from "./EventCard";

export default {
  title: "Components/EventCard",
  component: EventCard,
} as Meta;

const Template: Story<EventCardProps> = (args) => <EventCard {...args} />;

const DummyEvent: Event = {
  id: "5",
  title: "Pizzakveld Hjelpekorpset",
  category: "Arrangement - Sosialt",
  startDate: new Date("2021-06-04T09:00:00"),
  endDate: new Date("2021-06-04T16:00:00"),
  location: "",
  participationStatus: "NOT_ANSWERED",
};

export const NotAnswered = Template.bind({});
NotAnswered.args = {
  event: DummyEvent,
};

export const IsNotParticipating = Template.bind({});
IsNotParticipating.args = {
  event: { ...DummyEvent, participationStatus: "IS_NOT_PARTICIPATING" },
};

export const IsParticipating = Template.bind({});
IsParticipating.args = {
  event: { ...DummyEvent, participationStatus: "IS_PARTICIPATING" },
};
