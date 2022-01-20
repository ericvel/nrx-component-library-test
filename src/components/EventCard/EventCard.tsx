import React from "react";

export interface Event {
  id: string;
  title: string;
  category: string;
  startDate: Date;
  endDate: Date;
  location: string;
  participationStatus:
    | "NOT_ANSWERED"
    | "IS_NOT_PARTICIPATING"
    | "IS_PARTICIPATING";
}

export interface EventCardProps {
  /**
   * The event object that the card represents
   */
  event: Event;
  onPressAttend: (id: string) => {};
}

export default function EventCard({ event, onPressAttend }: EventCardProps) {
  let {
    id,
    title,
    category,
    startDate,
    endDate,
    location,
    participationStatus,
  } = event;

  // Validate start and end dates
  if (
    !(
      startDate instanceof Date &&
      startDate.getTime() &&
      endDate instanceof Date &&
      endDate.getTime()
    )
  ) {
    // Set default values if dates are invalid
    startDate = new Date("2000-01-01T09:00:00");
    endDate = new Date("2000-01-01T16:00:00");
  }

  const startDay = startDate.getDate();
  const startMonth = startDate.toLocaleString("no-NB", { month: "short" });
  const startWeekday = startDate.toLocaleString("no-NB", { weekday: "long" });
  const startTime = startDate.toLocaleString("no-NB", {
    hour: "numeric",
    minute: "numeric",
  });
  const endTime = endDate.toLocaleString("no-NB", {
    hour: "numeric",
    minute: "numeric",
  });

  const statusTexts = {
    NOT_ANSWERED: "Ikke svart",
    IS_NOT_PARTICIPATING: "Du deltar ikke",
    IS_PARTICIPATING: "Du deltar",
  };

  const statusTextColor = {
    NOT_ANSWERED: "text-red-500",
    IS_NOT_PARTICIPATING: "text-red-500",
    IS_PARTICIPATING: "text-green-500",
  };

  return (
    <div
      className={`flex px-8 gap-x-8 bg-yellow-400 max-w-4xl h-48 items-center border-l-8 ${
        participationStatus === "IS_PARTICIPATING"
          ? "border-green-500"
          : "border-transparent"
      }`}
    >
      <p className="w-28 text-center flex flex-col text-gray-500">
        <span className="text-2xl desktop:text-4xl">{startDay} </span>
        <span className="uppercase desktop:text-xl">{startMonth}</span>
      </p>
      <div className="grow">
        <p className="uppercase text-gray-500 text-xs">{category}</p>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-2 capitalize">
          {startWeekday} {startTime} - {endTime}
        </p>
        {location !== "" ? <p>{location}</p> : null}
      </div>
      <button
        onClick={() => onPressAttend(id)}
        className={`w-28 font-bold ${statusTextColor[participationStatus]}`}
      >
        {statusTexts[participationStatus]}
      </button>
    </div>
  );
}
