
export default function Header() {
    return (
        <>
            
            <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-6">

                    <div className="animate-pulse flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-slate-200" />
                        <div className="h-4 w-24 rounded bg-slate-200 hidden sm:block" />
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <div className="animate-pulse h-4 w-12 rounded bg-slate-200" />
                        <div className="animate-pulse h-4 w-12 rounded bg-slate-200" />
                        <div className="animate-pulse h-4 w-16 rounded bg-slate-200" />
                        <div className="animate-pulse h-4 w-16 rounded bg-slate-200" />
                        <div className="animate-pulse h-4 w-10 rounded bg-slate-200" />
                    </nav>

                    <div className="animate-pulse">
                        <div className="h-9 w-28 rounded-lg bg-slate-200" />
                    </div>
                </div>
            </header>

            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50 px-2 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
                <div className="flex justify-around items-center max-w-md mx-auto">
                    
                
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="animate-pulse flex flex-col items-center justify-center gap-2 w-14 py-1">
                   
                            <div className="w-5 h-5 rounded-full bg-slate-200" />
                 
                            <div className="h-2 w-8 rounded bg-slate-200" />
                        </div>
                    ))}

                </div>
            </nav>
        </>
    );
}
