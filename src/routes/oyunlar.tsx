import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/oyunlar")({
  beforeLoad: () => {
    throw redirect({
      to: "/projeler",
    });
  },
});
