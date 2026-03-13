import ctaBg from "../img/ctaBg.svg";

export default function OTACTA() {
  return (
    <section className="w-full bg-[#0F1E2F] flex justify-center items-center">

      <div
        className="w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[440px] flex items-center max-w-[1540px] mx-auto"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="max-w-2xl px-6 sm:px-10 lg:px-0 lg:pl-28 text-center lg:text-left">

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0A1220]"
            style={{ lineHeight: "1.3" }}
          >
            Start Scaling Your <br /> Transfer Marketplace
          </h2>

          <p className="text-sm sm:text-base mb-8 text-[#0F1E2F] sm:max-w-[200px] max-w-[200px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[600px] mx-auto lg:mx-0">
            Connect to suppliers, standardize inventory, and launch transfer services
            faster with TransitHub.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&to=info@transithub.io",
                "_blank"
              )
            }
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-white bg-[#0F1E2F] hover:scale-105 transition"
          >
            Talk to Us
          </button>

        </div>

      </div>

    </section>
  );
}