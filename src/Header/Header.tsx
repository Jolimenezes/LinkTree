import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-16 bg-red-900 text-white flex items-center z-50 border-b border-white/10 shadow-sm">
            <div className="container mx-auto flex justify-between items-center px-8">
                <Logo />
                <Menu />
            </div>
        </header>
    );
}