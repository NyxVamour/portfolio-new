import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import MasterLayout from "~/features/masterLayout/MasterLayout";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Charlize's Website" },
        {
            name: "description",
            content: "Charlize San Gabriel's portfolio website",
        },
    ];
}

export default function Home() {
    return <MasterLayout />;
}
