// Download portfolio as PDF using html2pdf.js
function downloadPortfolioPDF() {
  const element = document.body; // You can target a specific container if needed
  html2pdf()
    .from(element)
    .set({
      margin: 0.5,
      filename: 'portfolio.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    })
    .save();
}
