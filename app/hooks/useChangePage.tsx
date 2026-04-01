import { useGSAP } from "@gsap/react";
import gsap from "../client/gsapClient";
import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";

export default function useChangePage(
    currentPage: string,
    pageRefs: pageRefsProps,
) {
    gsap.registerPlugin(useGSAP);
    const { hackingRef, profileRef, aboutRef, hackingWindowRef } = pageRefs;

    function closeHome(tl: gsap.core.Timeline) {
        if (!hackingRef) return;

        tl.to(hackingWindowRef.current, {
            scaleX: 0,
            autoAlpha: 0,
        });
    }

    function openPage(
        tl: gsap.core.Timeline,
        pageRef:
            | React.RefObject<HTMLDivElement | null>
            | React.RefObject<HTMLElement | null>,
    ) {
        tl.to(pageRef.current, {
            autoAlpha: 1,
        });
    }

    useGSAP(() => {
        const tl = gsap.timeline();
        switch (currentPage) {
            case "profile":
                closeHome(tl);
                openPage(tl, profileRef);
                break;
            case "about":
                closeHome(tl);
                openPage(tl, aboutRef);
            default:
                break;
        }
    }, [currentPage]);
}
