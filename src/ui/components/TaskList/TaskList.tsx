import { useEffect, useState } from "react";
import List from "../List/List";
import Button from "../Button/Button";

const TaskList = () => {
  const [tache, setTache] = useState(
    localStorage.getItem("tache")
      ? JSON.parse(localStorage!.getItem("tache")!)
      : [],
  );

  useEffect(() => {
    localStorage.setItem("tache", JSON.stringify(tache));
  }, [tache]);

  const supprimer = (index: number) => {
    const tache_actu = tache.filter((_: string, i: number) => i !== index);
    setTache(tache_actu);
  };

  const modifier = (index: number, val: string) => {
    const tache_actu = [...tache];
    tache_actu[index] = val;
    setTache(tache_actu);
  };

  return (
    <div>
      <div>
        <Button
          onclick={() => setTache([...tache, "SANS NOM"])}
          style={{ margin: "0.5em" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "1rem" }}
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </Button>
      </div>
      <div>
        {tache.map((elt: string, index: number) => (
          <List
            key={index}
            id={index.toString()}
            f1={() => supprimer(index)}
            f2={modifier}
          >
            {elt}
          </List>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
