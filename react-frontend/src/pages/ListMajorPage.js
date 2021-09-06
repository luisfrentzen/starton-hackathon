import Navbar from "../components/Navbar";
import { majorData } from "../data/MajorData";
import Footer from "../components/Footer";
import MajorGrid from "../components/Major/MajorGrid";

export default function ListMajorPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="relative">
        <section>
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gray-100 text-center pt-16 sm:pt-28">
            <h1 className="pb-3 text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-400">
              List of Majors
            </h1>
          </div>
          <div className="relative">
            <div className="absolute w-full top-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#F3F4F6"
                  fill-opacity="1"
                  d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b from-gray-200 to-gray-400">
          <div className="mx-auto max-w-screen-xl flex pt-28 sm:pt-48 md:pt-60 lg:pt-72 xl:pt-80 px-6 pb-20 sm:pb-28 md:pb-32">
            <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {majorData.map((data) => (
                <MajorGrid key={data.id} data={data} />
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
