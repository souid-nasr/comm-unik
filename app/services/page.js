import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Featured from "../components/Featured";
import Features from "../components/Features";
function page() {
  return (
    <div>
      <Breadcrumbs
        title="Services"
        subtitle="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
      />
      <Featured/>
      
      <Features/>
    </div>
  );
}

export default page;
