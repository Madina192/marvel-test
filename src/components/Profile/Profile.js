import React from 'react';

const Profile = () => {
    return (
        <div className='right'>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" className='img'/>
            <div className='about_box'>
                <div>
                    <img src="https://www.akc.org/wp-content/uploads/2021/03/Dachshund-puppies-sitting-side-by-side-outdoors-500x487.jpeg" alt="" className='img_dog'/>
                </div>
                <div className='about_right'>
                    <p className='text_about'>Madina:</p>
                    <p className='text_about'>Date of birth: 28/09/2002</p>
                    <p className='text_about'>City: Bishkek</p>
                    <p className='text_about'>Profession: front-end developer</p>
                    <p className='text_about'>email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">madinaakpaeva000@gmail.com</a></p>
                </div>
            </div>
            <section className="my-posts">
                <h1 className='h2'>My posts</h1>
                <input type="text" placeholder='your news...' className='input'/>
                <button className='send-btn'>Send</button>
            </section>
            <section className="comment">
                <div className="comment-line">
                    <div className="comment-left">
                        <img src="https://thumbs.dreamstime.com/z/cute-muslim-girl-cartoon-red-balloon-vector-illustration-84700302.jpg" alt="" className='img-friend'/>
                    </div>
                    <div className="comment-right">
                        Hey, doesn't anyone love me?
                    </div>
                </div>
                <div className="comment-line">
                    <div className="comment-left">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/438/004/non_2x/cartoon-muslim-girl-painting-free-vector.jpg" alt="" className='img-friend'/>
                    </div>
                    <div className="comment-right">
                        Hey! It's our new program!
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;