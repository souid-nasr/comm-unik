import React from "react";
import Stats from "@/components/Stats";
import Breadcrumbs from "@/components/Breadcrumbs";
import About from "@/components/About";
import Team from "@/components/Team";
function AboutPage() {
  return (
    <div>
      <Breadcrumbs
        title="NOTRE SOCIETE"
        subtitle="Avec Unik Espace, votre interlocuteur vous accompagne de A à Z dans la réalisation de votre projet : cuisines, dressings, placards, bibliothèques, mobiliers de salon, séparations de pièces et lits relevables.
        Nous vous proposons la possibilité d&#39;aménager l&#39;ensemble de votre habitat sur-mesure."
      />
      <About/>
      <Stats />
      <Team/>
    </div>
  );
}

export default AboutPage;
