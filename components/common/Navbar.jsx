import logoImage from "@/public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import SignInOut from "../auth/SignInOut"
const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link href="/">
                        <Image
                            src={logoImage}
                            alt="Eventry"
                            className="h-[45px]"
                        />
                    </Link>
                </div>
                <ul className="flex gap-4 text-[#9C9C9C]">
                    <li>
                        <SignInOut />
                    </li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
