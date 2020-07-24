import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <div className="homepage">
                <section className="hero">
                    <h1 className="heading">Header text will be placed here</h1>
                    <p className="text">Lorem ispum dorlasit tulu asit tulelaj reyt cwjwyer czn 
                    eyhg cuyehc hciwn mbelaj reyt bcuerync cwjwyer czn eyhg cuyehc hciwnui 
                    whnqiuren cqucnq yuchcuyq cuc c cehr c rhrqy c</p>
                    <button className="btn btn_large">Learn more &darr;</button>
                </section>
                <section className="about grid">
                    <div className="img">
                        <img src={require('../img/about.jpg')}/>
                    </div>
                    <div className="content">
                        <h2 className="heading">About Me</h2>
                        <p className="text">Lorem ispum dorlasit reyt cwjwyer czn eyhg cuyehc
                         hciwpum dorlasit reyt cwjwyer czn eyhg cuyehc hciw pum dorlasit reyt
                          cwjwyer czn eyhg cuyehc hciw pum dorlasit reyt cwjwyer czn eyhg cuyehc 
                          hciw pum dorlasit reyt cwjwyer czn eyhg cuyehc hciw pum dorlasit reyt 
                          cwjwyer czn eyhg cuyehc hciw pum dorlasit reyt cwjwyer czn eyhg cuyehc 
                          hciw pum dorlasit reyt cwjwyer czn eyhg cuyehc hciw</p>
                          <div className="blocks">
                            <div className="block">
                                <h3>Ghost writing</h3>
                                <p>Lorem ispum dorlasit reyt cwjwyer czn eyhg cuyehc
                                    hciwpum t reyt cwjwyer czn </p>
                            </div>
                            <div className="block">
                                <h3>Ghost writing</h3>
                                <p>Lorem ispum dorlasit reyt cwjwyer czn eyhg cuyehc
                                    hciwpum t reyt cwjwyer czn </p>
                            </div>
                            <div className="block">
                                <h3>Ghost writing</h3>
                                <p>Lorem ispum dorlasit reyt cwjwyer czn eyhg cuyehc
                                    hciwpum t reyt cwjwyer czn </p>
                            </div>
                            <div className="block">
                                <h3>Ghost writing</h3>
                                <p>Lorem ispum dorlasit reyt cwjwyer czn eyhg cuyehc
                                    hciwpum t reyt cwjwyer czn </p>
                            </div>
                          </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;