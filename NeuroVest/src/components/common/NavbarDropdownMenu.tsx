import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// ICONS
import { FcSettings } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcAreaChart } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



export default function NavbarDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <img src="images/btns/user.png" alt="dropdownMenu" className=" h-[35px] shadow-md rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="fw-bold">
                <DropdownMenuLabel>Workspace</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                    <img src="images/btns/AI-icon.png" className="h-[18px]" /> New Prediction
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer"><FcAreaChart/> Trading Journal</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer"><FcDocument /> View History</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer"><FcSettings /> Settings</DropdownMenuItem>
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem className="cursor-pointer"><FcLock /> Logout</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>Resources</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer"><FcAbout /> About</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer"><FaGithub /> Github</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
