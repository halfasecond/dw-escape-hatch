import { Link } from 'react-router-dom'

const Menu: React.FC<{ links: string[] }> = ({ links }) => {
    return (
        <ul>
            {links.map((link: string, i: number) =>
                <li key={i}><Link to={`/${link}`}>{link}</Link></li>
            )}
        </ul>
    )
}

export default Menu