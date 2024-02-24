import { useSearchParams } from "react-router-dom";

const SectionTitle = ({ Title }: { Title: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="flex justify-between items-center my-5">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
        {searchParams.get(Title) === "TVshows"
          ? Title + " TVshows"
          : Title + " Movies"}
      </h1>
      <ul className="menu-horizontal gap-2">
        {["Movies", "TVshows"].map((section, index) => (
          <li key={index}>
            <button
              onClick={() =>
                setSearchParams((params) => {
                  params.set(Title, section);
                  return params;
                })
              }
              className={`btn btn-outline btn-primary ${
                searchParams.get(Title) === section && "btn-active"
              } `}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionTitle;
