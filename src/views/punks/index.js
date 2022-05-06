import React from "react";
import { useWeb3React } from "@web3-react/core";
import PunkCard from "../../components/punk-card";
import RequestAccess from "../../components/request-access";
import Loading from "../../components/loading";
import { usePlatziPunksData } from "../../hooks/usePlatziPunksData";
import { Grid } from "@chakra-ui/react";

export const Punks = () => {
  const { active } = useWeb3React();
  const { punks, loading } = usePlatziPunksData();

  return active ? (
    loading ? (
      <Loading />
    ) : (
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {punks.map(({ name, image, tokenId }) => {
          return <PunkCard key={tokenId} image={image} name={name} />;
        })}
      </Grid>
    )
  ) : (
    <RequestAccess />
  );
};

export default Punks;
