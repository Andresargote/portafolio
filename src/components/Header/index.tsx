import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo-andres.svg";
import styles from "../../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Image
                    src={Logo}
                    width={60}
                    height={60}
                    alt="logo-andresargote"
                />
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href="/blog">
                            <a>
                                Blog
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}