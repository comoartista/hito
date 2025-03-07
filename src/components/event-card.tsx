import { HitoEvent } from "@/lib/types";

type EventCardProps = {
  event: HitoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return <section>{event.name}</section>;
}
