import { useRouter } from "next/router";

import Header from "./Header";
import Tag from "./Tag";

const SideBar: React.FC = () => {
  const tags: string[] = ["photos", "colors", "css", "text"];
  const router = useRouter();

  return (
    <div className="sideBar">
      <Header />
      <ul className="tagList">
        {tags.map(tag => (
          <Tag key={tag} id={tag} highlight={router.query.id === tag} />
        ))}
      </ul>
      <style jsx>{`
        .tagList {
          margin: 0em;
          padding: 0em;
        }

        .sideBar {
          display: flex;
          flex-direction: column;
          height: 100vh;
          min-width: 13em;
          background: rgb(235, 235, 255);
          -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.67);
          -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.67);
          box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.67);
        }
      `}</style>
    </div>
  );
};

export default SideBar;
