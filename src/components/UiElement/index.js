import loadable from "@loadable/component";

export * from "./Button";
export const Breadcrumb = loadable(() => import("./Breadcrumb/index"));
export const AuthLogo = loadable(() => import("./AuthLogo/index"));
export const AccordionComponent = loadable(() => import("./Accordion/index"));
export const MenuComponent = loadable(() => import("./Menu/index.menu"));
export const TabComponent = loadable(() => import("./Tabs/index"));
export const GlobalLoader = loadable(() => import("./GlobalLoader/index"));
export const FileUploader = loadable(() => import("./FileUploader/index"));

export const ModalComponent = loadable(() => import("./Modal/Index"));
export const DataTable = loadable(() => import("./DataTable/index"));
export const Pagination = loadable(() => import("./Pagination/index"));
export const ActionDropdown = loadable(() => import("./ActionDropdown/index"));
export const ProgressBarComponent = loadable(() =>
  import("./Progressbar/index")
);
export const CustomSwitch = loadable(() => import("./Switch/index"));
export const SweetAlert = loadable(() => import("./SweetAlert/index"));
export const AcountSidebar = loadable(() => import("./AcountSidebar/index"));

export const UserHeader = loadable(() => import("./Header/index"));
export const UserFooter = loadable(() => import("./Footer/index"));
export const ImageElement = loadable(() => import("./ImageElement/index"));
export const SectionComponent = loadable(() =>
  import("./SectionComponent/index")
);
export const CustomCheck = loadable(() => import("./CustomCheck/index"));
export const BookNowCard = loadable(() => import("./BookNowCard/index"));
export const AboutComponent = loadable(() => import("./AboutComponent/index"));
