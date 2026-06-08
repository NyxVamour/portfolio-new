export default function EnterBracketL({ className }: { className: string }) {
    return (
        <svg
            width="17"
            height="45"
            viewBox="0 0 17 45"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_2722_1117)">
                <path
                    d="M6 39V6H11V9.79889H8.73333V35.2469H11V39H6Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_2722_1117"
                    x="0"
                    y="0"
                    width="17"
                    height="45"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2722_1117"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2722_1117"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
