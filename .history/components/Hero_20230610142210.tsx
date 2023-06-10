import Image from "next/image"
import { CustomButton } from ".";

function Hero() {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
          {/**Heading */}
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        {/**Description */}
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        {/**Button */}
        <CustomButton title="Explore Cars" />
      </div>
    </div>
  );
}

export default Hero
