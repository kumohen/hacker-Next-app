import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({children,title,backButton}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>    
            <div className="container">
                <nav>
                    {backButton && <span onClick={()=> Router.back()} className="back-button">&#x2b05;</span>}
                   <Link href="/"><a><span className="main-title">Hacker Next</span></a></Link>     
                </nav>    
                {children}
            </div>
            <style>{`
            .container{
                max-width:700px;
                margin:0 auto;
                background:#f6f6ef;
            }
            nav{
                background:#f60;
                padding:1em;
            }
            nav > *{
                display:inline-block;
                color:black
            }
            nav a {
                text-decoration:none
            }
            nav .main-title{
                font-weight:body;
            }
            nav .back-button{
                font-size: 25px;
                padding-right:4px;
            }
            `}
            </style>    
        </div>
    );
};

export default Layout;