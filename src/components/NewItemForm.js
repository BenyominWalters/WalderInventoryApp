import React from "react"

const NewItemForm = ({ }) => {
    return (
        <form>
            <label htmlFor="itemName">Item Name</label>
            <input type="text" name="itemName" id="itemName" />
            <label htmlFor="zone">Zone</label>
            <input type="text" name="zone" id="zone" />
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" />
            <label htmlFor="cabinet">Cabinet</label>
            <input type="text" name="cabinet" id="cabinet" />
            <label htmlFor="box">Box</label>
            <input type="text" name="box" id="box" />
            <label htmlFor="activities">Activities</label>
            <input type="text" name="activities" id="activities" />
            <label htmlFor="keywords">Keywords</label>
            <input type="text" name="keywords" id="keywords" />
            <label htmlFor="notes">Notes</label>
            <input type="text" name="notes" id="notes" />
            <button>Add New Item</button>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default NewItemForm
