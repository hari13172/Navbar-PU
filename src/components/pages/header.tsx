"use client"
import { Search, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Input } from "../../components/ui/input"

export function Header() {
    return (
        <div className="flex flex-col w-full">
            {/* Mini Navbar - with gradient background */}
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

            {/* University title section - with gradient background */}
            <div className="py-6 text-center bg-gradient-to-b from-white to-gray-100 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="w-28 h-28 relative">
                        <img
                            src="/src/assets/logo.jpeg"
                            alt="Periyar University Logo"
                            className="object-contain max-h-full drop-shadow-md"
                        />
                    </div>
                    <div className="flex-1 text-center">
                        <h2 className="text-xl md:text-2xl font-bold text-[#4b0082]">ப</h2>
                        <h3 className="text-lg md:text-xl text-[#003087]">அரசு பல்கலைக்கழகம், சேலம்.</h3>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#003087] mt-2 uppercase">PERIYAR UNIVERSITY</h1>
                        <p className="text-sm md:text-base mt-2">NAAC 'A++' Grade with CGPA 3.61 (Cycle - 3)</p>
                        <p className="text-sm md:text-base">State University - NIRF Rank 56 - State Public University Rank 25</p>
                        <p className="text-sm md:text-base">Salem-636011, Tamil Nadu, India.</p>
                    </div>
                    <div className="w-28 h-28 relative">
                        {/* Periyar portrait image */}
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center drop-shadow-md">
                                <img
                                    src="/src/assets/IMG.jpg"
                                    alt="Periyar University Logo"
                                    className="object-contain max-h-full drop-shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Bar - with gradient background */}
            <div className="bg-gradient-to-r from-[#003087] to-[#4b0082] py-4 shadow-lg">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-4 gap-4">

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
                        <a
                            href="#"
                            className="bg-[#6a0dad] text-white px-5 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-[#8a2be2] hover:shadow-md hover:-translate-y-0.5"
                        >
                            <span className="text-sm font-medium">Home</span>
                        </a>
                        <div className="relative w-full md:w-[650px]">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full pl-10 py-2 rounded-full bg-white/90 border-none shadow-inner"
                            />
                        </div>
                        <a
                            href="#"
                            className="bg-[#6a0dad] text-white px-5 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-[#8a2be2] hover:shadow-md hover:-translate-y-0.5"
                        >
                            <span className="text-sm font-medium">Roadmap</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

