import Link from 'next/link'
import * as styles from './styles.module.scss'

function NavBar() {
    return (
        <nav className={styles.appbar}>
            <ul className="ul">
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                    <Link href="/signup">
                        <a>Sign Up</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar