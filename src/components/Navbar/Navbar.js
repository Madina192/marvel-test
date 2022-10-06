import React from 'react';

const Navbar = () => {
    return (
        <div className='left'>
            <nav className='nav'>
                <a href="" className='link'>Profile</a>
                <a href="" className='link'>Messages</a>
                <a href="" className='link'>News</a>
                <a href="" className='link'>Music</a>
                <a href="" className='link'>Settings</a>
            </nav>
            <h2 className='h2-friend'>Friends</h2>
            <div className='img-box'>
                <div>
                    <img src="https://thumbs.dreamstime.com/z/cute-muslim-girl-cartoon-red-balloon-vector-illustration-84700302.jpg" alt="" className='img-friend'/>
                    <p className='names'>Cholpon</p>
                </div>
                <div>
                    <img src="https://thumbs.dreamstime.com/z/cute-muslim-girl-cartoon-red-butterfly-her-hand-vector-illustration-84702350.jpg" alt="" className='img-friend'/>
                    <p className='names'>Meka</p>
                </div>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/002/438/004/non_2x/cartoon-muslim-girl-painting-free-vector.jpg" alt="" className='img-friend'/>
                    <p className='names'>Akylai</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;