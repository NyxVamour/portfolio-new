import ToC from "../components/ToC";
import type { ToCHeader } from "../components/ToC";
import styles from "./project.module.css";

export default function UrbanSprouts() {
    const tocHeaders: ToCHeader[] = [
        { title: "Project Purpose and Goal", id: "projectPurpose" },
        { title: "Web Stack and Explanation", id: "webStack" },
        { title: "The Original Games", id: "originalGames" },
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
                            For my co-op, I was tasked with completing three
                            games built by several students from the Web
                            Development and Interactive Media programs,
                            respectively. There were three teams of students,
                            each tasked with making one game each. The games
                            were meant to be educational games to teach 8 to
                            13-year-olds more about life cycles of plants, or
                            food recipes (with flexibility to account for people
                            who did not have all ingredients available), or just
                            about agriculture in general.
                        </p>
                    </div>
                </section>
                <section>
                    <h2 id="webStack" className={`${styles.title}`}>
                        Web Stack and Explanation
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            Since I was making a game, I decided to just
                            continue from where they left off, and they only
                            used vanilla JavaScript. At the time, I also didn’t
                            want to deal with learning a new framework or Godot,
                            since time was limited. I also watched a few videos
                            on people making games and it was mostly JavaScript
                            with canvas.
                        </p>
                    </div>
                </section>
                <section>
                    <h2 id="originalGames" className={`${styles.title}`}>
                        The Original Games
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            When I received the games, there were several
                            issues. The different games had different art styles
                            (and fonts), the theme chosen was a space theme, and
                            I felt that the games lacked depth and educational
                            value. Additionally, all the games used different
                            HTML files, so the pages would reload.
                        </p>
                        <h3 className={`${styles.subTitle}`}>Food Cycle</h3>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts01.png"
                                alt="Food Cycle map selection"
                            ></img>
                            <figcaption>Food Cycle map selection</figcaption>
                        </figure>
                        <p>
                            The food cycle game claimed to teach kids about the
                            growth cycle of tomatoes, the process of going from
                            farm to stores, and how to compost and plant seeds.
                            Each level was supposed to teach the kids about a
                            specific topic. One initial level was created, and
                            the player was tasked with locating each stage of a
                            tomato shown by the icons on the top left. The
                            movement was using arrow keys, and the level was
                            easily completed in less than 1 minute.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts02.png"
                                alt="Food Cycle modal and game"
                            ></img>
                            <figcaption>Food Cycle modal and game</figcaption>
                        </figure>
                        <p>
                            I felt like the length of the level was very
                            insufficient, and the difficulty was hardly trivial
                            for the age bracket.
                        </p>
                        <h3 className={`${styles.subTitle}`}>Kitchen Quest</h3>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts03.png"
                                alt="Kitchen Quest starting screen"
                            ></img>
                            <figcaption>
                                Kitchen Quest starting screen
                            </figcaption>
                        </figure>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts04.png"
                                alt="Kitchen Quest level select"
                            ></img>
                            <figcaption>Kitchen Quest level select</figcaption>
                        </figure>
                        <p>
                            This was a simple food-catching game. Mechanically,
                            it was fine. However, there were several issues. The
                            first problem was that players were immediately
                            thrust into the game with no allowance to learn what
                            the required ingredients were. Second, you only had
                            to collect one of each of the required ingredients,
                            and once it was complete, the level was over. So
                            there was also this issue of level length. Third,
                            there was an issue with previous games made for the
                            client, where they wanted kids not to worry about
                            missing certain ingredients, whether they didn’t
                            have ingredients on hand or if they couldn’t afford
                            them.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts05.png"
                                alt="Kitchen Quest game"
                            ></img>
                            <figcaption>Kitchen Quest game</figcaption>
                        </figure>
                        <h3 className={`${styles.subTitle}`}>Harvest Time</h3>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts06.png"
                                alt="Harvest Time starting screen"
                            ></img>
                            <figcaption>
                                Harvest Time starting screen
                            </figcaption>
                        </figure>
                        <p>
                            Harvest Time is a card sorting game where you flip
                            cards to try to match and make a pair. After you
                            found a pair, the cards would automatically get
                            sorted into either a “Fruits” or “Roots” basket.
                            This seemed like a bit of an issue to me since I
                            felt like the sorting could have been a much more
                            impactful game than matching cards and then having
                            it automatically be sorted.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts07.png"
                                alt="Harvest Time menus and game"
                            ></img>
                            <figcaption>Harvest Time menus and game</figcaption>
                        </figure>
                    </div>
                </section>
                <section>
                    <h2 id="problemsAndThought" className={`${styles.title}`}>
                        Problems and Thought Process
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            I had to improve the three games and also connect
                            them all into a single hub within 2 months. I felt
                            like the games were not educational enough, and they
                            were not long enough to be fun. I also had to redo
                            the assets and create a consistent style throughout
                            the games.
                        </p>
                        <p>
                            First, I had to assess the situation and see if I
                            could improve the existing games or need to make new
                            ones.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts08.png"
                                alt="My initial plans for the games"
                            ></img>
                            <figcaption>
                                My initial plans for the games
                            </figcaption>
                        </figure>
                        <p>
                            I felt like Kitchen Quest (the food-catching game)
                            was the most feasible one to improve upon, so it was
                            the first game I started with.
                        </p>
                        <h3 className={`${styles.subTitle}`}>Kitchen Quest</h3>
                        <p className={`${styles.issuesP}`}>
                            The main issues were
                        </p>
                        <ol className={`${styles.issuesList}`}>
                            <li>Length of the level</li>
                            <li>
                                Have recipes that are flexible to teach kids
                                about different ways to make one dish
                            </li>
                            <li>
                                Show the recipes before playing so they can
                                prepare
                            </li>
                            <li>No difficulty settings</li>
                        </ol>
                        <h3 className={`${styles.subTitle}`}>Harvest Time</h3>
                        <p>
                            I wanted to capitalize on the sorting part instead
                            of the matching game. So I decided to make an
                            “unlimited time” game where you had to keep sorting
                            produce faster and faster over time. That way, kids
                            could learn/memorize certain information about
                            produce and have a challenging game.
                        </p>
                        <h3 className={`${styles.subTitle}`}>Food Cycle</h3>
                        <p>
                            I wanted to make a grid management game where you
                            had to grow and manage plants, while also avoiding
                            things such as too much sun or pests trying to eat
                            specific plants. However, there wasn’t enough time
                            to complete the assets and code for this game, so I
                            was instructed to only do two games.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts09.png"
                                alt="Urban Sprouts Academy initial menu, hub, and
                                final hub"
                            ></img>
                            <figcaption>
                                Urban Sprouts Academy initial menu, hub, and
                                final hub
                            </figcaption>
                        </figure>
                        <p>
                            When I was making the game hub, I was starting to
                            figure out a consistent art style for all the
                            assets, and I needed something I could produce fast
                            and easily. Luckily, I’m kind of used to making cute
                            vector art.
                        </p>
                        <h3 className={`${styles.subTitle}`}>Kitchen Quest</h3>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts10.png"
                                alt="Kitchen Quest assets, difficulty select, and initial game design"
                            ></img>
                            <figcaption>
                                Kitchen Quest assets, difficulty select, and
                                initial game design
                            </figcaption>
                        </figure>
                        <p>
                            For my first change, I decided to have the player
                            fill out orders at a restaurant in order to increase
                            the level length.
                        </p>
                        <p>
                            When I was making this game, it really dawned on me
                            how many assets I’d have to make, and how I’d draw
                            each of them in this cute art style consistently. I
                            didn’t realize I’d have to make the background, and
                            the amount of produce and dishes I had to draw.{" "}
                        </p>
                        <p>
                            I also realized that having a character to give
                            commentary and instructions while playing would be
                            extremely useful and fun. I initially started with a
                            temporary character that looked like me, but I
                            started finding it weird, and I made a goofy chef
                            character.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts11.png"
                                alt="Kitchen Quest initial vs final designs for the chef"
                            ></img>
                            <figcaption>
                                Kitchen Quest initial vs final designs for the
                                chef
                            </figcaption>
                        </figure>
                        <p>
                            This character also allowed me to say certain things
                            with certain dishes to allow variety in real life.
                            In the game, the dishes only required 4 ingredients,
                            but through the character, I could explain that you
                            could use more.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts12.png"
                                alt="Kitchen Quest game with hands and visible hitboxes"
                            ></img>
                            <figcaption>
                                Kitchen Quest game with hands and visible
                                hitboxes
                            </figcaption>
                        </figure>
                        <p>
                            I ended up changing the pot to a pair of hands
                            because it was either I make the hitbox accurate and
                            make it only catch from the top, which felt bad when
                            you just barely missed produce, or I make it catch
                            from the sides, which ended up feeling weird.
                        </p>
                        <p>
                            I eventually ran into a problem of memory leaks
                            because I wasn’t removing previous games’ classes.
                            So there was a lot of refactoring involved.
                        </p>
                        <h3 className={`${styles.subTitle}`}>Crop Drop</h3>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts13.png"
                                alt="Crop Drop play screen"
                            ></img>
                            <figcaption>Crop Drop play screen</figcaption>
                        </figure>
                        <p>
                            I renamed Harvest Time to Crop Drop just because I
                            love a good rhyme. I settled on making a “highscore”
                            card sorting game for this game to test people’s
                            memory. I felt like this was a better way to make it
                            fun and educational.
                        </p>
                        <p>
                            Before you start playing, you select a category Here
                            you could also have difficulty settings that
                            affected the speed at which you get new cards.
                        </p>
                        <figure>
                            <img
                                src="/images/projects/urbanSprouts/urbansprouts14.png"
                                alt="Crop Drop initial game designs"
                            ></img>
                            <figcaption>
                                Crop Drop initial game designs
                            </figcaption>
                        </figure>
                        <p>
                            The first challenge of this game was settling on all
                            the categories, picking out popular, well-known
                            produce, and learning how to draw them all.
                            Thankfully, the drawing process got a lot easier as
                            I kept making more. I eventually got more consistent
                            with the art style.
                        </p>
                        <p>
                            The next challenge was getting the increasing timing
                            correctly every next set of intervals. There were
                            issues with the new interval timers changing and the
                            GSAP animations not syncing up.
                        </p>
                    </div>
                </section>
                <section>
                    <h2 id="lessonsLearned" className={`${styles.title}`}>
                        Lessons Learned
                    </h2>
                    <div className={`${styles.sectionPar}`}>
                        <p>
                            This was my true test of knowledge using JavaScript
                            classes and managing all these objects. Making sure
                            there were no memory leaks and that I properly
                            disposed of any objects from previous games. There
                            was a lot of graphic design work, and I’m glad I was
                            able to get a handle on the art style as time
                            passed. I also learned how much goes into making a
                            game. Even the game hub required quite a bit of
                            effort. I was thoroughly challenged by this project,
                            and I’m looking forward to hopefully making more
                            games.
                        </p>
                    </div>
                </section>
            </section>
        </section>
    );
}
