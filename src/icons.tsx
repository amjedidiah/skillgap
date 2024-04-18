import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export const SGBackArrow = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 19.92L8.48 13.4C7.71 12.63 7.71 11.37 8.48 10.6L15 4.08002"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SGFieldError = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_4462_1926)">
      <Path
        d="M7.99998 5.33337V8.00004M7.99998 10.6667H8.00665M14.6666 8.00004C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00004C1.33331 4.31814 4.31808 1.33337 7.99998 1.33337C11.6819 1.33337 14.6666 4.31814 14.6666 8.00004Z"
        stroke="#F04438"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4462_1926">
        <Rect width="16" height="16" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
