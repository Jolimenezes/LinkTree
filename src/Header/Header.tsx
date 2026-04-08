import { Logo } from "./Logo"
import { Menu } from "./Menu"

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-14 bg-amber-950 py-4 text-white flex items-center justify-between px-8 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <Menu />
            </div>
        </header>
    );
}