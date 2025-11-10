import bannerImage from '../assets/images/banner.png'

const Banner = () => {
    return (
        <section className='pb-5 xl:pb-8 2xl:pb-16'>
            <div className='container-custom'>
                <img className='w-full' src={bannerImage} alt="banner-image" />
            </div>
        </section>
    );
};

export default Banner;