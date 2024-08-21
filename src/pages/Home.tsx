import { Button } from 'antd';
import bgImage from '../assets/cat.jpg';
import { BsArrowUpRight } from "react-icons/bs";
import Pages from '../components/Pages';
import Shop from '../components/Shop';

const Home = () => {
  return (
    <div className="my-4">
      <section className="flex items-center h-[700px] mx-16">
        <div className="flex flex-col justify-center items-start gap-10 bg-blue-100 p-20 h-full w-1/2">
          <p className="font-mono">Just Dropped</p>
          <h2 className="text-7xl font-sans italic w-3/5">Feel Authentic Peace</h2>
          <Button className="text-white bg-black p-6 font-mono w-32">Shop Now <BsArrowUpRight /></Button>
        </div>
        <div className="w-1/2 h-full">
          <img src={bgImage} alt="#tzuyu" className="object-cover w-full h-full"/>
        </div>
      </section>
      <section>
        <div className='flex flex-col justify-center items-center gap-16 p-20'>
          <h2 className='text-6xl italic'>What We Do</h2>
          <p className='font-sans text-lg w-[585px] text-center'>Brisa is a leading edge fashion footwear specialist, providing style conscious customers with innovative shoes to suit every occasion. We pride ourselves on unique product range - created by our in-house design team and global brand partnerships, all of which are recognisable by their individually, design and quality.</p>
          <Button className='p-6 bg-black text-white w-36'>Learn More<BsArrowUpRight/></Button>
        </div>
      </section>
      <Pages />
      <Shop/>
    </div>
  );
};

export default Home;
