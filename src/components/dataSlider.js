import { v4 as uuidv4 } from "uuid";

// Building an array of 5 unique objects

// First, an array of 5 empty objects is created
// then each one is filled with unique data (uuid certified)
export const dataSlider = Array(5)
  .fill({})
  .map(() => {
    return {
      id: uuidv4(),
      title: "Lorem ipsum",
      subtitle: "dolor sit amet",
    };
  });
