import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function HeaderServices() {
  return (
    <div>
      <div className="relative px-6 lg:px-8">
        <div className="max-auto max-w-full mx-12 xl:pt-20 xl:pb-64 lg:pb-40  pb-12">
          <div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight pb-10 sm:text-7xl ">
                Servicios
              </h1>
              <p className="mt-3 text-2xl max-w-3xl leading-8 text-black">
                Desarrollo de aplicacines web y apps moviles para tu negocio,
                proyecto de universidad o tesis.
              </p>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-36rem)] sm:top-[calc(100%-30rem)]">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/282/910/small/elegant-white-background-free-vector.jpg"
                className="w-full h-full object-cover lg:top-[calc(100%-50rem)] md:top-[calc(100%-40rem)] sm:top-[calc(100%-30rem)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderServices;
