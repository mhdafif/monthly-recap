import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Monthly Recap" }, { name: "description", content: "Welcome to Monthly Recap" }];
};

export default function Index() {
  return <div className="flex items-center justify-center">Monthly Recap</div>;
}
