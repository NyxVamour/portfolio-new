export default function Reticle_target({ className }: { className: string }) {
    return (
        <svg
            width="114"
            height="114"
            viewBox="0 0 114 114"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_2734_1166)">
                <path d="M6 108H31.1465V110H4V87.0898H6V108Z" fill="#BD4A4A" />
                <path
                    d="M110 110H82.8535V108H108V87.0898H110V110Z"
                    fill="#BD4A4A"
                />
                <path d="M31.1465 6H6V27.0898H4V4H31.1465V6Z" fill="#BD4A4A" />
                <path
                    d="M110 27.0898H108V6H82.8535V4H110V27.0898Z"
                    fill="#BD4A4A"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_2734_1166"
                    x="0"
                    y="0"
                    width="114"
                    height="114"
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
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.741176 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2734_1166"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2734_1166"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
