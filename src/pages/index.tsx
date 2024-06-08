import { Anchor, Container, Group, Image, Title, Text, Paper } from "@mantine/core";


function SocialLinks() {
  return (
    <div>
      Links: Blog, YouTube, SubStack, Discord
    </div>
  )
}
function Logo() {
  return (
    <div>
      (logo) PageKey 
    </div>
  )
}
function Slogan() {
  return (
    <div>
      Take Back Tech
    </div>
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
