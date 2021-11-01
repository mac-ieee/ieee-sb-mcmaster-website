import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { responsiveSpacing } from 'styles/chakraTheme';

interface Props {
  data: Array<ITabData>;
}

export interface ITabData {
  label: string;
  content: any;
  to: string;
}

const TabBar = ({ data }: Props) => {
  return (
    <Tabs w="100%" variant="soft-rounded" isLazy ml={-3}>
      <TabList>
        {data.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((tab, index) => (
          <TabPanel p={0} pt={responsiveSpacing} key={index} w="100%">
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabBar;
