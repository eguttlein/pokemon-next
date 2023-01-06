import React from "react";
import { Navbar, useTheme, Spacer, Text, Link } from "@nextui-org/react";
import Image from "next/image";

export default function NavBar() {
  const { isDark } = useTheme();

  return (
    <Navbar isBordered={isDark} variant="sticky">
      <Navbar.Brand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Ditto icono de la App"
          width={70}
          height={70}
        />
        <Spacer />
        <Link href="/">
          <Text color="white" h2>
            P
          </Text>
        </Link>
        <Link href="/">
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Link href="/favorites">
            <Text color="white">Favoritos</Text>
          </Link>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
