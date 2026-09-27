import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/gizlilik")({
  beforeLoad: () => {
    throw redirect({
      to: "/gizlilik-politikasi",
    });
  },
});
