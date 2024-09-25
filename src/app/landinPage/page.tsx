import developerImg from "../../assets/development.png";
import Image from "next/image";
export default function LandingPage() {
  return (
    <main className=" flex  justify-center items-center gap-x-12 pt-24">
      <div className="flex flex-col gap-y-8 w-6/12">
        <div className=" flex flex-col gap-y-3">
          <h3 className="text-5xl font-bold font-landingPageFont">
            I am Pablo Escobar Gabellia
          </h3>
          <p className="text-xl font-semibold">
            I am a Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Voluptatem, quis.
          </p>
        </div>
        <div className="flex gap-8">
          <button className="btn btn-outline btn-secondary w-fit">
            Resume
          </button>
          <button className="btn btn-outline btn-secondary w-fit">
            Portfolio
          </button>
        </div>
      </div>
      <Image src={developerImg} alt="" className="w-5/12" />
    </main>
  );
}
