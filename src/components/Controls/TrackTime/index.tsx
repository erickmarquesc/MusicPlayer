import { TrackTimeContainer } from "./styles";

export function TrackTime() {
  return (
    <TrackTimeContainer>
      <div className="track"></div>
      <div className="time">
        <div className="total-time">03:20</div>
        <div className="last-time">00:12</div>
      </div>
    </TrackTimeContainer>
  );
};