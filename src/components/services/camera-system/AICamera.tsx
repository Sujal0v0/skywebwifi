import Image from "next/image";

export default function AICamera() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Content Half */}
          <div className="flex-1 space-y-8 max-w-md mx-auto">
            <div className="space-y-6">
              <h1 className="text-2xl lg:text-3xl font-semibold text-foreground text-balance">
                Video Security that Works For All Teams
              </h1>
              <p className="text-xl text-pretty max-w-lg">
                With one unified interface that lets customers integrate and
                manage multiple security solutions, that can be accessed from
                anywhere in the world.
              </p>
            </div>
          </div>

          {/* Image Half */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="relative ">
              <Image
                width={700}
                height={700}
                src="/services/ai-camera.png"
                alt="Advanced Wi-Fi Infrastructure"
                className="w-full h-auto rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
