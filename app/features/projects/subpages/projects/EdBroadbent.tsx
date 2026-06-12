import ToC from "../components/ToC";
import type { ToCHeader } from "../components/ToC";
import styles from "./project.module.css";

export default function EdBroadbent() {
    const tocHeaders: ToCHeader[] = [
        { title: "Project Purpose and Goal", id: "projectPurpose" },
        { title: "Web Stack and Explanation", id: "webStack" },
        { title: "Problems and Thought Process", id: "problemsAndThought" },
        { title: "Lessons Learned", id: "lessonsLearned" },
    ];

    return (
        <section>
            <ToC tocHeaders={tocHeaders} />
            <section className={`${styles.body}`}>
                <section>
                    <h2 id="projectPurpose" className={`${styles.title}`}>
                        Project Purpose and Goal
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            Durham College collaborated with TeachingCity Oshawa
                            to develop a web app for the newly renovated Ed
                            Broadbent Waterfront Park. It was to showcase the
                            park, learn things about certain points of interest
                            (such as history or booking the amphitheatre for
                            events), or to see what the park looks like. The
                            initial foundation of the app was built by a team of
                            Web Developer students and Interactive Media Design
                            students. I was instructed to be the lead of the
                            development team.
                        </p>
                        <p>
                            After graduation, I got hired under contract to
                            finish the web app and make any changes.
                        </p>
                    </div>
                </section>
                <section>
                    <h2 id="webStack" className={`${styles.title}`}>
                        Web Stack and Explanation
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            For this project, we used Next.js because there was
                            going to be a lot of state management, and we needed
                            image optimization. We also used Leaflet for the
                            interactive map because it had a React version, and
                            it allowed us to use custom SVGs for the map.
                            Originally, they wanted animated 3d models with
                            AR/VR, but it was too costly so we settled for
                            gyroscope controls using Photo Sphere Viewer.
                        </p>

                        <figure className={styles.horizontalFig}>
                            <img
                                src="/images/projects/edBroadbent/photosphere.png"
                                alt="Photo Sphere Viewer pages of the app"
                            ></img>
                            <figcaption>360 Experience</figcaption>
                        </figure>
                    </div>
                </section>
                <section>
                    <h2 id="problemsAndThought" className={`${styles.title}`}>
                        Problems and Thought Process
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            Working with a team was a learning process, and
                            getting the developers on the same page for
                            labelling, file structure, and code structure was a
                            challenge. We also had to do several back-and-forths
                            with the design students whenever there was
                            incompatibility or if the colors weren’t accessible
                            enough.
                        </p>
                        <figure className={styles.horizontalFig}>
                            <img
                                src="/images/projects/edBroadbent/oldDesigns.png"
                                alt="Old map and app designs of the Ed Broadbent Waterfront Park app"
                            ></img>
                            <figcaption>Old map and app designs</figcaption>
                        </figure>
                        <p>
                            When I fully took over the project, I redesigned the
                            map as well as some icons. Some of the older visuals
                            were simple, but not in the style I wanted. I
                            originally made a diagrammatic map, but it was too
                            tall and I had to compress certain parts of the map.
                        </p>
                    </div>
                </section>
                <section>
                    <h2 id="lessonsLearned" className={`${styles.title}`}>
                        Lessons Learned
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <figure>
                            <img
                                src="/images/projects/edBroadbent/newDesigns.png"
                                alt="New map design, app design, and icons for the Ed Broadbent Waterfront Park app"
                            ></img>
                        </figure>
                        <p>
                            When I was leading the dev team, I learned how
                            important meeting up and organizing all our thoughts
                            and plans were. My knowledge of React hooks was
                            tested in this project, and I was also able to
                            better understand how other frameworks work in
                            tandem with React/Next. I also started practicing
                            writing cleaner commits, so I could practice and be
                            ready when I worked with a team. I also improved my
                            graphic design skills when I was updating the icons
                            and remaking the map.
                        </p>
                    </div>
                </section>
            </section>
        </section>
    );
}
