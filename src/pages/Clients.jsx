import { useLoaderData } from "react-router-dom";
import { Client } from "../components/clients/Client";
import { NotFount } from "./NotFount";

export const Clients = () => {
  const clients = useLoaderData();

  return (
    <>
      <div className="py-20">
        {" "}
        {clients.length > 0 ? (
          clients.map((client) => <Client key={client.id} client={client} />)
        ) : (
          <NotFount />
        )}
      </div>
    </>
  );
};
