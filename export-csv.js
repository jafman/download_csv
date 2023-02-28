async function exportCSV() {
    
        const data = 'xxx';

        let csvContent = 'data:text/csv;charset=utf-8,';
        let csvData = new Blob([data], {
            type: csvContent
        });

        let csvUrl = URL.createObjectURL(csvData);

        const link = document.createElement('a');
        link.setAttribute('href', csvUrl);
        link.setAttribute('download', 'export.csv');
        link.click();
     
}
