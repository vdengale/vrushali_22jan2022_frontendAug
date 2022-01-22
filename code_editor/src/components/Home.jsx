import React from 'react'
import CodeEditor from './CodeEditor'

function Home() {
    return (
        <>
         <div className='top'>
             <CodeEditor/>
             <CodeEditor/>
             <CodeEditor/>
         </div>
         <div className='bottom'></div>
        </>
       
    )
}

export default Home
