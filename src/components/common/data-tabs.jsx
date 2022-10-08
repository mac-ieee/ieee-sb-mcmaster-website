import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const DataTabs = (props) => {
    const { data, onTabsChange } = props
    const [tabIndex, setTabIndex] = React.useState(0)

    const handleTabsChange = (index) => {
        if (typeof onTabsChange === 'function') { onTabsChange(data[index]) }

        // onTabsChange(index, data)
        // setTabIndex(index)
    }

    return (
        <Tabs onChange={handleTabsChange} isLazy py={4} variant='soft-rounded' colorScheme={'messenger'} align="center">
            <TabList bg="blackAlpha.50" border="1px solid" borderColor="blackAlpha.700" rounded="full"
                width="fit-content"
            >
                {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                ))}
            </TabList>

            <TabPanels>
                {data.map((tab, index) => (
                    <TabPanel p={0} mt={4} key={index}>
                        {tab.content}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
}