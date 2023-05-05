export const ComicsLogo = ({source,altText}) => {
  return (
    <>
      <div className="text-center ">
        <img
          className="img-fluid w-25 p-2"
          src={source}
          alt={altText}
        />
      </div>
      <hr />
    </>
  );
};
