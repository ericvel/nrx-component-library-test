import React from "react";

import EventCard, { EventCardProps } from "components/EventCard";

export interface EventCardListProps {
  loading: boolean;
  events: EventCardProps[];
}

export default function EventCardList({ loading, events }: EventCardListProps) {
  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (events.length === 0) {
    return <div className="list-items">empty</div>;
  }
  return (
    <div className="list-items">
      {events.map((event) => (
        <EventCard
          key={event.event.id}
          event={event.event}
          onPressAttend={() => {
            return alert("Sup");
          }}
          {...events}
        />
      ))}
    </div>
  );
}
