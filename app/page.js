import Image from "next/image";
import { IframeHTMLAttributes } from "react";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen">
        <Image
          src="/fot.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white ">
            <h1 className="bg-clip-border p-6 bg-blue-600/0 rounded-2xl  text-6xl font-bold mb-4">
              Välkommen till Doktorfots Medicinsk <br /> fotvårdsklinik{" "}
            </h1>
            <a
              href="#"
              className="bg-blue-800 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300"
            >
              Boka en tid
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 text-center h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-black text-lg">
            <span className="font-bold text-2xl ">
              Varmt välkommen till Doktor Fot Stockholm.
            </span>
            <br />
            Jag är specialiserad medicinsk fotterapeut och medlem hos
            fotterapeuterna. Hos oss kan du få behandlingar som anpassas efter
            dina behov och önskemål om fötter och underben. Jag som driver
            Doktor Fot Stockholm heter Nazli Babazadeh. Jag är positiv och
            väldigt motiverad, och utför mitt arbete med stor passion. Jag
            pratar flera språk, så om du har problem med svenska kan jag
            säkerligen hjälpa dig ändå. Jag utbildade mig till medicinsk
            fotterapeut hos Axelsons Institut i Stockholm. Jag har arbetat som
            vanlig fotvårdare i flera år. Dessutom har jag erfarenhet från
            vården som undersköterska och tandsköterska. Jag ser fram emot att
            få ge dig en härlig behandling hos oss.
          </div>
          <p className="text-black mt-4 text-lg">
            Ni hittar oss på Doktor Fot Stockholm Hornsgatan 108, 11726
            Stockholm Närmaste T-Bana Zinkensdamm Endast knappt 2 minuter bort.
            Telefon: 0706-35 3434"
          </p>
          <p className="text-black mt-4 text-lg">Tel: 0706-35 3434</p>
        </div>
      </div>
      <div className="bg-white p-8 text-center h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-black text-lg">
            <span className="font-bold text-2xl ">Du hittar oss här!</span>
            <br />
            <div className="mt-8 flex justify-center">
              <iframe
                title="Business Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.722475892914!2d18.048995116069687!3d59.31730420831922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77c2acb2bc9f%3A0x1f833ba3e36bd17f!2sHornsgatan%20108%2C%20117%2026%20Stockholm!5e0!3m2!1sen!2sse!4v1666491611653!5m2!1sen!2sse"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <p className="text-black mt-4 text-lg">
            Ni hittar oss på Doktor Fot Stockholm, Hornsgatan 108, 11726
            Stockholm. Närmaste T-Bana Zinkensdamm. Knappt 2 minuter ifrån.
          </p>
          <p className="text-black mt-4 text-lg">Tel: 0706-35 3434</p>
        </div>
      </div>
    </div>
  );
}
