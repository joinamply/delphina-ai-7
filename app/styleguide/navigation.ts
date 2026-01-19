export interface NavItem {
    name: string
    href: string
}

export interface NavSection {
    title: string
    items: NavItem[]
}

export const navigation: NavSection[] = [
    {
        title: "Foundation",
        items: [
            { name: "Design Tokens", href: "/styleguide" },
        ]
    },
    {
        title: "Components",
        items: [
            { name: "Card", href: "/styleguide/components/card" },
            { name: "Input", href: "/styleguide/components/input" },
            { name: "Slider", href: "/styleguide/components/slider" },
            { name: "Tabs", href: "/styleguide/components/tabs" },
        ]
    }
]
