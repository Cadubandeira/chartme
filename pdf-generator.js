async function generatePDF() {
  showLoading();
  loadingMessage.innerText = "Gerando PDF dos seus resultados";
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  // --- General Styling ---
  const primaryColor = "#573065";
  const textColor = "#573065";
  const fontFamily = "sans-serif"; // Most similar generic font
  pdf.setFont(fontFamily);

  // --- Page Layout ---
  const margin = 20;
  const pageWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
  const pageHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
  let currentY = margin;

  function addText(text, options = {}) {
    const fontSize = options.fontSize || 12;
    const maxWidth = options.maxWidth || pageWidth;
    const fontWeight = options.fontWeight || "normal"; // 'normal' or 'bold'
    const color = options.color || primaryColor;
    const align = options.align || "left";

    pdf.setFontSize(fontSize);
    pdf.setFont(fontFamily, fontWeight);
    pdf.setTextColor(color);

    const lines = pdf.splitTextToSize(text, maxWidth);

    for (const line of lines) {
      const textHeight = fontSize / 3;
      if (currentY + textHeight > pageHeight) {
        pdf.addPage();
        currentY = margin;
      }
      pdf.text(line, margin, currentY, { align: align });
      currentY += textHeight + 2;
    }
  }

  function addVerticalSpace(space) {
    currentY += space;
    if (currentY > pageHeight) {
      pdf.addPage();
      currentY = margin;
    }
  }

  // --- Title ---
  addText(document.getElementById("final-message-title").innerText, {
    fontSize: 24, // Larger title
    fontWeight: "bold",
    color: primaryColor,
  });

  // --- Message ---
  addText(document.getElementById("final-message").innerText, {
    fontSize: 14,
    maxWidth: pageWidth,
    color: textColor,
  });

  // --- Chart ---
  try {
    const chartCanvas = document.getElementById("radarChart");
    const chartDataURL = chartCanvas.toDataURL("image/png");
    const chartWidth = 1 * pageWidth;
    const chartHeight = (chartCanvas.height / chartCanvas.width) * chartWidth;

    if (currentY + chartHeight + margin > pageHeight) {
      pdf.addPage();
      currentY = margin;
    }

    pdf.addImage(chartDataURL, "PNG", margin, currentY, chartWidth, chartHeight);
    currentY += chartHeight + margin;
  } catch (error) {
    console.error("Error capturing chart:", error);
  }

  // --- Total Result ---
  addText(document.getElementById("total-result-title").innerText, {
    fontSize: 18,
    fontWeight: "bold",
    color: primaryColor,
  });
  addText(document.getElementById("total-result").innerText, {
    fontSize: 16,
    fontWeight: "bold",
    color: primaryColor,
  });

  // --- Total Result Interpretation ---
  addText(document.getElementById("total-result-interpretation").innerText, {
    fontSize: 14,
    maxWidth: pageWidth,
    color: textColor,
  });

  addVerticalSpace(12);

  // --- Section Results ---
  const sectionResults = document.getElementById("section-results").children;
  for (let i = 0; i < sectionResults.length; i++) {
    const section = sectionResults[i];

    addText(section.querySelector("h3").innerText, {
      fontSize: 18,
      fontWeight: "bold",
      color: primaryColor,
    });
    addText(section.querySelector("p").innerText, { fontSize: 14, color: textColor });
    const sectionInterpretation = section.querySelectorAll("p")[1].innerText;
    addText(sectionInterpretation, { fontSize: 14, maxWidth: pageWidth, color: textColor });

    if (i < sectionResults.length - 1) {
      addVerticalSpace(12);
    }
  }

  // --- Final Reflection ---
  addText(document.getElementById("final-reflection").innerText, {
    fontSize: 14,
    maxWidth: pageWidth,
    color: textColor,
  });

  // Save PDF
  pdf.save("IMP-Resultado.pdf");
  hideLoading();
}