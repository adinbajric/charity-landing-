import React from 'react';
import '../App.css';
import photo1 from '../imgs/photo1.jpg';
import photo2 from '../imgs/photo2.png';
import photo3 from '../imgs/photo3.png';
import school from '../imgs/school.jpg';
import savana from '../imgs/savana.jpg';
import heart from '../imgs/heart.jpg';
import logo from '../imgs/logo.png';


 const Home = () => {
    return(
        <main className='home'>
            <div className='home-hero'>            
                    <h1 className='home-hero-caption'>
                        Transforming Cebuano lives by <br /> restoring the environment 
                    </h1>
                    <div className='btn-container'>
                        <button className='btn btn-wide'>
                            Become a volunteer
                        </button>
                        <button className='btn btn-small'>
                            Learn More
                        </button>
                    </div>
            </div>
            <div className='quick-info'>
                <p>
                The Earth Heart Foundation Cebu (EHFC) is a non-profit organization that aims to assist and uplift <br /> rural communities in Cebu with the support of various environmental projects.
                </p>
            </div>
            <section className='interests-container'>
                <div className='volonteer'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nulla ante orci, ultrices nec maximus quis, gravida vel nisl. Morbi volutpat mauris enim.</p>
                    <button className='btn btn-wide btn-volonteer'>
                        Become a volunteer
                    </button>
                </div>
                <div className='cards-container'>
                    <div className='job-card'>
                        <img src={photo1} alt='job1'/>
                        <h1 className='card-heading'>Nulla eu rutrum enim</h1>
                        <p className='card-paragraph'>
                        Ut bibendum sagittis nibh, eget finibus sapien ornare sed. Mauris eget elit pharetra neque dictum bibendum at vestibulum sapien. Proin sodales, ex ac ornare hendrerit, nulla nisl semper leo 
                        </p>
                        <button className='btn btn-small btn-card'>
                            Learn more
                        </button>
                    </div>
                    <div className='job-card'>
                        <img src={photo2} alt='job2'/>
                        <h1 className='card-heading'>Nulla eu rutrum enim</h1>
                        <p className='card-paragraph'>
                        Ut bibendum sagittis nibh, eget finibus sapien ornare sed. Mauris eget elit pharetra neque dictum bibendum at vestibulum sapien. Proin sodales, ex ac ornare hendrerit, nulla nisl semper leo
                        </p>
                        <button className='btn btn-small btn-card'>
                            Learn more
                        </button>
                    </div>
                    <div className='job-card'>
                        <img src={photo3} alt='job3'/>
                        <h1 className='card-heading'>Nulla eu rutrum enim</h1>
                        <p className='card-paragraph'>
                        Ut bibendum sagittis nibh, eget finibus sapien ornare sed. Mauris eget elit pharetra neque dictum bibendum at vestibulum sapien. Proin sodales, ex ac ornare hendrerit, nulla nisl semper leo 
                        </p>
                        <button className='btn btn-small btn-card'>
                            Learn more
                        </button>
                    </div>
                </div>

                <div className='donations-container'>
                    <div className='donations'>
                        <h5>1,608</h5>
                        <p>Donations</p>
                    </div>
                    <div className='donations'>
                        <h5>22,563</h5>
                        <p>Donations</p>
                    </div>
                    <div className='donations'>
                        <h5>184</h5>
                        <p>Projects Created</p>
                    </div>
                    <div className='donations'>
                        <h5>27</h5>
                        <p>Partners</p>
                    </div>
                </div>
            </section>

            <section className='gallery-container'>
                <div className='gallery'>
                    <img src={school} alt='school'/>
                </div>
                <div className='gallery'>
                    <img src={savana} alt='savana'/>
                </div>  
                <div className='gallery'>
                    <img src={heart} alt='heart'/>
                </div>  
            </section>

            <section className='donate-container'>
                <div className='donate'>
                    <div className='donate-help'>
                        <p>Want to help? We are always in need of donations, vitae ex quam. Quisque nulla purus, elementum eu nunc at, cursus finibus tortor. 
                        </p>
                    </div>
                    <div className='donate-mauris'>
                        <p>
                        Mauris eget elit pharetra neque dictum bibendum at vestibulum sapien. Proin sodales, ex ac ornare hendrerit, nulla nisl semper leo.<br />Nulla porta dui non libero viverra mattis a nec velit. Integer nulla tellus, dignissim eget posuere a, lobortis in justo. Quisque hendrerit egestas neque. Donec turpis sapien, dignissim in augue ac, venenatis interdum justo. 
                        </p>
                    </div>                    
                </div>
                
                    <form className='donate-form'>
                        <label 
                            className='form-input' 
                            htmlFor='name'>Name:
                            <input 
                                type='text' 
                                id='name' 
                                placeholder='Enter your name'/>
                        </label>
                        <label 
                            className='form-input' 
                            htmlFor='email'>Email:
                            <input 
                                type='email' 
                                id='email' 
                                placeholder='Enter your email adress'/>
                        </label>
                        <label 
                            className='form-input' htmlFor='amount'>Amount:
                            <div className='form-amount'>
                                <select id='amount'>
                                    <option value='USD'>USD</option>
                                    <option value='BAM'>BAM</option>
                                    <option value='EUR'>EUR</option>
                                </select>
                                <input 
                                    type='text' 
                                    id='donation-amount'/>
                            </div>                            
                        </label>
                        <button className='btn btn-small btn-donate'>Donate</button>
                    </form>                
            </section>

            <section className='interests-container'>
                <div className='volonteer'>
                    <p>Quisque laoreet eros ut elementum molestie. Morbi posuere non ante non porta. Vivamus posuere lectus sed urna commodo gravida.</p>
                    <button className='btn btn-wide btn-volonteer'>
                        Become a partner
                    </button>
                </div>
                <div className='cards-container'>
                    <div className='resources-card'>
                        <h3 className='card-heading'>
                            Nulla eu retrum enim
                        </h3>
                        <p className='card-paragraph'>
                        Ut bibendum sagittis nibh, eget finibus sapien ornare sed. Mauris eget elit pharetra neque dictum bibendum at vestibulum sapien. Proin sodales, ex ac ornare hendrerit, nulla nisl semper leo
                        </p>
                        <button className='btn btn-small btn-card'>Download</button>
                    </div>
                    <div className='resources-card'>
                        <h3 className='card-heading'>
                            Nulla eu retrum enim
                        </h3>
                        <p className='card-paragraph'>
                        Ut bibendum sagittis nibh, eget finibus sapien ornare sed. Mauris eget elit pharetra neque dictum bibendum at vestibulum sapien. Proin sodales, ex ac ornare hendrerit, nulla nisl semper leo
                        </p>
                        <button className='btn btn-small btn-card'>Download</button>
                    </div>
                    <div className='resources-card'>
                        <h3 className='card-heading'>
                            Nulla eu retrum enim
                        </h3>
                        <p className='card-paragraph'>
                        Ut bibendum sagittis nibh, eget finibus sapien ornare sed. Mauris eget elit pharetra neque dictum bibendum at vestibulum sapien. Proin sodales, ex ac ornare hendrerit, nulla nisl semper leo
                        </p>
                        <button className='btn btn-small btn-card'>Download</button>
                    </div>
                </div>
            </section> 
            <section className='subscription'>
                <h1 className='subscription-heading'>Helps us make more sustainable projects</h1>
                <p>Donec turpis sapien, dignissim in augue ac, venenatis interdum justo. </p>
                <form className='subscription-form'>
                    <label htmlFor='email-subscribe'>
                        <input 
                            type='email' 
                            id='email-subscribe' 
                            placeholder='email'/>                            
                    </label>
                    <button className='btn btn-subscribe'>Subscribe</button>
                </form>
            </section>
            <footer>
                <div className='footer-container'>
                    <div className='footer-first'>
                            <img src={logo} className='logo' alt='logo'/>
                            <p>Earth Heart Foundation Cebu © 2020. All rights reserved.</p>                        
                    </div>
                    <div className='footer-second'>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <div>
                            <p>+63 911 111 1111</p>
                            <p>Unit 12 Bldg Name, Street Name</p>
                            <p>City, Country 4444</p>
                        </div>
                    </div>
                </div>                
            </footer>
                
                     
        </main>
    )
}

export default Home;