import React from 'react'
import data from "./ListData.json"
import Box from "../Box";

const List = ({ input }) => {
    const filteredData = data.filter((el) => {
        if (input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(input)
        }
    })
    return (
        <Box>
            <ul>
                {filteredData.map((item) => (
                  <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </Box>
    )
}

export default List;
