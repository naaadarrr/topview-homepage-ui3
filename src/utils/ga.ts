import ReactGA from "react-ga4";

const initializeGA = () => {
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS &&
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
};

const trackGAEvent = (
  category: string,
  action: string,
  label: string,
  value?: number,
) => {
  console.log("GA event:", { category, action, label, value });
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    ...(typeof value === "number" && value >= 0 && { value: value }),
  });
};

const trackUserId = (userId: string) => {
  ReactGA.set({ userId });
};

export default initializeGA;
export { initializeGA, trackGAEvent, trackUserId };
