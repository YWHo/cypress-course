import NavItem from "./NavItem"

const navItems = [
    {
        label: 'Why Cypress?',
        path: '/',
        dataTest: 'nav-why-cypress'
    },
    {
        label: 'Overview',
        path: '/overview',
        dataTest: 'nav-why-overview'
    },
    {
        label: 'Fundamentals',
        path: '/fundamentals',
        dataTest: 'nav-why-fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms',
        dataTest: 'nav-why-forms'
    },
    {
        label: 'Examples',
        path: '/examples',
        dataTest: 'nav-why-examples'
    },
    {
        label: 'Component',
        path: '/component',
        dataTest: 'nav-why-component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        dataTest: 'nav-why-best-practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem
                        key={item.label}
                        label={item.label}
                        path={item.path}
                        dataTest={item.dataTest}
                    />
                ))
            }
        </ul>
    )
}