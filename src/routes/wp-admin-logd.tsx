import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/wp-admin-logd")({
  head: () => ({
    meta: [{ title: "Yönlendiriliyor... | LOGD" }],
  }),
  component: () => <Navigate to="/yonetim-logd-2025" replace />,
});
