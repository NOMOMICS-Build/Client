const PDFViewer = ({ pdfFile }: { pdfFile: string }) => {
  return (
    <div>
      <iframe
        src={`${pdfFile}`}
        title="PDF Viewer"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PDFViewer;
