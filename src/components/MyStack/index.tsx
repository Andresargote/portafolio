import Image from "next/image";
import styles from "../../styles/MyStack.module.css";
import html from "../../../public/html.svg";
import css from "../../../public/css3.svg";
import sass from "../../../public/sass.svg";
import figma from "../../../public/figma.svg";
import js from "../../../public/js.svg";
import ts from "../../../public/ts.svg";
import react from "../../../public/react.svg";
import node from "../../../public/nodejs.svg";
import mongo from "../../../public/mongo.svg";


export default function MyStack() {
    return (
        <div className={styles.MyStack}>
            <h2><span>Stack</span> con el que trabajo:</h2>
            <div className={styles.stack}>
                <div>
                    <ul>
                        <li>
                            <Image src={html} width={48} height={48} alt="html-logo"/>
                            <span>Html</span>
                        </li>
                        <li>
                            <Image src={css} width={48} height={48} alt="css-logo" />
                            <span>Css</span>
                        </li>
                        <li>
                            <Image src={sass} width={48} height={48} alt="sass-logo" />
                            <span>Sass</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Image src={figma} width={48} height={48} alt="figma-logo" />
                            <span>Figma</span>
                        </li>
                        <li>
                            <Image src={js} width={48} height={48} alt="js-logo" />
                            <span>JavaScript</span>
                        </li>
                        <li>
                            <Image src={ts} width={48} height={48} alt="ts-logo" />
                            <span>TypeScript</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Image src={react} width={48} height={48} alt="react-logo" />
                            <span>React</span>
                        </li>
                        <li>
                            <Image src={node} width={48} height={48} alt="node-logo" />
                            <span>Node.js</span>
                        </li>
                        <li>
                            <Image src={mongo} width={48} height={48} alt="mongo-logo" />
                            <span>MongoDB</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}