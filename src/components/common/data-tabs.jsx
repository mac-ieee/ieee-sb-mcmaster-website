import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const DataTabs = (props) => {
    const { data, onTabsChange } = props
    // const tabIndexProp = props.tabIndex
    // const [tabIndex, setTabIndex] = React.useState(tabIndexProp)

    const handleTabsChange = (index) => {
        if (typeof onTabsChange === 'function') { onTabsChange(data[index]) }

        // onTabsChange(index, data)
        // setTabIndex(index)
    }

    return (
        <Tabs isLazy size={['sm', 'sm', 'md', 'md']}
            onChange={handleTabsChange} index={props.tabIndex} py={4} variant='soft-rounded' colorScheme={'messenger'} align="center">
            <TabList bg="white"
                border="2px solid" borderColor="blackAlpha.800"
                boxShadow="xl"
                rounded="full"
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