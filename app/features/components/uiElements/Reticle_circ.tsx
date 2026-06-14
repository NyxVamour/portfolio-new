export default function Reticle_circ({
    ref,
    className,
}: {
    ref: React.RefObject<SVGSVGElement | null>;
    className: string;
}) {
    return (
        <svg
            ref={ref}
            width="100%"
            viewBox="0 0 352 352"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_2751_1178)">
                <path
                    d="M305.574 289.112C274.045 325.201 227.686 348 176 348C124.314 348 77.9552 325.201 46.4258 289.112H47.7559C79.0891 324.61 124.929 347 176 347C227.071 347 272.911 324.61 304.244 289.112H305.574Z"
                    fill="#BD4A4A"
                />
                <path
                    d="M18.9004 108.366C9.95781 129.11 5 151.976 5 176C5 199.799 9.86467 222.462 18.6494 243.051H17.5596C8.82897 222.446 4 199.787 4 176C4 151.988 8.92298 129.126 17.8105 108.366H18.9004Z"
                    fill="#BD4A4A"
                />
                <path
                    d="M334.189 108.366C343.077 129.126 348 151.988 348 176C348 199.787 343.171 222.446 334.44 243.051H333.351C342.135 222.462 347 199.799 347 176C347 151.976 342.042 129.11 333.1 108.366H334.189Z"
                    fill="#BD4A4A"
                />
                <path
                    d="M176 4C227.407 4 273.544 26.5541 305.062 62.3047H303.729C272.409 27.1446 226.791 5 176 5C125.209 5 79.5909 27.1446 48.2715 62.3047H46.9375C78.4557 26.5541 124.593 4 176 4Z"
                    fill="#BD4A4A"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_2751_1178"
                    x="0"
                    y="0"
                    width="352"
                    height="352"
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
                        result="effect1_dropShadow_2751_1178"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2751_1178"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
