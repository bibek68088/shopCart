import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import tzuyu from "../assets/tzuyu.jpg";

const Blog = () => {
  return (
    <div className="my-10">
      <section className="flex gap-16 p-20 bg-pink-100 h-[600px] w-8/12 mx-auto">
        <div className="flex items-center w-full h-full">
          <img src={tzuyu} alt="#image" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col justify-center gap-16 w-full">
          <div className="flex justify-between w-4/5">
            <p className="text-xl font-light">Time Story</p>
            <p><CaretLeftOutlined /> 01 <CaretRightOutlined/></p>
          </div>
          <div className="w-10/12">
            <p className="font-semibold text-lg">
              "We pride ourselves on our unique product range - created by our
              in-house design team and global brand partnerships, all of which
              are individually design and quality."
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-2xl">Julia Crawford</p>
            <p className="flex items-end text-xs">Designed At Onion Jagdgas</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
