// "use client";

// import React, { useState } from "react";
// import SampleDocuments from "@/app/sample-document/page";

// const links = [
//   { id: "all", name: "All" },
//   { id: "hr", name: "HR Documents" },
//   { id: "finance", name: "Finance" },
//   { id: "project", name: "Projects" },
//   { id: "policies", name: "Policies" },
//   { id: "others", name: "Others" },
// ];


// interface DocumentCentersidemenuProps {
//   search?: string;
//   nav?:boolean
// }

// function DocumentCentersidemenu({
//   search,nav
// }: DocumentCentersidemenuProps) {

//   const [activeMenu, setActiveMenu] = useState("all");

//   return (
//     <div className={`grid w-full grid-cols-1
//       ${nav ? "md:grid-cols-[180px_minmax(0,1fr)]" : "w-full h-[400px]"} gap-2 md:pt-5`}>

      
//      {nav === true && <aside className="w-full min-h-0 shadow-[0_0_10px_rgba(0,0,0,0.12)] bg-white md:min-h-[500px]
//         bg-background dark:bg-gray-800
//         rounded-xl p-3">

//         <nav className="flex flex-col gap-2">

//           {links.map((link) => {

//             const isActive = activeMenu === link.id;

//             return (
//               <button
//                 key={link.id}
//                 onClick={() => setActiveMenu(link.id)}
//                 className={`
//                   w-full rounded-xl px-4 py-2.5
//                   text-left text-sm font-semibold
//                   cursor-pointer transition-colors
//                   hover:bg-emerald-100
//                   dark:hover:text-emerald-900
//                   ${
//                     isActive
//                       ? "bg-emerald-100 text-emerald-800"
//                       : "text-gray-700 dark:text-gray-300"
//                   }
//                 `}
//               >
//                 {link.name}
//               </button>
//             );
//           })}

//         </nav>

//       </aside>}

      
//       <div className="w-full min-w-0 min-h-[340px]
//         bg-white dark:bg-gray-800
//         rounded-xl p-4 shadow-[0_0_10px_rgba(0,0,0,0.12)]">

//         <SampleDocuments
//           category={activeMenu}
//           search={search}
//         />

//       </div>

//     </div>
//   );
// }

// export default DocumentCentersidemenu;



"use client";

import React, { useState } from "react";
import SampleDocuments from "@/app/sample-document/page";

interface MenuLink {
  id: string;
  name: string;
}

const documentLinks: MenuLink[] = [
  { id: "all", name: "All" },
  { id: "hr", name: "HR Documents" },
  { id: "finance", name: "Finance" },
  { id: "project", name: "Projects" },
  { id: "policies", name: "Policies" },
  { id: "others", name: "Others" },
];

interface DocumentCentersidemenuProps {
  search?: string;
  nav?: boolean;
  links?: MenuLink[];
  renderContent?: (category: string) => React.ReactNode;
  embedded?: boolean;
}

function DocumentCentersidemenu({
  search = "",
  nav = false,
  links = documentLinks,
  renderContent,
  embedded = false,
}: DocumentCentersidemenuProps) {

  const [activeMenu, setActiveMenu] = useState(
    links[0]?.id ?? "all"
  );

  return (
   <div
  className={`
    grid
    w-full
    min-w-0
    grid-cols-1
    min-h-[340px]
    md:min-h-[640px]
    gap-4
    md:pt-5
    items-stretch
     ${
      embedded
        ? "min-h-0"
        : "min-h-[340px] md:min-h-[640px] md:pt-5"
    }
    ${
      nav
        ? "md:grid-cols-[180px_minmax(0,1fr)]"
        : "grid-cols-1"
    }
  `}
>
  {nav && (
    <aside
      className="
        w-full
        min-w-0
        flex
        justify-center
        p-4
        md:pt-10
        rounded-xl
        bg-white
        shadow-[0_0_10px_rgba(0,0,0,0.12)]
        dark:!bg-slate-700/20
        dark:!text-white
        dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)]
      "
    >
      <nav className="flex w-full flex-col gap-4">
        {links.map((link) => {
          const isActive = activeMenu === link.id;

          return (
            <button
              key={link.id}
              type="button"
              onClick={() => setActiveMenu(link.id)}
              className={`
                w-full
                rounded-xl
                px-4
                py-2.5
                text-left
                text-sm
                font-semibold
                cursor-pointer
                transition-colors
                hover:bg-emerald-100
                dark:hover:bg-gray-900/80
                dark:hover:text-secondary
                ${
                  isActive
                    ? "bg-emerald-100 dark:!bg-slate-800 dark:text-white text-emerald-800"
                    : "text-gray-700 dark:text-gray-300"
                }
              `}
            >
              {link.name}
            </button>
          );
        })}
      </nav>
    </aside>
  )}

  {/* <div
    className="
      w-full
      min-w-0
      min-h-[340px]
      bg-white
      rounded-xl
      p-4
      shadow-[0_0_10px_rgba(0,0,0,0.12)]
      dark:!bg-slate-700/20
      dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)]
    "
  >
    {renderContent ? (
      renderContent(activeMenu)
    ) : (
      <SampleDocuments
        category={activeMenu}
        search={search}
      />
    )}
  </div> */}
  <div
  className={`
    w-full
    min-w-0

    ${
      embedded
        ? "bg-transparent min-h-0 p-0 shadow-none"
        : `
          min-h-[340px]
          bg-white
          rounded-xl
          p-4
          shadow-[0_0_10px_rgba(0,0,0,0.12)]
          dark:!bg-slate-700/20
          dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)]
        `
    }
  `}
>
  {renderContent ? (
    renderContent(activeMenu)
  ) : (
    <SampleDocuments
      category={activeMenu}
      search={search}
    />
  )}
</div>
</div>
  );
}

export default DocumentCentersidemenu;