import { Anchor, Container, Group, Image, Title, Text, Paper, Flex } from "@mantine/core";
import Link from "next/link";


function SocialLinks() {
  return (
    <Flex w='full' justify={'center'}>
      <div>
        <Link href="#">Blog</Link>
      </div>
      <div>
        <Link href="https://www.youtube.com/@PageKey">YouTube</Link>
      </div>
      <div>
        <Link href="https://pagekey.substack.com/">SubStack</Link>
      </div>
      <div>
        <Link href="https://discord.gg/5m5yFgDPF5">Discord</Link>
      </div>
    </Flex>
  )
}
function Logo() {
  return (
    <Flex w='full' justify='center'>
      (logo) PageKey 
    </Flex>
  )
}
function Slogan() {
  return (
    <Flex w='full' justify='center'>
      Take Back Tech
    </Flex>
  )
}
function Mission() {
  return (
    <>
      <div>
        PageKey is a brand with a mission to educate people about the increasingly complex technology in our daily lives. 
      </div>
      <div>
        Most people rely entirely on big tech companies to provide them with things that you can no longer live without in modern society. 
      </div>
      <div>
        By learning more about how things work under the hood, we can move toward a future where people are empowered to make changes to their own applications. 
      </div>
      <div>
        We'll Take Back Tech and put the choice of how devices work back into the hands of users.
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <SocialLinks />
      <Logo />
      <Slogan />
      <Mission />
      <SocialLinks />
    </>
  )
}
