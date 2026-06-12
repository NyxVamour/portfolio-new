import { useGSAP } from "@gsap/react";
import gsap from "../client/gsapClient";
import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";
import { useEffect, useState } from "react";

export default function useChangePage(
    currentPage: string,
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>,
    pageRefs: pageRefsProps,
) {
    gsap.registerPlugin(useGSAP);
    const {
        backgroundLayerRef,
        hackingRef,
        profileRef,
        aboutRef,
        projectsRef,
        hackingWindowRef,
        pageHeaderRef,
        closeProfileBtnRef,
        closeAboutBtnRef,
        closeProjectsBtnRef,
    } = pageRefs;

    const [previousPage, setPreviousPage] = useState("home");

    function closeHome(tl: gsap.core.Timeline) {
        tl.to(hackingWindowRef.current, {
            scaleX: 0,
            autoAlpha: 0,
        });
    }

    function openHome(tl: gsap.core.Timeline) {
        tl.to(hackingWindowRef.current, {
            scaleX: 1,
            autoAlpha: 1,
        });
    }

    function openPage(
        tl: gsap.core.Timeline,
        pageRef:
            | React.RefObject<HTMLDivElement | null>
            | React.RefObject<HTMLElement | null>,
    ) {
        const page = pageRef.current;
        const bg = backgroundLayerRef.current;
        const header = pageHeaderRef.current;

        tl.to(page, {
            duration: 0.2,
            autoAlpha: 1,
        })
            .to(
                bg,
                {
                    duration: 0.2,
                    filter: "blur(8px)",
                },
                "<",
            )
            .fromTo(
                header,
                { scaleX: 0 },
                {
                    duration: 0.4,
                    transformOrigin: "left center",
                    scaleX: 1,
                },
                ">0.2",
            )
            .fromTo(
                header,
                { autoAlpha: 0 },
                { duration: 0.3, repeat: 2, autoAlpha: 1, ease: "none" },
                "<",
            );
        // .set("._blurLayer_loggy_1", {
        //     backdropFilter: "blur(8px)",
        // });
    }

    function closePage(
        tl: gsap.core.Timeline,
        pageRef: React.RefObject<HTMLDivElement | null>,
    ) {
        if (!pageRef.current) return;

        tl.to(pageRef.current, {
            autoAlpha: 0,
        }).to(
            backgroundLayerRef.current,
            {
                filter: "blur(0px)",
            },
            "<",
        );
    }

    function getCurrentRef(currentPage: string) {
        switch (currentPage) {
            case "profile":
                return profileRef;
            case "about":
                return aboutRef;
            case "projects":
                return projectsRef;
            default:
                break;
        }
    }

    useEffect(() => {
        function closeBtnAction() {
            setCurrentPage("home");
        }

        const elProfile = closeProfileBtnRef.current;
        const elAbout = closeAboutBtnRef.current;
        const elProjects = closeProjectsBtnRef.current;

        if (!elProfile || !elAbout || !elProjects) return;
        elProfile.addEventListener("click", closeBtnAction);
        elAbout.addEventListener("click", closeBtnAction);
        elProjects.addEventListener("click", closeBtnAction);

        return () => {
            if (!elProfile && !elAbout && !elProjects) return;
            elProfile.removeEventListener("click", closeBtnAction);
            elAbout.removeEventListener("click", closeBtnAction);
            elProjects.removeEventListener("click", closeBtnAction);
        };
    }, [closeProfileBtnRef]);

    useGSAP(() => {
        const tl = gsap.timeline();
        switch (currentPage) {
            case "home":
                const currentRef = getCurrentRef(previousPage);
                console.log(currentRef);
                if (currentRef) {
                    closePage(tl, currentRef);
                    openHome(tl);
                }
                break;
            case "profile":
                closeHome(tl);
                openPage(tl, profileRef);
                setPreviousPage("profile");
                break;
            case "about":
                closeHome(tl);
                openPage(tl, aboutRef);
                setPreviousPage("about");
                break;
            case "projects":
                closeHome(tl);
                openPage(tl, projectsRef);
                setPreviousPage("projects");
            default:
                break;
        }
    }, [currentPage]);
}
