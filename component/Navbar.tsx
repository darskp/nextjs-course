'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Links() {
    const pathname = usePathname()

    return (
        <nav>
            <Link className={`${pathname === '/' ? 'active' : ''}`} href="/">
                Home
            </Link>

            <Link
                scroll={false}
                className={`link ${pathname === '/blog' ? 'active' : ''}`}
                href="/blog"
            >
                Blog
            </Link>
        </nav>
    )
}