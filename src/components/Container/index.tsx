import React from 'react';

export function Container({ children } : { children: React.ReactNode }){
    return(
        <div className='max-w-screen-xl px-5 mx-auto'>
            {children}
        </div>
    )
}