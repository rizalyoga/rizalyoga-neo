import { Mail, MapPin } from "lucide-react";
import TitleSection from "../title-section/TitleSection";
import ContactForm from "../forms/ContactForm";
import { FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 transition-colors bg-white dark:bg-[#252839]"
    >
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <TitleSection
            title="CONTACT"
            bgColor="bg-cyan-400 dark:bg-cyan-300"
          />

          <p className="max-w-2xl mx-auto text-lg md:text-xl font-bold text-black dark:text-white">
            Let&apos;s work together! Drop me a message and let&apos;s create
            something amazing.
          </p>
        </div>

        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-yellow-400 dark:bg-yellow-300 shadow-board-contact-description">
              <h3 className="mb-6 text-xl md:text-2xl font-black text-black">
                GET IN TOUCH
              </h3>
              <p className="mb-6 text-base md:text-lg font-bold leading-relaxed text-black">
                Ready to start your next project? I&apos;m always excited to
                work on new challenges and collaborate with new people.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 text-white bg-black border-2 border-black">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-black">Email</div>
                    <div className="text-sm md:text-lg text-black">
                      ach.rizal.yogaswara@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 text-white bg-black border-2 border-black">
                    <FiLinkedin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-black">Linkedin</div>
                    <div className="text-sm md:text-lg text-black">
                      @rizalyoga
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 text-white bg-black border-2 border-black">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-black">Location</div>
                    <div className="text-sm md:text-lg text-black">
                      Mojokerto, Indonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-lime-400 dark:bg-lime-300 shadow-board-contact-description">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-lg md:text-xl font-black text-black">
                    AVAILABLE FOR WORK
                  </div>
                  <div className="font-bold text-black text-sm md:text-base">
                    Currently accepting new projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
