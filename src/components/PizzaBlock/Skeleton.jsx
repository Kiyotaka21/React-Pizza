import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="108" cy="115" r="104" /> 
    <rect x="11" y="230" rx="10" ry="10" width="190" height="24" /> 
    <rect x="11" y="268" rx="0" ry="0" width="191" height="64" /> 
    <rect x="10" y="347" rx="10" ry="10" width="80" height="34" /> 
    <rect x="120" y="347" rx="10" ry="10" width="81" height="33" />
  </ContentLoader>
)

export default Skeleton