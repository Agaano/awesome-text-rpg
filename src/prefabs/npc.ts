import { NpcType } from "../types/types";
import { getRandomItemId } from "./items";

const npcs: NpcType[] = [
  {
    id: 1,
    name: "Иван",
    inventory: [
      { id: getRandomItemId("basic"), cost: 20 },
      { id: getRandomItemId("basic"), cost: 20 },
      { id: getRandomItemId("rare"), cost: 50 },
      { id: getRandomItemId("rare"), cost: 50 },
      { id: getRandomItemId("epic"), cost: 100 },
      { id: getRandomItemId("legendary"), cost: 200 },
    ],
  },
];
export default npcs;
