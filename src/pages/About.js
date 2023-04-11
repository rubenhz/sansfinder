import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
    return (
        <div className="lg:h-[100vh] flex flex-col text-slate-700 bg-slate-200">
         <div className="container mx-auto flex-1">
          <Header />
          <div className="bg-slate-100 rounded-lg p-8 my-8 flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 lg:mr-8">
                <h1 className="mb-4 text-2xl">About Sansfinder</h1>
                <p className="text-gray-800 text-lg mb-6">
                  Sansfinder is a unique search engine that helps users find a variety of sansevierias quickly. With this tool, plant enthusiasts can easily browse and compare prices from just once place, saving time and effort. Whether you're an experienced plant collector or new to the hobby, Sansfinder is the ideal resource for finding the perfect sansevieria for your collection.
                </p>
              </div>
              <figure className="w-full h-[650px] lg:w-1/2">
                <img src={'https://sansevieria-international.org/wp-content/uploads/2020/02/201-Sansevieria-trifasciata-cv.-Moonglow.jpg'} className="w-full h-full rounded-lg shadow-md object-cover" alt="Leaves closeup of the Sansevieria trifasciata cv. 'Moonglow'" />
                <figcaption className="text-slate-500 text-sm underline">
                  <a href='https://sansevieria-international.org/irwin-lightstone-photos/'>
                    Image by Irwin Lightsone
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
          <Footer />
        </div>
    )
}