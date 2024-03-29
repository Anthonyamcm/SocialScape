const palette = {
    neutral100: "#FFFFFF",
    neutral200: "#ECF2F5",
    neutral300: "#969F9F",
    neutral400: "#D9D9D9",
    neutral500: "#978F8A",
    neutral600: "#564E4A",
    neutral700: "#3C3836",
    neutral800: "#1b1b1c",
    neutral900: "#000000",
  
    primary100: "#4498FC",
    primary200: "#00C6FF",
    primary300: "#6BB0FA",
    primary400: "#D28468",
    primary500: "#C76542",
    primary600: "#A54F31",
  
    secondary100: "#DCDDE9",
    secondary200: "#BCC0D6",
    secondary300: "#9196B9",
    secondary400: "#626894",
    secondary500: "#41476E",
  
    accent100: "#FFEED4",
    accent200: "#FFE1B2",
    accent300: "#FDD495",
    accent400: "#FBC878",
    accent500: "#FFBB50",
  
    error100: "#ED213A",
    error200: "#FF6363",
    error300: "#FF8E8E",
  
    overlay20: "rgba(25, 16, 21, 0.2)",
    overlay50: "rgba(25, 16, 21, 0.5)",
  } as const
  
  export const colors = {
    /**
     * The palette is available to use, but prefer using the name.
     * This is only included for rare, one-off cases. Try to use
     * semantic names as much as possible.
     */
    palette,
    /**
     * A helper for making something see-thru.
     */
    transparent: "rgba(0, 0, 0, 0)",
    /**
     * The default text color in many components.
     */
    text: palette.neutral900,
    /**
     * Secondary text information.
     */
    textDim: palette.neutral600,
    /**
     * The default color of the screen background.
     */
    background: palette.neutral100,
    /**
     * The default border color.
     */
    border: palette.neutral400,
    /**
     * The main tinting color.
     */
    tint: palette.primary500,
    /**
     * A subtle color used for lines.
     */
    separator: palette.neutral300,
    /**
     * Error messages.
     */
    error: palette.error100,
    /**
     * Error Background.
     *
     */
    errorBackground: palette.error100,
  }