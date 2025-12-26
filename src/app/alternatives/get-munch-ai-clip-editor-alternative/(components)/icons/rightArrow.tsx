export default function RightArrow({ w, h }: { w?: string; h?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w ? w : "6"}
      height={h ? h : "10"}
      viewBox="0 0 6 10"
      fill="none"
    >
      <path
        d="M1 9.00015L5 5.22029L1 1.44043"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function LargeRightArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="17"
      viewBox="0 0 11 17"
      fill="none"
    >
      <path
        d="M2 1.99964L9.21875 8.82111L2 15.6426"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
