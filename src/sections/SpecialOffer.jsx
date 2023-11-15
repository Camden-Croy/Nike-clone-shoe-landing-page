import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Discounted Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="lg:max-w-lg mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="lg:max-w-lg mt-6  info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-col-2 gap-10">
          <div className="mt-11 ">
            <Button label="Shop now" iconUrl={arrowRight}>
              Shop Now{" "}
            </Button>
          </div>
          <div className="mt-11 ">
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
              hoverChange="hover:bg-black hover:text-white"
            >
              Learn More{" "}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
