import { useContext } from "react";
import NavigationCintext from "../context/navigation";

function useNavigation() {
  return useContext(NavigationCintext);
}

export default useNavigation;
