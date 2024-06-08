import { Anchor, Container, Group, Image, Title, Text, Paper, Flex, Tooltip } from "@mantine/core";
import { IconArticle, IconBookmarkFilled, IconBrandDiscord, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";


function SocialLinks() {
  return (
    <Flex w='full' justify={'center'}>
      <div className='p-4'>
        <Link href="#">
          <Tooltip label="Blog">
            <IconArticle />
          </Tooltip>
        </Link>
      </div>
      <div className='p-4'>
        <Tooltip label="YouTube">
          <Link href="https://www.youtube.com/@PageKey">
            <IconBrandYoutube />
          </Link>
        </Tooltip>
      </div>
      <div className='p-4'>
        <Link href="https://pagekey.substack.com/">
          <Tooltip label="SubStack">
            <IconBookmarkFilled />
          </Tooltip>
        </Link>
      </div>
      <div className='p-4'>
        <Link href="https://discord.gg/5m5yFgDPF5">
          <Tooltip label="Discord">
            <IconBrandDiscord />
          </Tooltip>
        </Link>
      </div>
    </Flex>
  )
}
function Logo() {
  return (
    <Flex w='full' justify='center' className='text-4xl'>
      (logo) PageKey 
    </Flex>
  )
}
function Slogan() {
  return (
    <Flex w='full' justify='center' className='text-2xl'>
      Take Back Tech
    </Flex>
  )
}
function Mission() {
  return (
    <>
      <div className='text-center'>
        PageKey is a brand with a mission to educate people about the increasingly complex technology in our daily lives. 
      </div>
      <div className='text-center'>
        Most people rely entirely on big tech companies to provide them with things that you can no longer live without in modern society. 
      </div>
      <div className='text-center'>
        By learning more about how things work under the hood, we can move toward a future where people are empowered to make changes to their own applications. 
      </div>
      <div className='text-center'>
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
