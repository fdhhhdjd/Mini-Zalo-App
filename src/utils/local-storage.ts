// Function to save data to LocalStorage
export const saveToLocalStorage = (key: string, data: string) => {
	try {
		// Save the serialized data to LocalStorage using the provided key
		localStorage.setItem(key, data);
	} catch (error) {
		// If an error occurs during the saving process, log the error to the console
		console.error("Error saving data to LocalStorage:", error);
	}
};

// Function to get data from LocalStorage
export const getFromLocalStorage = (key: string, defaultValue = null) => {
	try {
		// Retrieve the serialized data from LocalStorage using the provided key
		const serializedData = localStorage.getItem(key);

		// If the data is not found in LocalStorage, return the default value
		if (serializedData === null) {
			return [];
		}

		// Parse the serialized data back into its original format (object, array, etc.)
		return JSON.parse(serializedData);
	} catch (error) {
		// If an error occurs during the retrieval process, log the error to the console
		console.error("Error getting data from LocalStorage:", error);

		// Return the default value in case of an error
		return defaultValue;
	}
};

// Function to remove data from LocalStorage
export const removeFromLocalStorage = (key: string) => {
	try {
		// Remove the data associated with the provided key from LocalStorage
		localStorage.removeItem(key);
	} catch (error) {
		// If an error occurs during the removal process, log the error to the console
		console.error("Error removing data from LocalStorage:", error);
	}
};
