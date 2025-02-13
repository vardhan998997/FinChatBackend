const handleFileUpload = async (req, res) => {
	try {
		const file = req.file;

		if (!file) {
			return res.status(400).json({ message: 'File Not Uploaded' });
		}
		res
			.status(200)
			.json({ message: 'File Uploaded Successfully', success: true });
	} catch (error) {
		res.status(500).json({ error: error });
	}
};
export { handleFileUpload };
