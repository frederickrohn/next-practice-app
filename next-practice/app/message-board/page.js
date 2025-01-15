import Link from "next/link"; // Import Link for navigation

export default function MessageBoard(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-8">
            <h1 className="text-2xl font-bold mb-4">The Message Board</h1>
            <p className="text-lg text-gray-600 mb-8">
                This is the Message Board. Write whatever you want here!
            </p>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <Link 
                    href="/" 
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                >Go back to Home Page</Link>
                <Link 
                    href="/practice" 
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                >Go back to the practice page</Link>
            </div>
        </div>
    )
}