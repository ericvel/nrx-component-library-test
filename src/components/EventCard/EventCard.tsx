import React from "react";

export interface EventCardProps {
  /**
   * What event does the card present?
   */
  event: {
    title: string;
    category: string;
    startDate: Date;
    endDate: Date;
    location: string;
    participationStatus: number;
  };
}

function EventCard({ event }: EventCardProps) {
  let { title, category, startDate, endDate, location, participationStatus } =
    event;

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

  const statusTexts = ["Ikke svart", "Du deltar ikke", "Du deltar"];
  const statusColors = ["text-red-500", "text-red-500", "text-green-500"];

  return (
    <div
      className={`grid grid-cols-12 bg-white h-48 items-center border-green-500 ${
        participationStatus === 2 ? "border-l-8" : ""
      }`}
    >
      <div className="col-span-2 justify-center">
        <p className="text-center flex flex-col text-gray-500">
          <span className="text-2xl desktop:text-4xl">{startDay} </span>
          <span className="uppercase desktop:text-xl">{startMonth}</span>
        </p>
      </div>
      <div className="col-span-8">
        <div>
          <p className="uppercase text-gray-500 text-xs">{category}</p>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="mb-2 capitalize">
            {startWeekday} {startTime} - {endTime}
          </p>
          {location !== "" ? <p>{location}</p> : null}
          {/* {<p className="font-bold">Påmelding åpen</p>} */}
        </div>
      </div>
      <div className="col-span-2">
        <p className={`font-bold ${statusColors[participationStatus]}`}>
          {statusTexts[participationStatus]}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
