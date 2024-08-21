import { items } from "./items";

const Pages = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center my-10">
          <h2 className="text-6xl font-serif">Feature Collections</h2>
        </div>
        <section className="flex gap-12 justify-center items-center my-6 bg-blue-200 h-[500px] w-11/12 mx-auto">
          {items.map((item) => (
            <div className="flex flex-col justify-center gap-4 items-center p-10 h-full">
              <div>
                <img className="rounded-lg" src={item.img} alt="#img" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-lg">{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Pages;
