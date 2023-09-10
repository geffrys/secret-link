import { Link } from 'react-router-dom'


export default function DefaultLayout() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Sign Off</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{ }</main>
        </>
    )
}
