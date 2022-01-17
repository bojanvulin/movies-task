import Link from 'next/link'
import styled from 'styled-components'

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
`

const NavListItem = styled.li`
    padding: 8px 16px;
    background-color: #000;
    color: #fff;
    margin-right: 8px;
`

export default function Header() {
    const links = [
        {
            path: '/movies',
            label: 'Movies'
        },
        {
            path: '/series',
            label: 'Series'
        }
    ]

    return (
        <header>
            <NavList>
                {links.map(({ path, label }) => (
                    <NavListItem key={path}>
                        <Link href={path}>
                            <a>{label}</a>
                        </Link>
                    </NavListItem>
                ))}
            </NavList>
        </header>
    )
}
