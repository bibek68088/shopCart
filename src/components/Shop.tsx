import { collections } from "./items";

const Shop = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center my-16">
          <p className="text-6xl italic">Popular Collection</p>
        </div>
        <div className="grid grid-cols-4 gap-2 w-11/12 mx-auto">
          {collections.map((collection) => (
            <div className="flex flex-col items-center gap-10 bg-gray-100">
              <div className="w-full h-72">
                <img
                  src={collection.img}
                  alt="#image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 my-4">
                <p className="font-semibold text-lg">{collection.title}</p>
                <p className="font-sans">{collection.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
