import ToC from "../components/ToC";
import type { ToCHeader } from "../components/ToC";
import styles from "./project.module.css";

export default function BoardHoard() {
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
                            In our Content Management Systems class, we were
                            instructed to create a website selling any type of
                            product. I created Board Hoard - a hobby shop full
                            of geeky items such as comic books, trading card
                            games, figurines, and board games.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/boardHoard/boardhoard01.png"
                                alt="Board Hoard landing page"
                            ></img>
                            <figcaption>Board Hoard landing page</figcaption>
                        </figure>
                    </div>
                </section>
                <section>
                    <h2 id="projectPurpose" className={`${styles.title}`}>
                        Project Purpose and Goal
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            For this project, we were tasked with building an
                            e-commerce website using WordPress and WooCommerce.
                            It was our first experience working with Full Site
                            Editing (FSE) in WordPress. WooCommerce was used to
                            power the online store functionality. The project
                            involved designing and developing the homepage,
                            category pages, product pages, blog pages, and
                            shopping cart experience.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/boardHoard/boardhoard02.png"
                                alt="Board Hoard product page"
                            ></img>
                            <figcaption>Board Hoard product page</figcaption>
                        </figure>
                    </div>
                </section>
                <section>
                    <h2 id="webStack" className={`${styles.title}`}>
                        Web Stack and Explanation
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            There were several knowledge checks we had to face
                            with this project. Version control, learning about
                            WordPress, and full-site editing.
                        </p>
                        <p>
                            This was my first project where we had to create
                            several branches for version control. Trying to wrap
                            my head around it was challenging at first. At
                            first, I kept forgetting to switch branches and I
                            would work on one feature while on the wrong branch.
                        </p>
                        <p>
                            Since I wasn’t too familiar with WordPress yet,
                            there were a lot of issues with me trying to “fight”
                            WordPress for control of things. I was trying to
                            figure out when I had to change things in the theme
                            itself, add variables to the theme, when to change
                            it on the templates, and when to add CSS. I tried to
                            remove most control from the theme since I assumed
                            clients would probably want to be steered in
                            directions. I also tried to minimize the amount of
                            CSS in order for the “end-user” to not be worried
                            about putting them.
                        </p>
                    </div>
                </section>
                <section>
                    <h2 id="lessonsLearned" className={`${styles.title}`}>
                        Lessons Learned
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            I learned a lot about Full Site Editing and how it
                            worked. I learned how much I could include and
                            remove in a theme should a client want less freedom.
                            I learned a lot about commits and how to merge
                            branches. Additionally, I expanded my knowledge on
                            working with WordPress instead of against it.
                        </p>
                    </div>
                </section>
            </section>
        </section>
    );
}
