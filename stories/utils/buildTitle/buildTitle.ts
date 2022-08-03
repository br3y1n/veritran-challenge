import { PathsBuilder } from "../../models";

const buildTitle = (paths: PathsBuilder): string =>
  paths
    .map((path) => (typeof path === "string" ? path : path.displayName))
    .join("/");

export { buildTitle };
