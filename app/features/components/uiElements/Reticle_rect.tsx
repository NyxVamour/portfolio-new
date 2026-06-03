export default function Reticle_rect({ className }: { className: string }) {
    return (
        <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 718 598"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_2734_1159)">
                <path d="M6 592H35V594H4V563H6V592Z" fill="#BD4A4A" />
                <path d="M714 594H684V592H712V563H714V594Z" fill="#BD4A4A" />
                <path d="M35 6H6V36H4V4H35V6Z" fill="#BD4A4A" />
                <path d="M714 36H712V6H684V4H714V36Z" fill="#BD4A4A" />
            </g>
            <defs>
                <filter
                    id="filter0_d_2734_1159"
                    x="0"
                    y="0"
                    width="718"
                    height="598"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_2734_1159"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2734_1159"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
