import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((linkItem) => {
    return <a key={linkItem} href = {`#${linkItem}`}>{linkItem}</a>
  })

  return <nav>{linkElements}</nav>;
}

export default NavBar;
