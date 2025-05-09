import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="133" r="130" />
    <rect x="8" y="273" rx="0" ry="0" width="264" height="30" />
    <rect x="248" y="301" rx="0" ry="0" width="1" height="0" />
    <rect x="7" y="315" rx="7" ry="7" width="268" height="90" />
    <rect x="10" y="423" rx="0" ry="0" width="86" height="27" />
    <rect x="154" y="413" rx="27" ry="27" width="118" height="45" />
  </ContentLoader>
);

export default Skeleton;
