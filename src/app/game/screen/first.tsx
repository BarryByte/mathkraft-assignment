import { useGameState } from "../state-utils";
import Header from "../components/header";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import TestButton from "../components/testButton";
import TestSelect from "../components/testSelect";

export default function FirstScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction} />
    </div>
  );
}
