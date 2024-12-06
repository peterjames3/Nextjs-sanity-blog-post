'use client';
import { useEffect } from 'react';
export default function Error({
    error, reset
}: {
    error: Error & {digest? : string};
    reset: () => void;
}){
    useEffect(()=>{
        console.log(`${error.name}: ${error.message}`);
    }, [error])
    return(
        <main className="grid place-content-center h-screen ">
        <h2 className="text-center font-medium">{error.name} {error.message}!</h2>
        <button type='button'
          className="mt-4 rounded-md bg-softRed px-4 py-2 text-sm text-white transition-colors hover:bg-orange-600"
          onClick={
        
            () => reset()
          }
        >
          Try again
        </button>
      </main>
    )
}