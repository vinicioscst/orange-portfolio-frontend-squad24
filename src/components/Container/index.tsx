import React from 'react';

export function Container({ children } : { children: React.ReactNode }){
    return(
        <div className='max-w-screen-xl px-8 mx-auto'>
            {children}
        </div>
    )
}