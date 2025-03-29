"use client"

export function HeaderUniversityInfo() {
    return (
        <div className="py-6 text-center bg-gradient-to-b from-white to-gray-100 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="w-36 h-36 relative">
                    <img
                        src="/logo.jpeg"
                        alt="Periyar University Logo"
                        className="object-contain max-h-full drop-shadow-md"
                    />
                </div>
                <div className="flex-1 text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-[#4b0082]">பெரியார் பல்கலைக்கழகம்</h2>
                    <h3 className="text-lg md:text-xl text-[#4b0082]">அரசு பல்கலைக்கழகம், சேலம்.</h3>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#003087] mt-2 uppercase">PERIYAR UNIVERSITY</h1>
                    <p className="text-sm md:text-base mt-2">NAAC 'A++' Grade with CGPA 3.61 (Cycle - 3)</p>
                    <p className="text-sm md:text-base">State University - NIRF Rank 56 - State Public University Rank 25</p>
                    <p className="text-sm md:text-base">Salem-636011, Tamil Nadu, India.</p>
                </div>
                <div className="w-28 h-28 relative">
                    {/* Periyar portrait image */}
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-36 h-36">
                            <img
                                src="/IMG.jpg"
                                alt="Periyar University Logo"
                                className="object-contain max-h-full drop-shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

