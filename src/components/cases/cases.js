import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function HeaderCases() {
  return (
    <main>
      <div className="relative  px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-12 xl:pb-53 lg:pt-40 lg:pb-40 pt-16 pb-6">
          <div>
            <div>
              <h1 className="text-4xl font-semibold pt-8 tracking-tight  sm:text-7xl">
                Case Studies
              </h1>
              <p className="mt-16 text-2xl max-w-3xl leading-8 text-black ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>

            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-33rem)] sm:top-[calc(100%-30rem)]">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/282/910/small/elegant-white-background-free-vector.jpg"
                className="w-full h-full object-cover lg:top-[calc(100%-50rem)] md:top-[calc(100%-40rem)] sm:top-[calc(100%-30rem)]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeaderCases;
