import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cerezler")({
  beforeLoad: () => {
    throw redirect({
      to: "/cerez-politikasi",
    });
  },
});
