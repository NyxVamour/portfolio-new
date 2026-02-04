import React from "react";

interface NavigationMapProps {
    className: string;
}

const NavigationMap = React.forwardRef<SVGSVGElement, NavigationMapProps>(
    ({ className }, ref) => {
        return (
            <svg
                ref={ref}
                width="495"
                height="538"
                viewBox="0 0 495 538"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <line
                    x1="86.3999"
                    y1="346"
                    x2="166.4"
                    y2="346"
                    stroke="white"
                    strokeWidth="2"
                />
                <line
                    x1="86.3999"
                    y1="106"
                    x2="166.4"
                    y2="106"
                    stroke="white"
                    strokeWidth="2"
                />
                <line
                    x1="307.4"
                    y1="366"
                    x2="307.4"
                    y2="446"
                    stroke="white"
                    strokeWidth="2"
                />
                <line
                    x1="187.4"
                    y1="247"
                    x2="187.4"
                    y2="327"
                    stroke="white"
                    strokeWidth="2"
                />
                <line
                    x1="187.4"
                    y1="127"
                    x2="187.4"
                    y2="207"
                    stroke="white"
                    strokeWidth="2"
                />
                <line
                    x1="206.4"
                    y1="346"
                    x2="286.4"
                    y2="346"
                    stroke="white"
                    strokeWidth="2"
                />
                <line
                    x1="206.4"
                    y1="466"
                    x2="286.4"
                    y2="466"
                    stroke="white"
                    strokeWidth="2"
                />
                <line
                    x1="206.4"
                    y1="226"
                    x2="286.4"
                    y2="226"
                    stroke="white"
                    strokeWidth="2"
                />
                <line
                    x1="326.4"
                    y1="226"
                    x2="406.4"
                    y2="226"
                    stroke="white"
                    strokeWidth="2"
                />
                <line
                    x1="206.4"
                    y1="106"
                    x2="286.4"
                    y2="106"
                    stroke="white"
                    strokeWidth="2"
                />
                <g filter="url(#filter0_d_2234_1041)">
                    <circle cx="306.4" cy="347" r="20" fill="#0D0D1A" />
                    <circle
                        cx="306.4"
                        cy="347"
                        r="19"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <g filter="url(#filter1_d_2234_1041)">
                    <circle cx="306.4" cy="467" r="20" fill="#0D0D1A" />
                    <circle
                        cx="306.4"
                        cy="467"
                        r="19"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <g filter="url(#filter2_d_2234_1041)">
                    <circle cx="306.4" cy="227" r="20" fill="#0D0D1A" />
                    <circle
                        cx="306.4"
                        cy="227"
                        r="19"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <g filter="url(#filter3_d_2234_1041)">
                    <circle cx="186.4" cy="347" r="20" fill="#0D0D1A" />
                    <circle
                        cx="186.4"
                        cy="347"
                        r="19"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <g filter="url(#filter4_d_2234_1041)">
                    <path
                        d="M26.3999 373H104.4V396H26.3999V373Z"
                        fill="#0D0D1A"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M103.9 373.5V395.5H26.8999V373.5H103.9Z"
                        stroke="white"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M39.0082 389.568L42.2882 378.96H45.8082L49.0882 389.568L48.8002 390H46.8802L46.2082 387.76H41.8882L41.2162 390H39.2962L39.0082 389.568ZM42.5122 385.68H45.5842L44.1762 381.04H43.9202L42.5122 385.68ZM50.6885 390V378.96H55.9045C57.6965 378.96 58.5925 379.856 58.5925 381.648V382.608C58.5925 382.971 58.4858 383.28 58.2725 383.536L57.7125 384.208L58.3845 384.768C58.7365 385.056 58.9125 385.483 58.9125 386.048V387.312C58.9125 389.104 58.0165 390 56.2245 390H50.6885ZM52.9925 387.92H56.1285C56.4485 387.92 56.6085 387.76 56.6085 387.44V385.84C56.6085 385.52 56.4485 385.36 56.1285 385.36H52.9925V387.92ZM52.9925 383.28H55.8085C56.1285 383.28 56.2885 383.12 56.2885 382.8V381.52C56.2885 381.2 56.1285 381.04 55.8085 381.04H52.9925V383.28ZM60.966 387.312V381.648C60.966 379.856 61.862 378.96 63.654 378.96H67.302C69.094 378.96 69.99 379.856 69.99 381.648V387.312C69.99 389.104 69.094 390 67.302 390H63.654C61.862 390 60.966 389.104 60.966 387.312ZM63.27 387.44C63.27 387.76 63.43 387.92 63.75 387.92H67.206C67.526 387.92 67.686 387.76 67.686 387.44V381.52C67.686 381.2 67.526 381.04 67.206 381.04H63.75C63.43 381.04 63.27 381.2 63.27 381.52V387.44ZM72.3581 387.312V378.96H74.6621V387.44C74.6621 387.76 74.8221 387.92 75.1421 387.92H78.2781C78.5981 387.92 78.7581 387.76 78.7581 387.44V378.96H81.0621V387.312C81.0621 389.104 80.1661 390 78.3741 390H75.0461C73.2541 390 72.3581 389.104 72.3581 387.312ZM82.6667 381.04V378.96H91.6907V381.04H88.3307V390H86.0267V381.04H82.6667Z"
                        fill="white"
                    />
                </g>
                <g filter="url(#filter5_d_2234_1041)">
                    <rect
                        x="46.3999"
                        y="327"
                        width="40"
                        height="40"
                        fill="#0D0D1A"
                    />
                    <rect
                        x="47.3999"
                        y="328"
                        width="38"
                        height="38"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <path
                    d="M43.4123 264V255.36H51.3683V256.956H45.0083V258.876H50.1203V260.484H45.0083V262.404H51.3683V264H43.4123ZM52.5758 264V255.36H54.3158L59.6198 261.672V255.36H61.2158V264H59.4758L54.1598 257.676V264H52.5758ZM65.6562 264V256.956H62.1282V255.36H70.7682V256.956H67.2522V264H65.6562ZM71.6897 264V255.36H79.6457V256.956H73.2857V258.876H78.3977V260.484H73.2857V262.404H79.6457V264H71.6897ZM87.7412 264L85.1372 260.892H87.2132L89.4692 263.556V264H87.7412ZM80.8532 264V255.372H87.8132C88.1172 255.372 88.3972 255.448 88.6532 255.6C88.9092 255.752 89.1132 255.956 89.2652 256.212C89.4172 256.46 89.4932 256.736 89.4932 257.04V259.368C89.4932 259.672 89.4172 259.952 89.2652 260.208C89.1132 260.464 88.9092 260.668 88.6532 260.82C88.3972 260.964 88.1172 261.036 87.8132 261.036L82.4372 261.048V264H80.8532ZM82.5812 259.44H87.7412C87.7812 259.44 87.8172 259.428 87.8492 259.404C87.8812 259.38 87.8972 259.348 87.8972 259.308V257.1C87.8972 257.06 87.8812 257.028 87.8492 257.004C87.8172 256.972 87.7812 256.956 87.7412 256.956H82.5812C82.5412 256.956 82.5052 256.972 82.4732 257.004C82.4492 257.028 82.4372 257.06 82.4372 257.1V259.308C82.4372 259.348 82.4492 259.38 82.4732 259.404C82.5052 259.428 82.5412 259.44 82.5812 259.44Z"
                    fill="white"
                />
                <g filter="url(#filter6_d_2234_1041)">
                    <path
                        d="M134.4 492H239.4V515H134.4V492Z"
                        fill="#0D0D1A"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M238.9 492.5V514.5H134.9V492.5H238.9Z"
                        stroke="white"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M147.938 509V497.96H153.314C155.106 497.96 156.002 498.856 156.002 500.648V502.792C156.002 504.584 155.106 505.48 153.314 505.48H150.242V509H147.938ZM150.242 503.4H153.218C153.538 503.4 153.698 503.24 153.698 502.92V500.52C153.698 500.2 153.538 500.04 153.218 500.04H150.242V503.4ZM158.142 509V497.96H163.518C165.31 497.96 166.206 498.856 166.206 500.648V502.472C166.206 503.805 165.71 504.637 164.718 504.968L166.526 508.52L166.254 509H164.27L162.318 505.16H160.446V509H158.142ZM160.446 503.08H163.422C163.742 503.08 163.902 502.92 163.902 502.6V500.52C163.902 500.2 163.742 500.04 163.422 500.04H160.446V503.08ZM168.357 506.312V500.648C168.357 498.856 169.253 497.96 171.045 497.96H174.693C176.485 497.96 177.381 498.856 177.381 500.648V506.312C177.381 508.104 176.485 509 174.693 509H171.045C169.253 509 168.357 508.104 168.357 506.312ZM170.661 506.44C170.661 506.76 170.821 506.92 171.141 506.92H174.597C174.917 506.92 175.077 506.76 175.077 506.44V500.52C175.077 500.2 174.917 500.04 174.597 500.04H171.141C170.821 500.04 170.661 500.2 170.661 500.52V506.44ZM179.365 506.312V504.2H181.669V506.44C181.669 506.76 181.829 506.92 182.149 506.92H184.325C184.645 506.92 184.805 506.76 184.805 506.44V500.04H181.797V497.96H187.109V506.312C187.109 508.104 186.213 509 184.421 509H182.053C180.261 509 179.365 508.104 179.365 506.312ZM189.642 509V497.96H197.194V500.04H191.946V502.28H196.714V504.36H191.946V506.92H197.194V509H189.642ZM199.138 506.312V500.648C199.138 498.856 200.034 497.96 201.826 497.96H206.098L207.17 498.792V500.04H201.922C201.602 500.04 201.442 500.2 201.442 500.52V506.44C201.442 506.76 201.602 506.92 201.922 506.92H207.17V508.168L206.098 509H201.826C200.034 509 199.138 508.104 199.138 506.312ZM208.354 500.04V497.96H217.378V500.04H214.018V509H211.714V500.04H208.354ZM218.599 508.168V506.92H223.559C223.879 506.92 224.039 506.76 224.039 506.44V505.288C224.039 504.979 223.906 504.803 223.639 504.76L220.519 504.12C219.239 503.864 218.599 503.005 218.599 501.544V500.648C218.599 498.856 219.495 497.96 221.287 497.96H224.951L226.023 498.792V500.04H221.383C221.063 500.04 220.903 500.2 220.903 500.52V501.56C220.903 501.859 221.036 502.035 221.303 502.088L224.423 502.712C225.703 502.968 226.343 503.827 226.343 505.288V506.312C226.343 508.104 225.447 509 223.655 509H219.671L218.599 508.168Z"
                        fill="white"
                    />
                </g>
                <g filter="url(#filter7_d_2234_1041)">
                    <rect
                        x="166.4"
                        y="446"
                        width="40"
                        height="40"
                        fill="#0D0D1A"
                    />
                    <rect
                        x="167.4"
                        y="447"
                        width="38"
                        height="38"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <path
                    d="M163.412 383V374.36H171.368V375.956H165.008V377.876H170.12V379.484H165.008V381.404H171.368V383H163.412ZM172.576 383V374.36H174.316L179.62 380.672V374.36H181.216V383H179.476L174.16 376.676V383H172.576ZM185.656 383V375.956H182.128V374.36H190.768V375.956H187.252V383H185.656ZM191.69 383V374.36H199.646V375.956H193.286V377.876H198.398V379.484H193.286V381.404H199.646V383H191.69ZM207.741 383L205.137 379.892H207.213L209.469 382.556V383H207.741ZM200.853 383V374.372H207.813C208.117 374.372 208.397 374.448 208.653 374.6C208.909 374.752 209.113 374.956 209.265 375.212C209.417 375.46 209.493 375.736 209.493 376.04V378.368C209.493 378.672 209.417 378.952 209.265 379.208C209.113 379.464 208.909 379.668 208.653 379.82C208.397 379.964 208.117 380.036 207.813 380.036L202.437 380.048V383H200.853ZM202.581 378.44H207.741C207.781 378.44 207.817 378.428 207.849 378.404C207.881 378.38 207.897 378.348 207.897 378.308V376.1C207.897 376.06 207.881 376.028 207.849 376.004C207.817 375.972 207.781 375.956 207.741 375.956H202.581C202.541 375.956 202.505 375.972 202.473 376.004C202.449 376.028 202.437 376.06 202.437 376.1V378.308C202.437 378.348 202.449 378.38 202.473 378.404C202.505 378.428 202.541 378.44 202.581 378.44Z"
                    fill="white"
                />
                <g filter="url(#filter8_d_2234_1041)">
                    <path
                        d="M379.4 253H472.4V276H379.4V253Z"
                        fill="#0D0D1A"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M471.9 253.5V275.5H379.9V253.5H471.9Z"
                        stroke="white"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M392.591 269.168V267.92H397.551C397.871 267.92 398.031 267.76 398.031 267.44V266.288C398.031 265.979 397.898 265.803 397.631 265.76L394.511 265.12C393.231 264.864 392.591 264.005 392.591 262.544V261.648C392.591 259.856 393.487 258.96 395.279 258.96H398.943L400.015 259.792V261.04H395.375C395.055 261.04 394.895 261.2 394.895 261.52V262.56C394.895 262.859 395.029 263.035 395.295 263.088L398.415 263.712C399.695 263.968 400.335 264.827 400.335 266.288V267.312C400.335 269.104 399.439 270 397.647 270H393.663L392.591 269.168ZM402.478 270V258.96H410.03V261.04H404.782V263.28H409.55V265.36H404.782V267.92H410.03V270H402.478ZM411.974 267.312V261.648C411.974 259.856 412.87 258.96 414.662 258.96H418.934L420.006 259.792V261.04H414.758C414.438 261.04 414.278 261.2 414.278 261.52V267.44C414.278 267.76 414.438 267.92 414.758 267.92H420.006V269.168L418.934 270H414.662C412.87 270 411.974 269.104 411.974 267.312ZM422.118 270V258.96H427.494C429.286 258.96 430.182 259.856 430.182 261.648V263.472C430.182 264.805 429.686 265.637 428.694 265.968L430.502 269.52L430.23 270H428.246L426.294 266.16H424.422V270H422.118ZM424.422 264.08H427.398C427.718 264.08 427.878 263.92 427.878 263.6V261.52C427.878 261.2 427.718 261.04 427.398 261.04H424.422V264.08ZM432.493 270V258.96H440.045V261.04H434.797V263.28H439.565V265.36H434.797V267.92H440.045V270H432.493ZM441.221 261.04V258.96H450.245V261.04H446.885V270H444.581V261.04H441.221ZM451.466 269.168V267.92H456.426C456.746 267.92 456.906 267.76 456.906 267.44V266.288C456.906 265.979 456.773 265.803 456.506 265.76L453.386 265.12C452.106 264.864 451.466 264.005 451.466 262.544V261.648C451.466 259.856 452.362 258.96 454.154 258.96H457.818L458.89 259.792V261.04H454.25C453.93 261.04 453.77 261.2 453.77 261.52V262.56C453.77 262.859 453.904 263.035 454.17 263.088L457.29 263.712C458.57 263.968 459.21 264.827 459.21 266.288V267.312C459.21 269.104 458.314 270 456.522 270H452.538L451.466 269.168Z"
                        fill="white"
                    />
                </g>
                <g filter="url(#filter9_d_2234_1041)">
                    <rect
                        x="405.4"
                        y="207"
                        width="40"
                        height="40"
                        fill="#0D0D1A"
                    />
                    <rect
                        x="406.4"
                        y="208"
                        width="38"
                        height="38"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <path
                    d="M402.412 144V135.36H410.368V136.956H404.008V138.876H409.12V140.484H404.008V142.404H410.368V144H402.412ZM411.576 144V135.36H413.316L418.62 141.672V135.36H420.216V144H418.476L413.16 137.676V144H411.576ZM424.656 144V136.956H421.128V135.36H429.768V136.956H426.252V144H424.656ZM430.69 144V135.36H438.646V136.956H432.286V138.876H437.398V140.484H432.286V142.404H438.646V144H430.69ZM446.741 144L444.137 140.892H446.213L448.469 143.556V144H446.741ZM439.853 144V135.372H446.813C447.117 135.372 447.397 135.448 447.653 135.6C447.909 135.752 448.113 135.956 448.265 136.212C448.417 136.46 448.493 136.736 448.493 137.04V139.368C448.493 139.672 448.417 139.952 448.265 140.208C448.113 140.464 447.909 140.668 447.653 140.82C447.397 140.964 447.117 141.036 446.813 141.036L441.437 141.048V144H439.853ZM441.581 139.44H446.741C446.781 139.44 446.817 139.428 446.849 139.404C446.881 139.38 446.897 139.348 446.897 139.308V137.1C446.897 137.06 446.881 137.028 446.849 137.004C446.817 136.972 446.781 136.956 446.741 136.956H441.581C441.541 136.956 441.505 136.972 441.473 137.004C441.449 137.028 441.437 137.06 441.437 137.1V139.308C441.437 139.348 441.449 139.38 441.473 139.404C441.505 139.428 441.541 139.44 441.581 139.44Z"
                    fill="white"
                />
                <g filter="url(#filter10_d_2234_1041)">
                    <circle cx="306.4" cy="107" r="20" fill="#0D0D1A" />
                    <circle
                        cx="306.4"
                        cy="107"
                        r="19"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <g filter="url(#filter11_d_2234_1041)">
                    <circle cx="186.4" cy="227" r="20" fill="#0D0D1A" />
                    <circle
                        cx="186.4"
                        cy="227"
                        r="19"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <g filter="url(#filter12_d_2234_1041)">
                    <circle cx="186.4" cy="107" r="20" fill="#0D0D1A" />
                    <circle
                        cx="186.4"
                        cy="107"
                        r="19"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <g filter="url(#filter13_d_2234_1041)">
                    <path
                        d="M22.3999 133H111.4V156H22.3999V133Z"
                        fill="#0D0D1A"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M110.9 133.5V155.5H22.8999V133.5H110.9Z"
                        stroke="white"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M35.915 150V138.96H41.291C43.083 138.96 43.979 139.856 43.979 141.648V143.792C43.979 145.584 43.083 146.48 41.291 146.48H38.219V150H35.915ZM38.219 144.4H41.195C41.515 144.4 41.675 144.24 41.675 143.92V141.52C41.675 141.2 41.515 141.04 41.195 141.04H38.219V144.4ZM46.1182 150V138.96H51.4942C53.2862 138.96 54.1822 139.856 54.1822 141.648V143.472C54.1822 144.805 53.6862 145.637 52.6942 145.968L54.5022 149.52L54.2302 150H52.2462L50.2942 146.16H48.4222V150H46.1182ZM48.4222 144.08H51.3982C51.7182 144.08 51.8782 143.92 51.8782 143.6V141.52C51.8782 141.2 51.7182 141.04 51.3982 141.04H48.4222V144.08ZM56.3332 147.312V141.648C56.3332 139.856 57.2292 138.96 59.0212 138.96H62.6692C64.4612 138.96 65.3572 139.856 65.3572 141.648V147.312C65.3572 149.104 64.4612 150 62.6692 150H59.0212C57.2292 150 56.3332 149.104 56.3332 147.312ZM58.6372 147.44C58.6372 147.76 58.7972 147.92 59.1172 147.92H62.5732C62.8932 147.92 63.0532 147.76 63.0532 147.44V141.52C63.0532 141.2 62.8932 141.04 62.5732 141.04H59.1172C58.7972 141.04 58.6372 141.2 58.6372 141.52V147.44ZM67.8213 150V138.96H75.3733V141.04H70.1253V143.76H74.8933V145.84H70.1253V150H67.8213ZM77.165 150V138.96H79.469V150H77.165ZM82.0869 150V138.96H84.3909V147.92H89.1589V150H82.0869ZM90.8525 150V138.96H98.4045V141.04H93.1565V143.28H97.9245V145.36H93.1565V147.92H98.4045V150H90.8525Z"
                        fill="white"
                    />
                </g>
                <g filter="url(#filter14_d_2234_1041)">
                    <rect
                        x="46.3999"
                        y="87"
                        width="40"
                        height="40"
                        fill="#0D0D1A"
                    />
                    <rect
                        x="47.3999"
                        y="88"
                        width="38"
                        height="38"
                        stroke="white"
                        strokeWidth="2"
                    />
                </g>
                <path
                    d="M43.4123 24V15.36H51.3683V16.956H45.0083V18.876H50.1203V20.484H45.0083V22.404H51.3683V24H43.4123ZM52.5758 24V15.36H54.3158L59.6198 21.672V15.36H61.2158V24H59.4758L54.1598 17.676V24H52.5758ZM65.6562 24V16.956H62.1282V15.36H70.7682V16.956H67.2522V24H65.6562ZM71.6897 24V15.36H79.6457V16.956H73.2857V18.876H78.3977V20.484H73.2857V22.404H79.6457V24H71.6897ZM87.7412 24L85.1372 20.892H87.2132L89.4692 23.556V24H87.7412ZM80.8532 24V15.372H87.8132C88.1172 15.372 88.3972 15.448 88.6532 15.6C88.9092 15.752 89.1132 15.956 89.2652 16.212C89.4172 16.46 89.4932 16.736 89.4932 17.04V19.368C89.4932 19.672 89.4172 19.952 89.2652 20.208C89.1132 20.464 88.9092 20.668 88.6532 20.82C88.3972 20.964 88.1172 21.036 87.8132 21.036L82.4372 21.048V24H80.8532ZM82.5812 19.44H87.7412C87.7812 19.44 87.8172 19.428 87.8492 19.404C87.8812 19.38 87.8972 19.348 87.8972 19.308V17.1C87.8972 17.06 87.8812 17.028 87.8492 17.004C87.8172 16.972 87.7812 16.956 87.7412 16.956H82.5812C82.5412 16.956 82.5052 16.972 82.4732 17.004C82.4492 17.028 82.4372 17.06 82.4372 17.1V19.308C82.4372 19.348 82.4492 19.38 82.4732 19.404C82.5052 19.428 82.5412 19.44 82.5812 19.44Z"
                    fill="white"
                />
                <defs>
                    <filter
                        id="filter0_d_2234_1041"
                        x="264"
                        y="304.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_d_2234_1041"
                        x="264"
                        y="424.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter2_d_2234_1041"
                        x="264"
                        y="184.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter3_d_2234_1041"
                        x="144"
                        y="304.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter4_d_2234_1041"
                        x="3.9999"
                        y="350.6"
                        width="122.8"
                        height="67.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter5_d_2234_1041"
                        x="23.9999"
                        y="304.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter6_d_2234_1041"
                        x="112"
                        y="469.6"
                        width="149.8"
                        height="67.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter7_d_2234_1041"
                        x="144"
                        y="423.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter8_d_2234_1041"
                        x="357"
                        y="230.6"
                        width="137.8"
                        height="67.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter9_d_2234_1041"
                        x="383"
                        y="184.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter10_d_2234_1041"
                        x="264"
                        y="64.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter11_d_2234_1041"
                        x="144"
                        y="184.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter12_d_2234_1041"
                        x="144"
                        y="64.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter13_d_2234_1041"
                        x="-9.72748e-05"
                        y="110.6"
                        width="133.8"
                        height="67.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter14_d_2234_1041"
                        x="23.9999"
                        y="64.6"
                        width="84.8"
                        height="84.8"
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
                        <feMorphology
                            radius="6"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="8.2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.567308 0 0 0 0 0.567308 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2234_1041"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2234_1041"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        );
    },
);
export default NavigationMap;
