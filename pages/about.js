import Link from "next/link";
import Kanban from "./kanban";

export default () => (
  <div>
    This is a static page goto{" "}
    <Link href="/">
      <a>dynamic</a>
    </Link>{" "}
    page.
    <Kanban />
  </div>
);
