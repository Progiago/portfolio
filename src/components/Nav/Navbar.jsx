
import styles from "./Nav.module.css"
import logo from "../../assets/capivara.png"

const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <img className={styles.logo} src={logo} alt="logo" />
                <ul className={styles.navlist}>
                    <li className={styles.navbarlink}>
                        <a className={styles.links} href="/">item 1</a>
                    </li>
                    <li className={styles.navbarlink}>
                        <a className={styles.links} href="/">item 2</a>
                    </li>
                    <li className={styles.navbarlink}>
                        <a className={styles.links} href="/">item 3</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default Navbar