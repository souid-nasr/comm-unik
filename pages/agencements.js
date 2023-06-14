import React from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import Featured from "@/components/Featured";
import Products from "@/components/Products";
function page() {
  return (
    <div>
      <Breadcrumbs
        title="L&#39;aménagement de votre habitat sur mesure"
        subtitle="Plus de 07 ans d&#39;expériences au service de nos clients.
        Nous vous accompagnons à la réalisation de votre projet"
      />
      <Featured />
      <Products />
    </div>
  );
}

export default page;
