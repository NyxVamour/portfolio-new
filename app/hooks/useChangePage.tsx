import { useGSAP } from "@gsap/react";
import gsap from "../client/gsapClient";

export default function useChangePage(currentPage: string) {
    gsap.registerPlugin(useGSAP);

    function closeHome(tl: gsap.core.Timeline) {
        const homeMain = document.getElementById("hackingMain");
        const hackingWindow = document.getElementById("hackingWindow");
        if (!homeMain) return;

        tl.to(hackingWindow, {
            scaleX: 0,
            autoAlpha: 0,
        });
    }

    function openPage() {}
    useGSAP(() => {
        const tl = gsap.timeline();
        switch (currentPage) {
            case "profile":
                closeHome(tl);
                break;

            default:
                break;
        }
    }, [currentPage]);
}
