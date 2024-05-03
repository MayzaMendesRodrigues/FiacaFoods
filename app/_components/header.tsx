import { Button } from "@/app/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
    return (  
        <div className="flex justify-between">
            <Image src="./logocompleto.svg" alt="logo food" height={30} width={100}/>
            <Button 
            size="icon"
            variant="secondary"
            className="border-none bg-transparent">
                <MenuIcon/>
            </Button>
        </div>
    );
}
 
export default Header ;