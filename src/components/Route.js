import useNavigation from "../hooks/use-navigation";
// import { useContext } from "react";
// import NavigationContext from "../context/navigation";

function Route({ path, children }) {
  const { currentPath } = useNavigation();

    if (currentPath === path) { // eğer gideceği yol ile şu anki yol aynı ise children'ı döndür
        return children;
    }

    return null; // eğer gideceği yol ile şu anki yol aynı değilse null döndür
}

export default Route;