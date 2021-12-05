import useElements from "../../hooks/useElements";
import Entity from "../Entity";
import Loading from "../Loading";

const ListOfEntities = (props) => {
  const { positions, isLoading } = useElements(props);
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <div>
      {/* <iframe
        src="interestelar.mp3"
        className="invisible"
        title="YouTube video player"
        frameborder="0"
      ></iframe> */}
      <audio autoPlay>
        <source src="/interestellar.mp3" />
      </audio>
      {positions.map((position) => (
        <Entity {...position} key={position.id} />
      ))}
    </div>
  );
};

export default ListOfEntities;
