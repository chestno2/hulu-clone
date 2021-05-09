import Image from "next/image"
import HeaderItem from "./HeaderItem"
import  { BadgeCheckIcon, ClockIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title = "search" Icon={HomeIcon}  />
                 <HeaderItem title ="Search" Icon = {SearchIcon} />                 
                <HeaderItem title = "Search" Icon={CollectionIcon}  /> 
                <HeaderItem title = "Search" Icon={BadgeCheckIcon}  />
                <HeaderItem title = "User" Icon={UserIcon}  />
                <HeaderItem title = "Search" Icon={LightningBoltIcon}  />
                <HeaderItem title = "Account" Icon={ClockIcon}  />
            </div>
            
             <Image src="https://links.papareact.com/ua6" width={200} 
             height={100} />
        </header>
    )
}

export default Header
