import * as styles from './styles.module.scss'

function AppBar(props) {
    return (
        <nav className={styles.appbar}>
            <ul className="ul">
                <li>{props.brand}</li>
                <li>{props.company}</li>
                <li>{props.login}</li>
            </ul>
        </nav>
    )
}

export default AppBar