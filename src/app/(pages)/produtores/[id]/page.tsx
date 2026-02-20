import Container from "@/components/shared/Container";

export default function ProducersDetailsPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <Container>ProducersDetailsPage {params.id}</Container>;
}
