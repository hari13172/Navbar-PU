"use client"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function HeaderTopBar() {
    return (
        <div className="bg-gradient-to-r from-[#4b0082] to-[#003087] text-white py-3 px-4 md:px-6 rounded-b-[30px] shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm mb-2 md:mb-0 font-semibold italic">
                    <span className="mr-2">அறிவால் விளையும் உலகு</span>
                </div>
                <div className="flex items-center text-sm">
                    <span className="mr-2">GSTIN: 33AAAJP0951B1ZP | CSR Reg.No: CSR0061509</span>
                    <div className="flex space-x-3 ml-4">
                        <a href="#" aria-label="Facebook" className="hover:text-yellow-300 transition-all hover:scale-110">
                            <Facebook className="h-4 w-4" />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition-all hover:scale-110">
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-yellow-300 transition-all hover:scale-110">
                            <Twitter className="h-4 w-4" />
                        </a>
                        <a href="#" aria-label="Youtube" className="hover:text-yellow-300 transition-all hover:scale-110">
                            <Youtube className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

