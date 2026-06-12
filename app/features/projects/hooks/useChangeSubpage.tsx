import { useGSAP } from "@gsap/react";
import gsap from "~/client/gsapClient";
import { useEffect, useState } from "react";
import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";
import { projectsData, type ProjectDataProps } from "../data/projectsData";

type useChangeSubpageProps = {
    selectedProjectID: number;
    setSelectedProjectID: React.Dispatch<React.SetStateAction<number>>;
    setProjectInfo: React.Dispatch<
        React.SetStateAction<ProjectDataProps | undefined>
    >;
    pageRefs: pageRefsProps;
};

export default function useChangeSubpage({
    selectedProjectID,
    setSelectedProjectID,
    setProjectInfo,
    pageRefs,
}: useChangeSubpageProps) {
    const {
        subpageRef,
        closeSubpageBtnRef,
        subpageMainRef,
        projectHeaderRef,
        projectHeaderTextGrpRef,
        projectHeaderText1Ref,
        projectHeaderText2Ref,
        summaryRef,
        subpageBodyRef,
    } = pageRefs;
    const [isSubpageOpen, setIsSubpageOpen] = useState(false);

    gsap.registerPlugin(useGSAP);

    function changeInfo() {
        const data = projectsData.find((data) => data.id === selectedProjectID);
        setProjectInfo(data);
    }

    function openSubpage(tl: gsap.core.Timeline) {
        const subpage = subpageRef.current;
        const header = projectHeaderRef.current;
        const headerTextGrp = projectHeaderTextGrpRef.current;
        const headerText1 = projectHeaderText1Ref.current;
        const headerText2 = projectHeaderText2Ref.current;
        const headerBtn = closeSubpageBtnRef.current;
        const summary = summaryRef.current;
        const body = subpageBodyRef.current;

        tl.fromTo(
            subpage,
            { scaleX: 0, autoAlpha: 0 },
            {
                duration: 0.3,
                scaleX: 1,
                autoAlpha: 1,
            },
            "0",
        )
            .fromTo(
                header,
                { scaleX: 0, autoAlpha: 0 },
                {
                    duration: 0.3,
                    scaleX: 1,
                    autoAlpha: 1,
                },
            )
            .fromTo(
                headerBtn,
                {
                    x: -15,
                    autoAlpha: 0,
                },
                {
                    duration: 0.3,
                    x: 0,
                    autoAlpha: 1,
                    ease: "none",
                },
                ">0.2",
            )
            .fromTo(
                headerTextGrp,
                { scaleY: 0 },
                {
                    duration: 0.2,
                    transformOrigin: "center center",
                    scaleY: 1,
                },
                "0.7",
            )
            .fromTo(
                [headerText1, headerText2],
                { x: 20, autoAlpha: 0 },
                {
                    duration: 0.3,
                    x: 0,
                    ease: "none",
                },
            )
            .to(
                [headerText1, headerText2],
                {
                    duration: 0.4,
                    autoAlpha: 1,
                },
                "<",
            )
            .fromTo(
                headerText1,
                { text: "|" },
                { duration: 0.6, text: "PROJECT HACKED" },
                ">-0.2",
            )
            .fromTo(
                headerText2,
                { autoAlpha: 0 },
                {
                    duration: 0.2,
                    repeat: 2,
                    autoAlpha: 1,
                },
                " <-0.6",
            )
            .fromTo(
                [summary, body],
                { x: -15, autoAlpha: 0 },
                {
                    duration: 0.3,
                    x: 0,
                },
                "1",
            )
            .to(
                [summary, body],
                {
                    duration: 0.5,
                    autoAlpha: 1,
                },
                "<",
            );
    }

    function closeSubpage(tl: gsap.core.Timeline) {
        const subpage = subpageRef.current;
        const header = projectHeaderRef.current;
        const headerTextGrp = projectHeaderTextGrpRef.current;
        const headerText1 = projectHeaderText1Ref.current;
        const headerText2 = projectHeaderText2Ref.current;
        const headerBtn = closeSubpageBtnRef.current;
        const summary = summaryRef.current;
        const body = subpageBodyRef.current;

        tl.to(
            [summary, body],
            {
                duration: 0.3,
                x: -15,
                autoAlpha: 0,
            },
            "0",
        )
            .to(
                [headerText1, headerText2],
                {
                    duration: 0.1,
                    autoAlpha: 0,
                },
                "<",
            )
            .to(
                headerBtn,
                {
                    duration: 0.2,
                    x: -15,
                    autoAlpha: 0,
                },
                "<",
            )
            .to(
                headerTextGrp,
                {
                    duration: 0.2,
                    scaleY: 0,
                },
                ">-0.1",
            )
            .to(header, {
                duration: 0.3,
                scaleX: 0,
            })
            .to(subpageRef.current, {
                scaleX: 0,
                duration: 0.2,
            })
            .to(subpageRef.current, {
                duration: 0.4,
                autoAlpha: 0,
                onComplete: () => {
                    if (!subpageMainRef.current) return;
                    subpageMainRef.current.scrollTop = 0;
                },
            });
    }

    useEffect(() => {
        function closeBtnAction() {
            setSelectedProjectID(0);
        }

        const subpageBtn = closeSubpageBtnRef.current;

        if (!subpageBtn) return;
        subpageBtn.addEventListener("click", closeBtnAction);

        return () => {
            if (!subpageBtn) return;
            subpageBtn.removeEventListener("click", closeBtnAction);
        };
    }, [closeSubpageBtnRef]);

    useGSAP(() => {
        const tl = gsap.timeline();

        switch (isSubpageOpen) {
            case true:
                closeSubpage(tl);
                setIsSubpageOpen(false);
                break;
            case false:
                if (!selectedProjectID) return;
                changeInfo();
                openSubpage(tl);
                setIsSubpageOpen(true);
                break;
            default:
                break;
        }
    }, [selectedProjectID]);
}
