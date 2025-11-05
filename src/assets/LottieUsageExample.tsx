// Import Lottie player component
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// Import Lottie animation file (using ?url to get file path
import introtLottie from '../assets/Intro.lottie?url';

 // Render Lottie animation
    // src → animation file path
    // loop → repeat animation
    // autoplay → start automatically
<DotLottieReact
          src={introtLottie}
          loop
          autoplay
        />