'use client'
export default function FeaturedSkeleton(){
    return(
        <div className="animate-pulse w-full max-w-[800px] mx-auto h-auto">
        <div className="h-full rounded-3xl">
          <div className="md:basis-1/2">
            <div>
              <div className="h-[445px] relative">
                <div className="relative w-full h-full">
                  <div className="w-full h-full bg-gray-200 rounded-md"></div>
                  
                  <div className="absolute inset-0 bg-black opacity-70 rounded-md"></div>
                </div>
        
      {/*         
                <footer className="absolute bottom-5 left-3 flex flex-col space-y-2 z-10 px-5">
                  <div className="h-8 bg-gray-200 w-[280%] rounded-md"></div>
                  <nav className='flex justify-between items-center pr-2 w-full'>
                    <span className="h-7 bg-gray-200 rounded-full w-[140%]"></span>
                    <span className="h-7 bg-gray-200 rounded-md w-14"></span>
                  </nav>             
                </footer>   */}
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
           
    )
}