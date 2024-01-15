# Capitals Explorer

**Capitals Explorer** is a web application that allows users to explore and manage information about various capitals around the world. The application leverages the Google Maps API for visual representation and provides functionality to edit, delete, and add new capitals.

## Features

- **Home Component:** Displays a map with markers for each capital using the Google Maps API.

- **Capitals Component:** Shows a table listing all capitals with a call-to-action button to edit the capitals.

- **EditCapital Component:** A dedicated component for editing or adding new capitals. It ensures data integrity by preventing the addition of cities with duplicate names or empty names.
- **CapitalsService:** Manages changes to the capitals data and updates the **local storage**.


## Usage

### 1. Home Component

Upon launching the application, the Home component will display a map with markers for each capital. Clicking on the markers provides details about each capital.

### 2. Capitals Component

Navigate to the Capitals component to view a table listing all capitals. From here, you can click on the "Edit" button to make modifications to existing capitals.

### 3. EditCapital Component

To edit or add new capitals, use the EditCapital component. Ensure that the capital name is **unique** and not **empty**. You have the option to cancel changes before saving.
