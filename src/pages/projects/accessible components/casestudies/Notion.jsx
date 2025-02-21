const Notion = {
  title: "Notion",
  mouseImages: [
    {
      src: "/src/pages/projects/accessible components/images/NotionDefault.png",
      alt: "Notion Default State",
      description: "Notion Default State.",
    },
    {
      src: "/src/pages/projects/accessible components/images/NotionMouseHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/src/pages/projects/accessible components/images/NotionMouseClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },
    {
      src: "/src/pages/projects/accessible components/images/NotionMouseHoverAfterClick.png",
      alt: "Checkbox hovered after being clicked",
      description: "Checkbox hovered after being clicked.",
    },

    // more images
  ],
  keyboardImages: [
    {
      src: "/src/pages/projects/accessible components/images/NotionKeyboardHover.png",
      alt: "Checkbox on hover",
      description: "Checkbox on hover.",
    },
    {
      src: "/src/pages/projects/accessible components/images/NotionKeyboardClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },

    // more images
  ],
  mobileImages: [
    {
      src: "/src/pages/projects/accessible components/images/NotionMobileDefault.png",
      alt: "Mobile Default State",
      description: "Mobile Default State.",
    },
    {
      src: "/src/pages/projects/accessible components/images/NotionMobileClick.png",
      alt: "Checkbox on click",
      description: "Checkbox on click.",
    },

    // more images
  ],
  firstChartRow1: {
    left: "Mouse / Touchpad",
    right: ["Simple yet effective", "Animation on click adding complexity"],
  },
  firstChartRow2: {
    left: "Keyboard",
    right: [
      "Very accessible through tab and enter",
      "No animation when using keyboard controls",
    ],
  },
  firstChartRow3: {
    left: "Touch",
    right: ["Same look and functionality on mobile"],
  },
  secondChartRow1: {
    left: "Mouse / Touchpad",
    right: [
      "Hover: A grey box (shadow) surrounds the checkbox field indicating the hovered area",
      "Click: The box turns blue",
      "Click: A check appears in the box",
      "Click: The shadow disappears",
    ],
  },
  secondChartRow2: {
    left: "Keyboard",
    right: [
      "Focus order makes complete sense as you move from property to property",
      "Voiceover checkbox: “unchecked, checkbox, button, group”",
    ],
  },
  secondChartRow3: {
    left: "Touch",
    right: ["Click: The box turns blue", "Click: A check appears in the box"],
  },
};

export default Notion;
