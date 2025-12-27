import React from 'react'
import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'


function Header() {
    const [isDark, setIsDark] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

        const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false);
    }

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark")
        setIsDark(isDarkMode)
    }, [])

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark")
        setIsDark(!isDark)
    }

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
    ]

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <a href="#" className='text-xl font-semibold text-foreground'>Corporate</a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-8 md:flex">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className='text-sm text-muted-foreground hover:text-foreground'>
                                    {link.name}
                                </a>
                            ))}
                            <button onClick={toggleTheme} aria-label='Toggle theme'>
                                {isDark ? <Sun className="h-5 w-5 text-foreground" /> : <Moon className="h-5 w-5 text-foreground" />}
                            </button>
                        </div>

                        {/* Mobile Menu Button*/}
                        <div className="flex items-center gap-2 md:hidden">
                            <button onClick={toggleTheme} aria-label='Toggle theme'>
                                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                            <button onClick={() => setIsOpen(!isOpen)} aria-label='Toggle menu'>
                                {isOpen ? <X className='h-5 w-5 text-foreground' /> : <Menu className='h-5 w-5 text-foreground' />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="border-t border-border py-4 md:hidden">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className='text-sm text-muted-foreground hover:text-foreground'>
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Header
