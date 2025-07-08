"use client";
import { clientContent } from "@/lib/content/client-content";
import Hero1 from "@/components/hero/Hero1";
import AgencySelector from "@/components/molecules/AgencySelector";
import PageSection3 from "@/components/page-sections/PageSection3";
import PageSection4 from "@/components/page-sections/PageSection4";
import SectionFormCenter from "@/components/page-sections/SectionFormCenter";
import TestimonialSlider from "@/components/organisms/TestimonialSlider";
import { useState } from "react";
// import Hero8 from "@/components/hero/Hero8";

export default function ClientPage() {
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");

  return (
    <div>
      <Hero1
        imageUrl={clientContent.hero1.imageUrl}
        title={clientContent.hero1.title}
        subtitle={clientContent.hero1.subtitle}
        buttonText={clientContent.hero1.buttonText}
        buttonLink={clientContent.hero1.buttonLink}
      />
      <AgencySelector />
      <PageSection3
        heading={clientContent.pageSection3.heading}
        bodyCopy={clientContent.pageSection3.bodyCopy}
        imageUrl={clientContent.pageSection3.imageUrl}
      />
      <PageSection4
        heading={clientContent.pageSection4.heading}
        bodyCopy={clientContent.pageSection4.bodyCopy}
        imageUrl={clientContent.pageSection4.imageUrl}
      />

      {/* <Hero8
        imageUrl={clientContent.hero.imageUrl}
        title={clientContent.hero.title}
        subtitle={clientContent.hero.subtitle}
        buttonText={clientContent.hero.buttonText}
        buttonLink={clientContent.hero.buttonLink}
        height={clientContent.hero.height}
        isParallax={clientContent.hero.isParallax}
      /> */}

      <TestimonialSlider
        testimonials={clientContent.testimonials}
        autoAdvance={true}
        autoAdvanceInterval={5000}
      />

      <SectionFormCenter
        title={clientContent.sectionFormCenter.title}
        subtitle={clientContent.sectionFormCenter.subtitle}
        fullname={fullname}
        company={company}
        businessEmail={businessEmail}
        onSubmit={() => {
          console.log("Form submitted", fullname, company, businessEmail);
        }}
        onChangeFullname={(e) => setFullname(e.target.value)}
        onChangeCompany={(e) => setCompany(e.target.value)}
        onChangeBusinessEmail={(e) => setBusinessEmail(e.target.value)}
      />
    </div>
  );
}
