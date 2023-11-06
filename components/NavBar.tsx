import Link from "next/link"
import Image from "next/image"
import {NAV_LINKS} from "@/constants"
import Button from "@/components/Button"
const NavBar = () => {
	return (
		<nav className=" flexBetween max-container padding-container relative z-30 py-5">
			<Link href="/">
			<Image src="/hilink-logo.svg" height={29} width={74} alt="logo"/>
			
			</Link>
			<ul className="hidden h-full lg:flex gap-12">
             {NAV_LINKS.map((link : any) => (
              <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
             	))}
			</ul>
			<div className="hidden lg:flexCenter">
			<Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
			</div>

			<Image src="menu.svg" alt="hamburger menu" height={32} width={32} className="inline-block cursor-pointer lg:hidden"/>
		</nav>
	)
}

export default NavBar