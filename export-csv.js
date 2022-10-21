async function exportCSV() {
    this.exportLoading = true;

    try {
        let exportData = null;
        if (this.checkedDataEnrichments.length) {
            exportData = {
                rows: this.checkedDataEnrichments
            };
        }
        const response = await this.exportDataEnrichmentsHistory(exportData);

        let csvContent = 'data:text/csv;charset=utf-8,';
        let csvData = new Blob([response.data], {
            type: csvContent
        });

        let csvUrl = URL.createObjectURL(csvData);

        const link = document.createElement('a');
        link.setAttribute('href', csvUrl);
        link.setAttribute('download', 'export.csv');
        link.click();
    } catch (error) {
        this.showAlert({
            status: 'error',
            message: error.response.data.message,
            showAlert: true
        });
    } finally {
        this.exportLoading = false;
        this.checkedDataEnrichmentss = [];
    }
}