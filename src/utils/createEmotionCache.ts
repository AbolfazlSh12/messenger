import createCache from "@emotion/cache";

type directionType = "rtl" | "ltr";

const createEmotionCache = (direction?: directionType) =>
  createCache({ key: "css" });

export default createEmotionCache;
