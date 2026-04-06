import { useEffect, useMemo, useState } from "react";

export default function OfficeWebsiteHomepage() {
  const [page, setPage] = useState("home");

  const services = useMemo(
    () => [
      {
        title: "Adult Internal Medicine",
        description:
          "Comprehensive adult care, chronic disease management, geriatrics, and evaluation of illnesses affecting multiple body systems.",
      },
      {
        title: "Hospital & Admitting Coordination",
        description:
          "Office evaluation with timely coordination for hospital care, direct admitting support when appropriate, and continuity across care settings.",
      },
      {
        title: "Preventive & Screening Services",
        description:
          "Wellness visits, preventive care, diabetes screening, hypertension screening, lipid management, and routine health maintenance.",
      },
      {
        title: "On-Site Testing & Exams",
        description:
          "On-site ancillary testing including labs, EKG, pulmonary function testing, ultrasound services, Holter monitoring, echocardiogram support, physicals, and USCIS immigration exams.",
      },
    ],
    []
  );

  const highlights = [
    "Clinical Associate Professor of Medicine, WVU School of Medicine",
    "Board-certified internal medicine with personalized, continuity-focused care",
    "Same-day appointments, walk-ins, and on-site diagnostic testing",
    "USCIS Civil Surgeon services for immigration medical exams",
  ];

  const NavButton = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => setPage(id)}
      className={`group relative overflow-hidden rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
        page === id
          ? "bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-700 text-white shadow-lg shadow-blue-200/70"
          : "bg-white text-slate-700 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md"
      }`}
    >
      <span className="relative z-10">{label}</span>
      {page === id ? (
        <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-white/80" />
      ) : (
        <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 group-hover:scale-x-100" />
      )}
    </button>
  );

  const SectionTitle = ({
    eyebrow,
    title,
    text,
  }: {
    eyebrow: string;
    title: string;
    text?: string;
  }) => (
    <div>
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          {text}
        </p>
      ) : null}
    </div>
  );

  const PersonImage = ({
    src,
    alt,
    initials,
    size = "h-24 w-24",
  }: {
    src: string;
    alt: string;
    initials: string;
    size?: string;
  }) => (
    <div
      className={`mx-auto overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-sm ${size}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="hidden h-full w-full items-center justify-center bg-slate-900 text-xl font-bold text-white">
        {initials}
      </div>
    </div>
  );

  const HomePage = () => (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-slate-300 bg-white px-4 py-1 text-sm font-medium text-slate-700 shadow-sm">
              Trusted Internal Medicine Care in Beckley, West Virginia
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
              Taking pride in caring for patients for life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Compassionate internal medicine care with same-day appointments,
              walk-ins, on-site diagnostic support, and long-term continuity for
              patients and families.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setPage("contact")}
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
              >
                Request Appointment
              </button>
              <button
                onClick={() => setPage("uscis")}
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Immigration Exams
              </button>
              <a
                href="https://portal.mrahimmd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-100"
              >
                Open Patient Portal
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200">
                <div className="px-6 text-center">
                  <PersonImage
                    src="/images/dr-mustafa-rahim.jpg"
                    alt="Dr. Mustafa Rahim"
                    initials="MR"
                    size="h-40 w-40"
                  />
                  <div className="mt-4 text-xl font-bold text-slate-900">
                    Dr. Mustafa Rahim
                  </div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">
                    Save your physician portrait as{" "}
                    <span className="font-semibold text-slate-900">
                      /images/dr-mustafa-rahim.jpg
                    </span>{" "}
                    to display it here automatically.
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-100 p-5">
                  <div className="text-sm font-semibold text-slate-600">
                    Office Hours
                  </div>
                  <div className="mt-2 text-sm leading-7 text-slate-800">
                    Mon–Fri: 8:00 AM – 3:30 PM
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-100 p-5">
                  <div className="text-sm font-semibold text-slate-600">
                    Contact
                  </div>
                  <div className="mt-2 text-sm leading-7 text-slate-800">
                    Phone: (304) 256-6500
                    <br />
                    Fax: (304) 929-6501
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-100 p-5 sm:col-span-2">
                  <div className="text-sm font-semibold text-slate-600">
                    Location
                  </div>
                  <div className="mt-2 text-sm leading-7 text-slate-800">
                    321 S Eisenhower Dr
                    <br />
                    Beckley, WV 25801
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionTitle
              eyebrow="About the Practice"
              title="Personalized medicine with continuity, clarity, and trust."
              text="Mustafa Rahim MD Inc provides adult internal medicine care in Beckley, West Virginia, with a focus on compassionate treatment, same-day access, diagnostic support, and long-term patient relationships. The practice emphasizes efficient evaluation, continuity across care settings, and thoughtful medical decision-making."
            />
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Dr. Mustafa Rahim is Clinical Associate Professor of Medicine at
              WVU School of Medicine. He is Board Certified in Internal Medicine,
              a Certified Specialist in Clinical Hypertension, and a Civil
              Surgeon for U.S. Citizenship and Immigration Services (USCIS). The
              practice also highlights extensive hospital, academic, and
              post-acute care experience throughout southern West Virginia.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-lg font-bold">Why Patients Choose This Office</div>
            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  <div className="text-sm leading-7 text-slate-700">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Services" title="Care designed around real patient needs." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Why Choose Us" title="Clear value for patients and families." />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["Same-Day", "Appointments available for timely evaluation when medically appropriate."],
              ["On-Site", "Diagnostic support that helps speed up clinical decision-making."],
              ["Trusted", "Physician-led care focused on continuity, communication, and long-term relationships."],
              ["USCIS", "Civil Surgeon services available for immigration medical exams and required documentation."],
            ].map(([label, desc]) => (
              <div
                key={label}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-3xl font-extrabold tracking-tight">{label}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const ServicesPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Services"
        title="Medical services organized clearly for patients."
        text="This page gives your practice room to grow while keeping the homepage clean."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-4 text-base leading-8 text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const CredentialsPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Credentials & Affiliations"
        title="Experience you can trust."
        text="A strong credentials page improves trust with patients, families, referring offices, and institutional partners."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-lg font-bold">Professional Credentials</div>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <li>Clinical Associate Professor of Medicine – WVU School of Medicine</li>
            <li>Board Certified in Internal Medicine</li>
            <li>Certified Specialist in Clinical Hypertension</li>
            <li>Civil Surgeon – U.S. Citizenship and Immigration Services (USCIS)</li>
            <li>National Registry of Certified Medical Examiners</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-lg font-bold">Affiliations & Leadership</div>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <li>WVU School of Medicine</li>
            <li>Adjunct Faculty – Lincoln Memorial University</li>
            <li>Fellow – American College of Physicians</li>
            <li>Fellow – American Society of Preventive Cardiology</li>
            <li>Extensive hospital and post-acute care experience</li>
          </ul>
        </div>
      </div>
    </section>
  );

  const USCISPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="USCIS Civil Surgeon Services"
        title="Immigration Medical Exams (Form I-693)"
        text="A dedicated immigration exam page improves search visibility and makes it easier for patients to understand exactly what you offer."
      />
      <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-lg font-bold">Available Services</div>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <li>Form I-693 completion</li>
            <li>Required physical examination</li>
            <li>Vaccination review and updates</li>
            <li>Lab testing as required by USCIS</li>
            <li>Clear office guidance on what to bring to the appointment</li>
          </ul>
          <button
            onClick={() => setPage("contact")}
            className="mt-8 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90"
          >
            Schedule Immigration Exam
          </button>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-lg font-bold">What to Bring</div>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <li>Government-issued photo ID</li>
            <li>Vaccination records</li>
            <li>USCIS paperwork, if already available</li>
            <li>Relevant medical records if needed for the exam</li>
          </ul>
          <div className="mt-8 rounded-2xl bg-white p-5 text-sm leading-7 text-slate-600">
            This page is designed to become a strong public-facing landing page for
            patients searching for a Civil Surgeon in Beckley or the surrounding area.
          </div>
        </div>
      </div>
    </section>
  );

  const TestimonialsTicker = () => {
    const testimonials = [
      {
        name: "Gary Schoolfield",
        image: "/images/gary-schoolfield.jpg",
        quote:
          "Excellent care and attention. Dr. Rahim took time to explain everything clearly and helped improve my health significantly.",
      },
      {
        name: "Ida Moore",
        image: "/images/ida-moore.jpg",
        quote:
          "Very compassionate and thorough. I felt comfortable and confident in the care provided.",
      },
      {
        name: "Nancy Jane Massie",
        image: "/images/nancy-jane-massie.jpg",
        quote:
          "A caring physician who truly listens. I highly recommend Dr. Rahim and his team.",
      },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (isPaused) return;
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 7000);
      return () => clearInterval(interval);
    }, [isPaused, testimonials.length]);

    return (
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Live Testimonials Spotlight
            </div>
            <div className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Patient voices, rotating automatically
            </div>
          </div>
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-slate-50 p-6">
          <div className="grid gap-6 md:grid-cols-[0.25fr_0.75fr] md:items-center">
            <PersonImage
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              initials={testimonials[activeIndex].name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
              size="h-28 w-28"
            />
            <div>
              <div className="text-xl font-bold text-slate-900">
                {testimonials[activeIndex].name}
              </div>
              <div className="mt-4 text-base leading-8 text-slate-600">
                “{testimonials[activeIndex].quote}”
              </div>
              <div className="mt-4 text-sm text-slate-500">
                Automatically advances every 7 seconds to give readers time to read comfortably.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === activeIndex ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const PatientsPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Patient Information"
        title="Clear office information in one place."
        text="This page reduces repetitive calls and helps patients know what to expect before contacting the office."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
          <div className="text-lg font-bold">Patient Intake & Portal</div>
          <p className="mt-4 text-sm leading-7 text-slate-200">
            Existing patient intake is completed through your EMR workflow. Patients can
            use the portal link below for access.
          </p>
          <a
            href="https://portal.mrahimmd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            Open Patient Portal
          </a>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-lg font-bold">Prescription Requests</div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Prescription requests generally take 2–3 business days to process.
            Electronic prescribing is available. New antibiotics or new medications
            usually require a same-day visit, and pain, anxiety, and sleep medications
            are not called in over the phone.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Prescription line: (304) 277-8437 or (304) 551-8515.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-lg font-bold">Forms & Office Policies</div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Add downloadable forms, records request guidance, work notes, disability
            or FMLA policies, and response times in one clear location for patients
            and families.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <SectionTitle eyebrow="Patient Trust" title="What patients value most." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Compassionate Care", "Patients appreciate respectful communication, thoughtful treatment plans, and continuity of care over time."],
            ["Efficient Access", "Same-day appointments, walk-ins, and on-site testing help patients get answers faster and avoid unnecessary delays."],
            ["Long-Term Relationships", "The practice is built on trust, continuity, and long-term care coordination for patients and families."],
          ].map(([label, desc]) => (
            <div
              key={label}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-lg font-bold">{label}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
          Add your Google review widget or selected patient testimonials here to
          strengthen trust and improve conversion. You can also feature quotes from
          current patient feedback already shown on your existing website.
        </div>
      </div>
    </section>
  );

  const TestimonialsPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Patient Testimonials"
        title="Trusted by patients and families."
        text="This section highlights patient experience, long-term trust, and the practice's strong community reputation. Replace image paths with the actual photos you save from your current website."
      />

      <TestimonialsTicker />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            name: "Gary Schoolfield",
            image: "/images/gary-schoolfield.jpg",
            quote:
              "Excellent care and attention. Dr. Rahim took time to explain everything clearly and helped improve my health significantly.",
          },
          {
            name: "Ida Moore",
            image: "/images/ida-moore.jpg",
            quote:
              "Very compassionate and thorough. I felt comfortable and confident in the care provided.",
          },
          {
            name: "Nancy Jane Massie",
            image: "/images/nancy-jane-massie.jpg",
            quote:
              "A caring physician who truly listens. I highly recommend Dr. Rahim and his team.",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <PersonImage
              src={item.image}
              alt={item.name}
              initials={item.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            />
            <div className="mt-5 text-lg font-bold text-slate-900">{item.name}</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">“{item.quote}”</div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div className="text-center md:text-left">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Google Reviews
            </div>
            <div className="mt-3 text-5xl font-extrabold tracking-tight text-slate-900">
              4.4 ★
            </div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              Current Google rating provided by the practice.
            </div>
          </div>
          <div>
            <div className="text-base leading-8 text-slate-600">
              Positive patient feedback strengthens trust and helps new patients feel
              confident before scheduling. Save the actual patient images from your current
              site into <span className="font-semibold text-slate-900">/images/gary-schoolfield.jpg</span>,{" "}
              <span className="font-semibold text-slate-900">/images/ida-moore.jpg</span>, and{" "}
              <span className="font-semibold text-slate-900">/images/nancy-jane-massie.jpg</span>{" "}
              to display the real photos automatically.
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJHXjXZtPyTogRmw71Mi9NOqY"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
              >
                Leave a Google Review
              </a>
              <a
                href="https://www.google.com/maps/place/Rahim+Mustafa+MD/@37.7794782,-81.1652811,17z/data=!3m1!4b1!4m6!3m5!1s0x884ef2d366d7781d:0xb63a4d2f32f50e9b!8m2!3d37.7794782!4d-81.1652811!16s%2Fg%2F1tfc79c9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                View Google Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const StaffPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Our Staff"
        title="Friendly support behind every visit."
        text="Add your real team photos and titles here to make the office feel even more established and welcoming."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            name: "Front Office Team",
            role: "Scheduling, check-in, patient coordination",
            image: "/images/front-office-team.jpg",
            initials: "FO",
          },
          {
            name: "Clinical Support Team",
            role: "Vitals, rooming, care coordination",
            image: "/images/clinical-support-team.jpg",
            initials: "CS",
          },
          {
            name: "Administrative Support",
            role: "Records, forms, and office follow-up",
            image: "/images/administrative-support.jpg",
            initials: "AS",
          },
        ].map((member) => (
          <div
            key={member.name}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <PersonImage
              src={member.image}
              alt={member.name}
              initials={member.initials}
            />
            <div className="mt-5 text-lg font-bold text-slate-900">{member.name}</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Contact"
        title="Ready to schedule an appointment?"
        text="This contact page can connect patients to your existing EMR intake and portal workflow while keeping core office information easy to find."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm md:col-span-2">
          <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-900 p-8 text-white">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
                Quick Access
              </div>
              <div className="mt-4 text-3xl font-bold tracking-tight">
                Visit, call, review, or open the portal.
              </div>
              <div className="mt-4 text-sm leading-7 text-slate-200">
                This top contact block makes it easier for patients to take action
                immediately without searching through the page.
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+13042566500"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
                >
                  Call Office
                </a>
                <a
                  href="https://portal.mrahimmd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Patient Portal
                </a>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJHXjXZtPyTogRmw71Mi9NOqY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Leave Review
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Map & Location
              </div>
              <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-bold text-slate-900">
                  321 S Eisenhower Dr, Beckley, WV 25801
                </div>
                <div className="mt-3 text-sm leading-7 text-slate-600">
                  Add a live embedded map here later if desired. For now, this polished
                  location block gives patients a clear destination and direct map access.
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://www.google.com/maps/place/Rahim+Mustafa+MD/@37.7794782,-81.1652811,17z/data=!3m1!4b1!4m6!3m5!1s0x884ef2d366d7781d:0xb63a4d2f32f50e9b!8m2!3d37.7794782!4d-81.1652811!16s%2Fg%2F1tfc79c9?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="space-y-5 text-sm leading-7 text-slate-700">
            <div>
              <div className="font-semibold text-slate-900">Phone</div>
              <div>(304) 256-6500</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Fax</div>
              <div>(304) 929-6501</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Office Email</div>
              <div>contact@mrahimmd.com</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Patient Portal / Intake</div>
              <a
                href="https://portal.mrahimmd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline underline-offset-4"
              >
                https://portal.mrahimmd.com
              </a>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Address</div>
              <div>
                321 S Eisenhower Dr
                <br />
                Beckley, WV 25801
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-lg font-bold">Office Hours</div>
          <div className="mt-4 text-sm leading-7 text-slate-700">
            Mon–Fri: 8:00 AM – 3:30 PM
          </div>
          <div className="mt-8 text-lg font-bold">Scheduling Notes</div>
          <div className="mt-4 text-sm leading-7 text-slate-700">
            Same-day appointments and walk-ins are available when medically
            appropriate. USCIS immigration exam scheduling can also be featured
            here with a dedicated call-to-action once your final contact workflow
            is confirmed.
          </div>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    switch (page) {
      case "services":
        return <ServicesPage />;
      case "credentials":
        return <CredentialsPage />;
      case "uscis":
        return <USCISPage />;
      case "patients":
        return <PatientsPage />;
      case "testimonials":
        return <TestimonialsPage />;
      case "staff":
        return <StaffPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2 text-xs font-medium sm:text-sm">
          <div className="flex flex-wrap items-center gap-4 text-slate-200">
            <a href="tel:+13042566500" className="transition hover:text-white">
              Call: (304) 256-6500
            </a>
            <a
              href="https://portal.mrahimmd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Patient Portal
            </a>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJHXjXZtPyTogRmw71Mi9NOqY"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Leave Review
            </a>
            <button onClick={() => setPage("uscis")} className="transition hover:text-white">
              Immigration Exams
            </button>
          </div>
          <div className="text-slate-300">4.4 ★ Google Rating</div>
        </div>
      </div>

      <header className="sticky top-[40px] z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setPage("home")} className="text-left">
            <div className="text-xl font-bold tracking-tight">Mustafa Rahim MD Inc</div>
            <div className="text-sm text-slate-600">
              Internal Medicine • Clinical Associate Professor of Medicine, WVU School
              of Medicine • USCIS Civil Surgeon
            </div>
          </button>

          <nav className="hidden items-center gap-3 rounded-[1.75rem] border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur md:flex">
            <NavButton id="home" label="Home" />
            <NavButton id="services" label="Services" />
            <NavButton id="credentials" label="Credentials" />
            <NavButton id="uscis" label="Immigration Exams" />
            <NavButton id="patients" label="Patients" />
            <NavButton id="testimonials" label="Testimonials" />
            <NavButton id="staff" label="Staff" />
            <NavButton id="contact" label="Contact" />
          </nav>

          <button
            onClick={() => setPage("contact")}
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Request Appointment
          </button>
        </div>
      </header>

      <main>{renderPage()}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Mustafa Rahim MD Inc. All rights reserved.</div>
          <div>
            Review contact details, EMR portal link, forms, reviews widget, and office
            policies before publishing.
          </div>
        </div>
      </footer>
    </div>
  );
}
