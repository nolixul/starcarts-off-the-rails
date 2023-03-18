import { useState } from "react";
import { Center, Tabs } from "@mantine/core";
import { Link } from "react-router-dom";

const Header = () => {
    const [activeTab, setActiveTab] = useState('films');

    return (
        <Center h={75}>
          <Tabs value={activeTab} onTabChange={setActiveTab} color="pink" radius="sm">
            <Tabs.List>
              <Link to="/">
              <Tabs.Tab value="films">Films</Tabs.Tab>
              </Link>
              <Link to="/characters">
              <Tabs.Tab value="characters">Characters</Tabs.Tab>
              </Link>
              <Link to="/starships">
              <Tabs.Tab value="starships">Starships</Tabs.Tab>
              </Link>
            </Tabs.List>

            <Tabs.Panel value="films">First panel</Tabs.Panel>
            <Tabs.Panel value="characters">Second panel</Tabs.Panel>
            <Tabs.Panel value="starships">Third panel</Tabs.Panel>
          </Tabs>
        </Center>
      );
}

export default Header


// make font bigger .. in theme?