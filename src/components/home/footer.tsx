import { ArrowUp, Copyright } from "lucide-react";

export default function Footer() {
  return (
    <section className="w-[100%] h-[100%] mx-auto gap-12 py-6">
      <div className="bg-black p-7">
        <div className="flex justify-between">
          <div>
          <Copyright className="text-white"/><h1 className="text-white text-4xl">2025 Copyright</h1>
            
          </div>
          <div>
            <p className="text-white text-2xl">
              Uncover hidden gems, unique stays <br /> and unforgettable
              experiences. With <br /> Wonderlust every journey leads to <br />{" "}
              discovery.
            </p>
            <div className="flex justify-center gap-6">
              <li>
                <a href="/" className="text-white">
                  X(Twitter)
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Youtube
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-50">
          <div>
            <h1 className="text-7xl text-white">Wanderlust</h1>
          </div>
          <div>
            <ArrowUp className="text-white"/>
          </div>
        </div>
      </div>
    </section>
  );
}
