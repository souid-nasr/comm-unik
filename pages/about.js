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
        subtitle="Comunik est votre partenaire de confiance pour tous vos besoins en communication visuelle.
        Spécialisée dans l'impression grand format et la communication professionnelle, cette société offre un
        service complet de A à Z, allant de la conception graphique à la réalisation d'une grande enseigne. Leur
        expertise technique et leur capacité à créer des supports visuels percutants, tels que des affiches, des
        bannières et des cartes de visite, font de Comunik le choix idéal pour donner vie à vos idées et
        promouvoir votre entreprise. Avec un engagement envers la qualité, le service client et des délais de
        production rapides, Comunik est là pour vous accompagner dans tous vos projets de communication,
        quelles que soient leur taille et leur envergure."
      />
      <About/>
      <Stats />
      <Team/>
    </div>
  );
}

export default AboutPage;
