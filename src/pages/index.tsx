import { Anchor, Container, Group, Image, Title, Text, Paper } from "@mantine/core";

function Header() {
  return (
    <div p="xs" style={{ backgroundColor: '#1c7ed6', height: 60 }}>
      <Container size="lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Group>
          <Image src="logo.png" alt="PageKey Logo" height={40} />
          <Title order={1} style={{ color: 'white' }}>PageKey</Title>
        </Group>
        <Group>
          <Anchor href="#blog" style={{ color: 'white' }}>Blog</Anchor>
          <Anchor href="#youtube" style={{ color: 'white' }}>YouTube</Anchor>
          <Anchor href="#substack" style={{ color: 'white' }}>SubStack</Anchor>
          <Anchor href="#discord" style={{ color: 'white' }}>Discord</Anchor>
        </Group>
      </Container>
    </div>
  )
}

function Footer() {
  return (
    <div p="xs" style={{ backgroundColor: '#1c7ed6', color: 'white', height: 60 }}>
      <Container size="lg" style={{ textAlign: 'center' }}>
        &copy; 2024 PageKey. All rights reserved.
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header />

      <Container size="lg" style={{ padding: '40px 0' }}>
        <Title align="center" order={2} mb="md">Take Back Tech</Title>
        <Text align="center" size="lg" mb="xl">
          PageKey is a brand with a mission to educate people about the increasingly complex technology in our daily lives.
        </Text>

        <Paper shadow="sm" p="md" style={{ backgroundColor: 'white' }}>
          <Title order={3} mb="sm">Our Mission</Title>
          <Text mb="sm">
            Most people rely entirely on big tech companies to provide them with things that you can no longer live without in modern society.
          </Text>
          <Text mb="sm">
            By learning more about how things work under the hood, we can move toward a future where people are empowered to make changes to their own applications.
          </Text>
          <Text>
            We'll Take Back Tech and put the choice of how devices work back into the hands of users.
          </Text>
        </Paper>

        <Title align="center" order={3} mt="xl" mb="md">Follow Us</Title>
        <Group position="center" spacing="lg">
          <Anchor href="#blog" style={{ color: '#1c7ed6' }}>Blog</Anchor>
          <Anchor href="#youtube" style={{ color: '#1c7ed6' }}>YouTube</Anchor>
          <Anchor href="#substack" style={{ color: '#1c7ed6' }}>SubStack</Anchor>
          <Anchor href="#discord" style={{ color: '#1c7ed6' }}>Discord</Anchor>
        </Group>
      </Container>

      <Footer />
    </>
  )
}
