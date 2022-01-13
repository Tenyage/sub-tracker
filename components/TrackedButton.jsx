import * as React from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

const TrackedButton = ({}) => {
  const router = useRouter();
  return (
    <Button
      endIcon={<LocationSearchingIcon />}
      onClick={() => router.push({ pathname: "/tracked" })}
    >
      TRACKED
    </Button>
  );
};

export default TrackedButton;
