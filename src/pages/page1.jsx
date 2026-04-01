import React from "react";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "40px" }}>
    <h2 style={{ color: "#2c3e50", marginBottom: "10px" }}>{title}</h2>
    <p style={{ lineHeight: "1.7", color: "#444" }}>{children}</p>
  </div>
);

const page1 = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Understanding Plastics & Plastic Waste
      </h1>

      <Section title="What is Plastic?">
        Plastic is a synthetic or semi-synthetic material made of high molecular
        compounds. It is widely used due to its flexibility, durability, and
        lightweight nature. From toothbrushes to construction materials,
        plastics are everywhere in daily life.
      </Section>

      <Section title="Key Characteristics">
        Plastics are resistant to chemicals and corrosion, act as electrical
        insulators, and have a high strength-to-weight ratio. However, improper
        disposal leads to serious environmental issues.
      </Section>

      <Section title="History of Plastic">
        Plastic began in 1862 with Parkesine by Alexander Parkes. Later in 1907,
        Bakelite by Leo Baekeland became the first fully synthetic plastic,
        revolutionizing industries.
      </Section>

      <Section title="How Plastic is Made">
        Plastics are made through polymerization, where monomers combine to form
        polymers. Additives like plasticizers, stabilizers, and colorants are
        added to enhance properties.
      </Section>

      <Section title="Manufacturing Processes">
        Common processes include extrusion, injection molding, blow molding, and
        thermoforming. Each method is used for different shapes and applications.
      </Section>

      <Section title="Classification of Plastics">
        Plastics are classified based on resin codes (1–7), structure, and
        behavior. Thermoplastics can be remelted, while thermosetting plastics
        cannot.
      </Section>

      <Section title="Uses of Plastics">
        Plastics are used in automotive, medical, construction, electronics, and
        packaging industries due to their versatility and cost-effectiveness.
      </Section>

      <Section title="Plastic Waste">
        Plastic waste is a major environmental issue because it does not
        decompose easily. It breaks into microplastics that enter food chains
        and ecosystems.
      </Section>

      <Section title="Sources of Plastic Waste">
        Major sources include packaging (largest contributor), construction,
        automotive, and household waste.
      </Section>

      <Section title="Environmental Impact">
        Plastic pollution affects land, water, and marine life. Microplastics are
        found in water, fish, and even salt, posing risks to human health.
      </Section>

      <Section title="Plastic Waste Management">
        Solutions include proper segregation, recycling, reducing single-use
        plastics, and developing sustainable alternatives.
      </Section>

      <Section title="Conclusion">
        Plastic itself is not harmful, but mismanagement of plastic waste is the
        real issue. Better awareness and systems are needed for sustainability.
      </Section>

    </div>
  );
};

export default page1;