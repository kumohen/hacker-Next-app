import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';

class Index extends Component {
    static async getInitialProps({req,res,query}){
        let stories ;
        let page;
       
        try {
           
            page = Number(query.page) || 1;

            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
            stories = await response.json();
        } catch (err) {
            console.log(err);
            stories=[]
        }
        return {page ,stories}
    }
    render() {
        const {stories,page} = this.props;
        if(stories.length === 0){
            return  <Error statusCode={503} />
          }
        return (
            <Layout title="hacker next">
               
               <h3> Home Pages</h3>
                    <StoryList stories={stories} />   
                    <footer>
                        <Link href={`/?page=${page + 1}`}><a>Click Next Page</a></Link>
                    </footer>    
                    <style jsx>{`
                        footer{
                            padding:1em;

                        }
                        footer a {
                            font-weight:bold;
                            color:black;
                            text-decoration:none;
                        }
                    `}
                    </style>
            </Layout>

        );
    }
}

export default Index;