import "./404.scss";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>OOOOPS! that&apos;s not you are looking for 😅</h1>
    {/* add gif file here */}
    <img src="/404.gif" alt="404" />
    </div>  
  );
};

export default PageNotFound;
