import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";
import ComponentF from "./ComponentF";

export default function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
      <ComponentF />
    </div>
  );
}
