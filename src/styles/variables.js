import { keyframes } from "styled-components";

export default {
  /**
   * ## Breakpoints
   */

  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    desk: "1366px",
  },

  /**
   * ## Container measurements
   */

  widths: {
    sm: "100%",
    md: "100%",
    lg: "750px",
    xl: "960px",
    desk: "1128px",
  },

  /**
   * ## Colors Brand
   */

  brand: {
   yellow: "#FFB800",
    green: "#396766",
    blue: "#00d0f2",
    black: "#333333",
  },

  /**
   * ## Colors Status
   */

  status: {
    error: "#FF573D",
    success: "#00C791",
    warning: "#FFAD0A",
  },

  /**
   * ## Colors Neutrals
   */

  neutral: {
    neutral100: "#000000",
    neutral85: "#120026",
    neutral70: "#453E4D",
    neutral50: "#787080",
    neutral30: "#AEAAB3",
    neutral20: "#E5E5E5",
    neutral10: "#E3E0E5",
    neutral2: "#FBFAFC",
  },

  /**

	 * ## Colors Text

	 */

  text: {
    dark: {
      title: "#FFFFFF",
      high: "#140029",
      medium: "#3A3640",
      low: "#544F59",
    },

    light: {
      high: "#FFFFFF",
      medium: "#E5E5E5",
      low: "#B3B3B3",
    },
  },
  animations: {
    moveBackground: keyframes`
      0% {
        background-position: 50% 0%;
      }
      100% {
        background-position: 50% 100%;
      }
    `,
    moveBackgroundTablet: keyframes`
    0% {
      background-size: 150%;
      background-position: 50% 0%;
    }
    100% {
      background-size: 180%;
      background-position: 100% 100%;
    }
    `,
    moveBackgroundMob: keyframes`
    0% {
        background-position: 75% 10%;
      }
      100% {
        background-position: 90% 100%;
      }
    `,
    revertBackground: keyframes`
    
    0% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  `,
    revertBackgroundTablet: keyframes`
  
  0% {
    background-size: 180%;
    background-position: 100% 100%;
  }
  100% {
    background-size: 150%;
    background-position: 50% 0%;
  }
  `,
    revertBackgroundMob: keyframes`
  0% {
      background-position: 90% 100%;
    }
  100% {
      background-position: 75% 10%;
    }
    
  `,
    moveBackgroundFold: keyframes`
  0% {
    background-size: 400%;
      background-position: 75% 10%;
    }
    100% {
      background-size: 550%;
      background-position: 90% 100%;
    }
  `,
    revertBackgroundFold: keyframes`
  0% {
      background-size: 550%;
      background-position: 90% 100%;
    }
  100% {
      background-position: 75% 10%;
    }
    
  `,
    spinBall: keyframes`
      100% {
      transform: rotate(360deg);
    }
    `,
    fade: keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,
    dissapear: keyframes`
  0%{
    visibility: visible;
  }
  100%{
    visibility: hidden;
  }
  `,
    appear: keyframes`
  0%{
    visibility: hidden;
  }
  100%{
    visibility: visible;
  }
  `,
    appearFromBottom: keyframes`
  0% {
    transform: translateY(100%);
  }
  90% {
      transform: translateY(-1%);
  }
  100% {
    transform: translateY(0);
  }
`,
    appearFromBottomWithoutBounce: keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`,
    appearFromBottomWithFade: keyframes`
  0% {
    top: 100%;
    height: 0;
    opacity: 0;
  }
  100% {
    top: 0;
    height: 100%;
    visibility: visible;
    opacity: 1;
  }
`,
    vanishToBottom: keyframes`
0% {
    top: 0;
    height: 100%;
    opacity: 1;
  }
  100% {
    top: 100%;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
`,

    appearSuddenly: keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,
    vanishToTop: keyframes`
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-140%);
    }

    `,
    expand: keyframes`
    0% {
      scale: 1;
    }
    100% {
      scale: 5;
      opacity: 0;
    }
  `,
    shrink: keyframes`
    0% {
      scale: 5;
      opacity: 0;
    }
  100% {
      scale: 1;
      opacity: 1;
    }
    
  `,
    expandMob: keyframes`
    0% {
      scale: 1;
      opacity: 1;
    }
    100% {
      scale: 7;
      opacity: 0;
    }
  `,
    shrinkMob: keyframes`
  0% {
      scale: 7;
      opacity: 0;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  `,
    expandBigBallMob: keyframes`
  0% {
    scale: 1;
    opacity: 0
  }
  100% {
    scale: 7;
    opacity: 1
  }`,
    expandGiantBallMob: keyframes`
    0% {
    scale: 1;
    opacity: 0;
  }
  100% {
    scale: 14;
    opacity: 1;
  }
  `,
    expandVanishGiantBall: keyframes`
    0% {
    scale: 1;
    opacity: 1;
  }
  100% {
    scale: 14;
    opacity: 0;
  }
  `,
    shrinkAppearGiantBall: keyframes`
  0% {
  scale: 14;
  opacity: 0;
}
100% {
  scale: 1;
  opacity: 1;
}
`,
    shrinkGiantBallMob: keyframes`
  0% {
  scale: 14;
  opacity: 1;
}
100% {
  scale: 1;
  opacity: 0;
}
`,
    shrinkBigBallMob: keyframes`
  100% {
    scale: 1;
    opacity: 0
  }
  0% {
    scale: 7;
    opacity: 1
  }
  `,
    expandBigBall: keyframes`
    0% {
      scale: 1;
      opacity: 0;
    }
    100% {
      scale: 5;
      opacity: 1;
    }
    `,
    shrinkBigBall: keyframes`
    0% {
      scale: 5;
      opacity: 1;
    }
    100% {
      scale: 1;
      opacity: 0;
    }
    `,
  },
};
