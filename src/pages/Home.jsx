import React from 'react'
import Hero from '../components/Hero';
import Sidebar1 from '../components/Sidebars/Sidebar1';

const Home = () => (
    <div>
        <div className='float-left'>
            <Sidebar1 />
        </div>
        <div class="p-4 sm:ml-64 ">
            <div class="p-4 border-2 border-dashed rounded-lg border-gray-700 mt-14">
                <Hero />
            </div>
        </div>
    </div>

);

export default Home